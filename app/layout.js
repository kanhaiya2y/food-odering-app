import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";
import { ClerkProvider } from '@clerk/nextjs'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>


<html lang="en">
      <body className={inter.className}>
      <main className="max-w-4xl mx-auto  p-4">
      <Header/>
{children}
<footer className="text-center mt-10 font-semibold text-gray-400">
  &copy; 2021 Your Pizza Co., Inc. All rights reserved.
</footer>
</main></body>
    </html>
    
    </ClerkProvider>
   
  );
}
