import "./globals.css";
import { Geist, Geist_Mono, Instrument_Serif } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import ThemeProvider from "./components/ThemeProvider";
import { Toaster } from "./components/ui/sonner";

const geist = Geist({ subsets: ["latin"], display: "swap", variable: "--font-geist" });
const geistMono = Geist_Mono({ subsets: ["latin"], display: "swap", variable: "--font-geist-mono" });
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], display: "swap", variable: "--font-instrument" });

export const metadata = {
  title: {
    default: "Kumar Shashwat Sandilya · AI Engineer",
    template: "%s | Shashwat",
  },
  description:
    "AI engineer building production LLM systems: voice agents, multi-agent orchestration, RAG and the infrastructure to run them.",
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
  metadataBase: new URL("https://www.kss04.me/"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.kss04.me/",
    title: "Kumar Shashwat Sandilya · AI Engineer",
    description:
    "AI engineer building production LLM systems: voice agents, multi-agent orchestration, RAG and the infrastructure to run them.",
    siteName: "Shashwat",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kumar Shashwat Sandilya · AI Engineer",
    description:
    "AI engineer building production LLM systems: voice agents, multi-agent orchestration, RAG and the infrastructure to run them.",
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
        <meta name="theme-color" content="#ffffff" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#0a0a0a" media="(prefers-color-scheme: dark)" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={`${geist.variable} ${geistMono.variable} ${serif.variable} font-sans antialiased`}>
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
