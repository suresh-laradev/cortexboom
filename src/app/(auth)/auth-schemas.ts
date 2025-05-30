import { z } from "zod";

export const signUpSchema = z
  .object({
    username: z
      .string()
      .min(1, { message: "Name is required" })
      .regex(
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers, and underscores"
      )
      .transform((u) => u.trim()),

    email: z
      .string()
      .min(1, { message: "Email is required" })
      .email({ message: "Invalid email address" })
      .transform((e) => e.toLowerCase()),

    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[^A-Za-z0-9]/,
        "Password must contain at least one special character"
      )
      .transform((p) => p.trim()),

    confirmPassword: z
      .string()
      .min(1, "Please confirm your password")
      .transform((p) => p.trim()),
  })
  .superRefine(({ username, email, password, confirmPassword }, ctx) => {
    // Password matching validation
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords don't match",
        path: ["confirmPassword"],
      });
      return; // Early return if passwords don't match
    }

    // Password content validation
    const normalizedPassword = password.toLowerCase();
    const normalizedUsername = username.toLowerCase();
    const emailUsername = email.split("@")[0].toLowerCase();

    if (normalizedPassword.includes(normalizedUsername)) {
      ctx.addIssue({
        code: "custom",
        message: "Password cannot contain username",
        path: ["password"],
      });
    }

    if (normalizedPassword.includes(emailUsername)) {
      ctx.addIssue({
        code: "custom",
        message: "Password cannot contain email username",
        path: ["password"],
      });
    }

    // Password strength validation
    try {
      const strength = calculatePasswordStrength(password);
      if (strength < 50) {
        ctx.addIssue({
          code: "custom",
          message:
            "Password is too weak. Please use a stronger combination of characters.",
          path: ["password"],
        });
      }
    } catch (error) {
      ctx.addIssue({
        code: "custom",
        message: "Error calculating password strength",
        path: ["password"],
      });
    }
  });

export type SignUpSchema = z.infer<typeof signUpSchema>;

export function calculatePasswordStrength(password: string): number {
  if (!password || typeof password !== "string") {
    return 0;
  }

  let score = 0;

  // Length contribution (up to 25 points)
  score += Math.min(25, password.length * 2);

  // Character variety contributions
  if (/[A-Z]/.test(password)) score += 15; // uppercase
  if (/[a-z]/.test(password)) score += 15; // lowercase
  if (/[0-9]/.test(password)) score += 15; // numbers
  if (/[^A-Za-z0-9]/.test(password)) score += 15; // special chars

  // Bonus for combination of character types
  const variations = [/[A-Z]/, /[a-z]/, /[0-9]/, /[^A-Za-z0-9]/].filter(
    (pattern) => pattern.test(password)
  ).length;
  score += (variations - 1) * 5;

  // Penalties
  if (/^[A-Za-z]*$/.test(password)) score -= 10; // letters only
  if (/^[0-9]*$/.test(password)) score -= 10; // numbers only
  if (/(.)\1{2,}/.test(password)) score -= 10; // repeated characters

  // Ensure score stays between 0 and 100
  return Math.max(0, Math.min(100, score));
}
