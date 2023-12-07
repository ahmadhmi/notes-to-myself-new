"use client"; 

import { RedirectType, redirect } from "next/navigation";
import Link from "next/link";

import { useSession } from "next-auth/react";


export default function Home() {

  const {status, data: session} = useSession();



  if(status === "loading")
  {
    return(
      <main className="flex flex-col justify-center items-center min-h-screen">
        <div className="flex flex-col gap-2">
          <h1>Loading...</h1>
        </div>
      </main>
    )
  }

  else if(status === "authenticated")
  {
    redirect("/notes", RedirectType.push); 
  }
  else
  {
    return(
      <main className="flex flex-col justify-center items-center min-h-screen">
        <div className="flex flex-col gap-2">
          <Link href="/api/auth/signin">Sign In</Link>
        </div>
      </main>
    )
  }


}
