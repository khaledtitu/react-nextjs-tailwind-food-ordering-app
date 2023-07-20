import "./globals.css";

import { Footer, NavBar } from "../components"

export const metadata = {
  title: "Order Food ",
  description: "Best food ordering website ",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
