import { Link } from "react-router-dom";
import { Container, NavWrapper } from "./styles";
import { List } from "@phosphor-icons/react";
import { useState } from "react";

export function HeaderMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuListItems = document.querySelectorAll(".hamburguerItem");

  const handleMenuOpen = () => {
    if (!isOpen) {
      menuListItems.forEach((item) => {
        item.setAttribute("style", "display: none");
      });
    } else {
      menuListItems.forEach((item) => {
        item.setAttribute("style", "display: flex; padding-bottom: 1rem");
      });
    }
    setIsOpen(!isOpen);
  };

  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      menuListItems.forEach((item) => {
        item.setAttribute("style", "display: flex;");
      });
    } else {
      menuListItems.forEach((item) => {
        item.setAttribute("style", "display: none;");
      });
    }
  });

  return (
    <Container>
      <NavWrapper>
        <ul>
          <List className="hamburguer" onClick={handleMenuOpen} />
          <Link to="/sobre-nos">
            <li className="hamburguerItem">A Mundial</li>
          </Link>
          <Link to="/servicos">
            <li className="hamburguerItem">Serviços</li>
          </Link>
          <Link to="/trabalhe-conosco">
            <li className="hamburguerItem">Trabalhe Conosco</li>
          </Link>
          <a href="/#faleconosco">
            <li className="hamburguerItem">Contato</li>
          </a>
        </ul>
      </NavWrapper>
    </Container>
  );
}
