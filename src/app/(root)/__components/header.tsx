import { cn } from "@/lib/utils";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  weight: "400",
  subsets: ["latin"],
});

export default function Header() {
  return (
    <div>
      <div
        className={cn(
          "text-center flex flex-col w-full lg:text-4xl text-6xl md:text-7xl",
          rubik.className
        )}
      >
        <div>
          <h1 className="text-3xl">Writers' World</h1>
          <h1 className="text-sm">Your source for writing</h1>
        </div>
      </div>
    </div>
  );
}
