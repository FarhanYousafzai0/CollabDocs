import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider, SignedOut, SignInButton } from "@clerk/nextjs";
import { SignIn, UserButton } from "@clerk/clerk-react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "CollabDocs",
  description: "Build with love and passion.",
};

export default function RootLayout({ children }) {
  return (
   <ClerkProvider>

 <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header>
<div className="flex w-fit justify-center items-center gap-4">

  <p className="text-white">Fake Document</p>
</div>
<SignedOut>
  <SignInButton/>
</SignedOut>
<SignIn>
  <UserButton/>
</SignIn>
        </Header>
        {children}
      </body>
    </html>


   </ClerkProvider>

  );
}
