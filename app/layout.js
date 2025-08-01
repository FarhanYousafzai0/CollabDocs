import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import { Share } from "lucide-react";
import Provider from "./Provider";

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
      <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
        <body className="antialiased">
          <Header>
            <div className="flex w-fit justify-center items-center gap-4">
              <button className="px-6 py-3 rounded-md shadow cursor-pointer bg-black text-white flex items-center gap-2">
                Share <Share />
              </button>

              <SignedOut>
                <SignInButton
                  mode="modal"
                  appearance={{
                    elements: {
                      button:
                        "text-white cursor-pointer bg-transparent font-medium hover:text-gray-200 transition-colors duration-200",
                    },
                  }}
                />
              </SignedOut>

              <SignedIn>
                <UserButton />
              </SignedIn>
            </div>
          </Header>

          <Provider>{children}</Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
