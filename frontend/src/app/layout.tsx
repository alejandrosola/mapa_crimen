import MainLayout from "@/components/MainLayout";
import "./globals.css";
import "ol/ol.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mapa crimen",
  description: "Mapa del crimen de la Argentina",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MainLayout> {children}</MainLayout>
      </body>
    </html>
  );
}
