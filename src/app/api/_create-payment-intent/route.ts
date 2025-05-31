// import { stripe } from "@/lib/stripe";
// import { NextRequest, NextResponse } from "next/server";
// import { z } from "zod";

// const paymentSchema = z.object({
//   amount: z.number().positive().int(),
// });

// export async function POST(req: NextRequest) {
//   try {
//     // Validate request body
//     const body = await req.json();
//     const { amount } = paymentSchema.parse(body);

//     // Create payment intent with timeout
//     const paymentIntent = await Promise.race([
//       stripe.paymentIntents.create({
//         amount,
//         currency: "usd",
//         automatic_payment_methods: {
//           enabled: true,
//         },
//       }),
//       new Promise((_, reject) =>
//         setTimeout(() => reject(new Error("Request timeout")), 10000)
//       ),
//     ]);

//     return NextResponse.json(
//       {
//         clientSecret: paymentIntent.client_secret,
//       },
//       {
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//   } catch (error) {
//     console.error("[PAYMENT_INTENT_ERROR]", error);

//     // Handle specific error types
//     if (error instanceof z.ZodError) {
//       return NextResponse.json(
//         {
//           error: "Invalid amount provided",
//         },
//         {
//           status: 400,
//         }
//       );
//     }

//     if (error.code === "ECONNRESET") {
//       return NextResponse.json(
//         {
//           error: "Connection failed, please try again",
//         },
//         {
//           status: 503,
//         }
//       );
//     }

//     return NextResponse.json(
//       {
//         error: "Payment initialization failed",
//       },
//       {
//         status: 500,
//       }
//     );
//   }
// }
