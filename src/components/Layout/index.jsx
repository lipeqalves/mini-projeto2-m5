import { Header } from "../Header";
import { Footer } from "../Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
};
