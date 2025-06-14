import ReactQueryProvider from "@/providers/react-query-provider";
import { ThemeProvider } from "@/providers/theme-provider";
import type { Metadata } from "next";
import { Nunito, PT_Sans } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  preload: false,
});

const ptSans = PT_Sans({
  variable: "--font-pt-sans",
  subsets: ["latin"],
  weight: ["400", "700"],
  preload: false,
});

const ibmPlexSans = localFont({
  src: [
    {
      path: "/fonts/IBMPlexSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    { path: "/fonts/IBMPlexSans-Medium.ttf", weight: "500", style: "normal" },
    {
      path: "/fonts/IBMPlexSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    { path: "/fonts/IBMPlexSans-Bold.ttf", weight: "700", style: "normal" },
  ],
});
const bebasNeue = localFont({
  src: [
    { path: "/fonts/BebasNeue-Regular.ttf", weight: "400", style: "normal" },
  ],
  variable: "--bebas-neue",
});

export const metadata: Metadata = {
  title: "Cortex Boom",
  description: "We address your problems with AI",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${ibmPlexSans.className} ${bebasNeue.variable} ${nunito.variable} ${ptSans.variable}  antialiased relative h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
