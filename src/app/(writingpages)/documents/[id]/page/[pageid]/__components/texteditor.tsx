"use client";

import { EditorContent } from "@tiptap/react";
import ChangePageButton from "./changepagebutton";

export default function TextEditor(props: {
  editor: any;
  currentpage: number;
  currentdocument: number;
  maxpage: number;
  currentchapter: number;
}) {
  return (
    <div className="w-[650px] h-[450px]">
      <div className="flex justify-center mt-0">
        <h1 className="text-2xl">Chapter {props.currentchapter}</h1>
      </div>
      <EditorContent editor={props.editor} />
      <div>
        <ChangePageButton
          currentpage={props.currentpage}
          currentdocument={props.currentdocument}
          maxpage={props.maxpage}
        />
      </div>
    </div>
  );
}
