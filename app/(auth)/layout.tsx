import { GenericLayoutProps } from "@/data/types";

const AuthLayout = ({ children }: GenericLayoutProps) => {
  return (
    <div className="flex items-center justify-center h-[calc(100%-170px)]">
      {children}
    </div>
  );
};

export default AuthLayout;
