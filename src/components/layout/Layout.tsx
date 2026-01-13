import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "@/components/common/ScrollToTop";

interface LayoutProps {
  children: ReactNode;
  hideHeader?: boolean;
}

const Layout = ({ children, hideHeader = false }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      {!hideHeader && <Header />}
      <main className="flex-1">{children}</main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Layout;
