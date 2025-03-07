import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { AppWrapper } from "@/context/context";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "International House Monterrey",
  description: "Internal Portal",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="bg-background text-foreground">
        <main className="min-h-screen flex flex-col items-center">
          <AppWrapper>
            {children}
          </AppWrapper>
        </main>
      </body>
    </html>
  );
}
