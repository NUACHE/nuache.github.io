import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const font = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Michael Opoku",
  description: "My Software Engineering Portfolio",
  icons: {
    icon: '/icon/icon.png', // /public path
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <head>
       <link rel="icon" href="/icon?<generated>" type="image/png" sizes="32x32" />
  </head>
      <body className={font.className}>
        <div className="py-[10vh] max-w-3xl mx-auto p-6">{children}</div>
      </body>
    </html>
  );
}
