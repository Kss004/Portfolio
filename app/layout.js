import "./globals.css";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ThemeProvider from "./components/ThemeProvider";
import { Toaster } from "./components/ui/sonner";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
});

export const metadata = {
  title: {
    default: "Shashwat — AI Engineer",
    template: "%s | Shashwat",
  },
  description:
    "AI engineer building production multi-agent systems, RAG pipelines, speech AI, and full-stack infrastructure. Multi-agent orchestration, LLM evaluation, and real-time AI phone screening.",
  keywords: [
    "AI Engineer",
    "Machine Learning Engineer",
    "GenAI",
    "LLM",
    "Production AI",
    "Multi-Agent Systems",
    "RAG",
    "Speech AI",
    "Full Stack",
    "LangChain",
    "LangGraph",
  ],
  authors: [{ name: "Shashwat" }],
  creator: "Shashwat",
  publisher: "Shashwat",
  formatDetection: { email: false, address: false, telephone: false },
  metadataBase: new URL("https://shashwat-portfolio.vercel.app/"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://shashwat-portfolio.vercel.app/",
    title: "Shashwat — AI Engineer",
    description:
      "AI engineer building production multi-agent systems, RAG pipelines, speech AI, and full-stack infrastructure.",
    siteName: "Shashwat",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shashwat — AI Engineer",
    description:
      "AI engineer building production multi-agent systems, RAG pipelines, speech AI, and full-stack infrastructure.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster position="bottom-right" />
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
