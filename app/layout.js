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
    default: "Shashwat — Senior AI Engineer",
    template: "%s | Shashwat",
  },
  description:
    "Senior AI engineer shipping production GenAI, ML, and full-stack systems. Deep learning, computer vision, audio AI, agentic LLM workflows, and end-to-end deployment.",
  keywords: [
    "Senior AI Engineer",
    "Machine Learning Engineer",
    "GenAI",
    "LLM",
    "Production AI",
    "Computer Vision",
    "Audio AI",
    "Full Stack",
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
    title: "Shashwat — Senior AI Engineer",
    description:
      "Senior AI engineer shipping production GenAI, ML, and full-stack systems.",
    siteName: "Shashwat",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shashwat — Senior AI Engineer",
    description:
      "Senior AI engineer shipping production GenAI, ML, and full-stack systems.",
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
