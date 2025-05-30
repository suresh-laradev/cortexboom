import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

// Get current file and directory paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Initialize FlatCompat for legacy config compatibility
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

// ESLint configuration array
const eslintConfig = [
  // Extend popular and useful configs
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:tailwindcss/recommended",
    "prettier"
  ),

  // Custom rule overrides
  {
    rules: {
      // ✅ JavaScript Rules
      "no-undef": "off", // Next.js handles global scope better

      // 🚫 Code Quality
      "no-console": "warn", // Allow console with warning
      "no-debugger": "warn", // Allow debugger with warning

      // ✅ Best Practices
      "eqeqeq": ["error", "always"], // Enforce strict equality

      // 🧼 Code Style
      "quotes": ["error", "single", { avoidEscape: true }],
      "semi": ["error", "always"],
      "comma-dangle": ["error", "always-multiline"],
      "object-curly-spacing": ["error", "always"],

      // ⚙️ TypeScript-specific (if needed)
      "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
      "@typescript-eslint/explicit-function-return-type": "off",
    },
  },
];

export default eslintConfig;
