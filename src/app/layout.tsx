import type { Metadata } from "next";
import "./globals.scss";
import Image from "next/image";

export const metadata: Metadata = {
  title: "spider-verse",
  description: "criando um carrossel parallax do aranhaverso com react e next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <header>
        <Image
          src="/icons/menu.svg"
          alt="Opções de menu"
          width={36}
          height={25}
        />
        <Image src="/spider-logo.svg" alt="Spiderman" width={260} height={70} />
        <Image src="/icons/user.svg" alt="Login" width={36} height={36} />
      </header>
      <body>{children}</body>
    </html>
  );
}
