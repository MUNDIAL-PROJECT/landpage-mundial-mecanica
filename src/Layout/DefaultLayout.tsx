import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { LayoutContainer } from "./styles";
import { Footer } from "../components/Footer";
import { HeaderMenu } from "../components/HeaderMenu";

export const DefaultLayout = () => {
  return (
    <LayoutContainer>
      <div>
        <Header />
        <HeaderMenu />
      </div>
      <Outlet />
      <Footer />
    </LayoutContainer>
  );
};
