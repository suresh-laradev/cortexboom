// import Stripe from "stripe";

// import { stripe } from "@/lib/stripe";

// import { headers } from "next/headers";

// import { NextResponse } from "next/server";

// export async function POST(req: Request) {
//   const body = await req.text();
//   const signature = (await headers()).get("Stripe-signature") as string;

//   let event: Stripe.Event;
//   try {
//     event = stripe.webhooks.constructEvent(
//       body,
//       signature,
//       process.env.STRIPE_WEBHOOK_SECRET!
//     );
//     console.log("Event", event);
//   } catch (error) {
//     return new NextResponse("invalid signature" + error, { status: 400 });
//   }
//   const session = event.data.object as Stripe.Checkout.Session;
//   console.log(session);
//   if (event.type === "checkout.session.completed") {
//     // Handle successful checkout
//     console.log("Checkout session completed", session);
//     const subscription = await stripe.subscriptions.retrieve(
//       session.subscription as string
//     );
//     console.log("Subscription", subscription);
//   }
//   return new NextResponse("ok", { status: 200 });
// }
