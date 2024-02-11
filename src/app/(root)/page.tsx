"use client";

import { Button } from "@/components/ui/button";
import Description from "./__components/description";
import Footer from "@/components/footer";
import Header from "./__components/header";
import { Loader2Icon } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

export default function HomePage() {
  return (
    <div className="min-h-full flex flex-col dark:bg-[#1a1b1e]">
      <div className="mt-1">
        <Header />
      </div>
      <div className="flex flex-col items-center justify-center md:justify-start text-center gap-y-8 flex-1 px-6 pb-10">
        <Description />
      </div>

      {/* {!isLoaded && (
        <Loader2Icon className="animate-spin dark:text-white text-black" />
      )}
      {isLoaded && !isSignedIn && (
        <div className="flex justify-center">
          <SignInButton>
            <Button variant="default">Start Now</Button>
          </SignInButton>
        </div>
      )}
      {isLoaded && isSignedIn && (
        <div className="flex justify-center">
          {" "}
          <Button asChild variant="default">
            <Link href="/home">Continue Writing</Link>
          </Button>
        </div>
      )}
      <SignOutButton></SignOutButton> */}
      <Footer />
    </div>
  );
}
