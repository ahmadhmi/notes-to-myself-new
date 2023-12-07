import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "./auth/Provider";
import { Session } from 'next-auth'
import { headers } from 'next/headers'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Notes to Myself",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
      <AuthContext session={session}>
          {children}
        </AuthContext>
      </body> 
    </html>
  );
}
