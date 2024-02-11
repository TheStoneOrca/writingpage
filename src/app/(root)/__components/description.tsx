import { cn } from "@/lib/utils";
import { Rubik } from "next/font/google";

const rubik = Rubik({
  weight: "400",
  subsets: ["latin"],
});

export default function Description() {
  return (
    <div
      className={cn(
        "flex flex-col text-1xl md:text-base lg:text-base xl text-center",
        rubik.className
      )}
    >
      <h1>
        Do stuff like never before. Write the best story, publish it online, get
        famous overnight (well, maybe)!
      </h1>
      <h1>You won't regret it!</h1>
    </div>
  );
}
