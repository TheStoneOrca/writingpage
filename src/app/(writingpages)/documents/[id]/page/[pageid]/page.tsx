"use client";

import StarterKit from "@tiptap/starter-kit";
import Navbar from "./__components/navbar";
import TextEditor from "./__components/texteditor";
import { useEditor } from "@tiptap/react";
import CharacterCount from "@tiptap/extension-character-count";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function PageInDocumentPage() {
  const { id, pageid } = useParams();

  const extensions = [StarterKit, CharacterCount.configure({ limit: 2200 })];

  const editor = useEditor({
    extensions,
    editorProps: {
      attributes: {
        class: "max-h-full border border-black",
      },
    },
  });

  useEffect(() => {
    document.title = "Coco's World";
  }, []);

  return (
    <div className="dark:bg-[#1a1b1e] h-full">
      <Navbar editorprops={editor} />
      <div className="flex justify-center mt-2">
        <TextEditor
          editor={editor}
          currentpage={pageid as any}
          currentdocument={id as any}
          maxpage={3}
          currentchapter={1}
        />
      </div>
    </div>
  );
}
