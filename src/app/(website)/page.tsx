"use client";

import Footer from "@/app/_navigation/footer";
import { Button } from "@/components/ui/button";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { loginPath, signupPath } from "@/paths";
import { ArrowUp, TrendingUp } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { Bar, BarChart, CartesianGrid, Cell, LabelList } from "recharts";

import { Card, CardFooter } from "@/components/ui/card";
import ScrollProgress from "./components/scroll-progress";

const chartData = [
  { month: "January", visitors: 186 },
  { month: "February", visitors: 205 },
  { month: "March", visitors: -207 },
  { month: "April", visitors: 173 },
  { month: "May", visitors: -209 },
  { month: "June", visitors: 214 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
};

const scrollToSection = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: "smooth" });
  }
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const animationVariants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
};

const LandingPage = () => {
  return (
    <div className="min-h-screen relative bg-gradient-to-b from-gray-100 to-gray-50 dark:from-gray-950 dark:to-gray-900">
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full">
          <filter id="noise">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.90"
              numOctaves="4"
              stitchTiles="stitch"
            />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* Content container */}
      <div className="relative z-10">
        <header className="flex justify-between items-center px-6 py-4  backdrop-blur-sm shadow-md dark:shadow-lg">
          <h1 className="text-2xl font-bold">Cortex Boom</h1>
          <nav className="hidden md:flex gap-4 text-sm font-medium">
            <Button
              variant={"ghost"}
              onClick={() => scrollToSection("features")}
            >
              Features
            </Button>
            <Button
              variant={"ghost"}
              onClick={() => scrollToSection("performance")}
            >
              Performance
            </Button>
            <Button
              variant={"ghost"}
              onClick={() => scrollToSection("pricing")}
            >
              Pricing
            </Button>
            <Button
              variant={"ghost"}
              onClick={() => scrollToSection("testimonials")}
            >
              Testimonials
            </Button>
            <Button
              variant={"ghost"}
              onClick={() => scrollToSection("contact")}
            >
              Contact
            </Button>
            <section className="flex gap-2">
              <Button variant={"ghost"} size="sm" asChild>
                <Link href={loginPath()}>signin</Link>
              </Button>
              <Button variant={"ghost"} size="sm" asChild>
                <Link href={signupPath()}>signup</Link>
              </Button>
            </section>
          </nav>
        </header>

        <ScrollProgress>
          <section className="text-center px-4 py-20 relative overflow-hidden">
            <motion.div
              initial="initial"
              animate="animate"
              transition={{ duration: 0.9 }}
              variants={animationVariants}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Trade Gold with a Touch of Magic ✨
              </h2>
              <p className="text-lg max-w-xl mx-auto mb-6">
                High-performance XAUUSD robots powered by tested algorithms.
              </p>
              <div className="flex justify-center gap-4">
                <Button>Buy Now</Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("performance")}
                >
                  View Performance
                </Button>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute left-10 top-10 w-10 h-10 rounded-full opacity-30"
            />
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute right-10 bottom-10 w-16 h-16 rounded-full opacity-20"
            />
          </section>

          {/* Features */}
          <section id="features" className="py-16 px-4 md:px-12">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Performance", text: "Avg ROI: 15% Monthly" },
                { title: "Winrate", text: "Backtested: 92%, Live: 87%" },
                { title: "Minimum Deposit", text: "$100 to Start Trading" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 100 }}
                  className="rounded-2xl shadow-md p-6"
                >
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Performance */}
          <section id="performance" className="py-16 px-4 md:px-12">
            <Tabs defaultValue="monthly" className="max-w-4xl mx-auto">
              <TabsList className="flex justify-center space-x-4">
                <TabsTrigger value="monthly">Monthly ROI</TabsTrigger>
                <TabsTrigger value="winrate">Winrate</TabsTrigger>
              </TabsList>
              <TabsContent value="monthly">
                <Card className="p-4">
                  <ChartContainer config={chartConfig}>
                    <BarChart accessibilityLayer data={chartData}>
                      <CartesianGrid vertical={false} />
                      <ChartTooltip
                        cursor={false}
                        content={
                          <ChartTooltipContent hideLabel hideIndicator />
                        }
                      />
                      <Bar dataKey="visitors">
                        <LabelList
                          position="top"
                          dataKey="month"
                          fillOpacity={1}
                        />
                        {chartData.map((item) => (
                          <Cell
                            key={item.month}
                            fill={
                              item.visitors > 0
                                ? "hsl(var(--chart-1))"
                                : "hsl(var(--chart-2))"
                            }
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ChartContainer>
                </Card>
                <CardFooter className="flex-col items-start gap-2 text-sm mt-4">
                  <div className="flex gap-2 font-medium leading-none">
                    Trending up by 5.2% this month{" "}
                    <TrendingUp className="h-4 w-4" />
                  </div>
                  <div className="leading-none text-muted-foreground">
                    Showing total ROI for the last 6 months
                  </div>
                </CardFooter>
              </TabsContent>
              <TabsContent value="winrate">
                <Card className="p-4 text-center">
                  <p className="text-lg font-semibold">
                    Backtested: 92% | Live: 87%
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Updated April 2025
                  </p>
                </Card>
              </TabsContent>
            </Tabs>
          </section>
        </ScrollProgress>

        {/* Scroll to Top Button */}
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 rounded-full p-3 shadow-lg"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>

        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;

const NavLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    className="hover:bg-accent hover:text-accent-foreground rounded-md px-2 py-1 transition-colors duration-200"
  >
    {children}
  </Link>
);
