"use client";

import { Button } from "@/components/ui/button";

export default function SavePageButton() {
  return (
    <div className="flex justify-between w-[650px]">
      <form>
        <Button type="submit">Save Changes</Button>
      </form>
      <form>
        <Button type="submit">Publish Changes</Button>
      </form>
    </div>
  );
}
