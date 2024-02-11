"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import SignUpForm from "./signinform";

export default function SignInPage() {
  return (
    <div className="dark:bg-[#1a1b1e] flex justify-center w-full">
      <div className="flex flex-col justify-center h-[100vh]  items-center w-96">
        <SignUpForm />
        <div className="flex justify-between text-[10px] w-full">
          <Button asChild variant="ghost">
            <Link href="">Privacy and Policy</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="">Terms and Conditions</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
