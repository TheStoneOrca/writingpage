import Logo from "@/components/logo";
import { cn } from "@/lib/utils";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  weight: "400",
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <div className="flex w-full dark:bg-[#1a1b1e]">
      <div className={cn("flex", rubik.className)}>
        <Logo /> Writers' World
      </div>
    </div>
  );
}
