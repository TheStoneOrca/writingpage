import Image from "next/image";

export default function Logo() {
  return (
    <>
      <Image
        src="/icon--light.png"
        width={50}
        height={50}
        alt="Logo"
        className="dark:hidden"
      />
      <Image
        src="/icon.png"
        width={50}
        height={50}
        alt="Logo"
        className="hidden dark:block"
      />
    </>
  );
}
