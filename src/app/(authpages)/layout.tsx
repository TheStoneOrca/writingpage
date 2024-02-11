import Footer from "@/components/footer";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-full dark:bg-[#1a1b1e]">
      <main>{children}</main>
    </div>
  );
};

export default AuthLayout;
