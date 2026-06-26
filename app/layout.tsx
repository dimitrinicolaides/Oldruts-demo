import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Old Rutlishians Cricket Club — Demo Rebuild",
  description: "Founded 1908. Cricket in the heart of Merton Park, Wimbledon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
