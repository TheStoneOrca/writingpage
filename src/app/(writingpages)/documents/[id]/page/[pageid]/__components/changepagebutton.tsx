"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { ArrowBigLeft, ArrowBigRight, Plus } from "lucide-react";
import { useEffect } from "react";
import CreateNewPageButton from "./createnewpagebtn";
import SavePageButtons from "./savepagebtn";
import Link from "next/link";

export default function ChangePageButton(props: {
  currentpage: number;
  currentdocument: number;
  maxpage: number;
}) {
  return (
    <>
      <div className="flex justify-between w-[650px]">
        {props.currentpage != 1 && (
          <Button asChild>
            <Link
              href={`/documents/${props.currentdocument}/page/${
                Number(props.currentpage) - 1
              }`}
            >
              <ArrowBigLeft />
            </Link>
          </Button>
        )}
        <Label className="text-2xl">Page {props.currentpage}</Label>
        {props.maxpage !== Number(props.currentpage) ? (
          <Button asChild>
            <Link
              href={`/documents/${props.currentdocument}/page/${
                Number(props.currentpage) + 1
              }`}
            >
              <ArrowBigRight />
            </Link>
          </Button>
        ) : (
          <CreateNewPageButton />
        )}
      </div>
      <div className="flex justify-center mt-4  ">
        <SavePageButtons />
      </div>
    </>
  );
}
