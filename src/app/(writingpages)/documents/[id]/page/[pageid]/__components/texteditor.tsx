"use client";

import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import ChangePageButton from "./changepagebutton";

export default function TextEditor(props: {
  editor: any;
  currentpage: number;
  currentdocument: number;
  maxpage: number;
}) {
  return (
    <div className="w-[650px] h-[450px]">
      <EditorContent editor={props.editor} />
      <div className="mt">
        <ChangePageButton
          currentpage={props.currentpage}
          currentdocument={props.currentdocument}
          maxpage={props.maxpage}
        />
      </div>
    </div>
  );
}
