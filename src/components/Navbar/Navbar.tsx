import React from "react";

import { useModal, useModalUpdate } from "../../contexts/ModalContext";
import Logo from "../Logo/Logo";
import {
  Container,
  Menu,
  MenuItem,
  MenuItemInnerLink,
  MenuItemOutterLink,
} from "./styles";

const YLV = "https://www.ylventures.com";

const Navbar: React.FC = () => {
  const { showModal } = useModal();
  const { toggleModal, updateModalType } = useModalUpdate();

  const onItemClicked = (tab: string) => {
    if (showModal) {
      updateModalType(null);
    } else {
      updateModalType({
        type: "tab",
        tab: tab,
      });
    }
    toggleModal();
  };

  return (
    <Container data-testid="navbar">
      <Logo />
      <Menu>
        <MenuItem
          onClick={() => {
            onItemClicked("about");
          }}
        >
          About
        </MenuItem>
        <MenuItem
          onClick={() => {
            onItemClicked("add");
          }}
        >
          Add a company
        </MenuItem>
        <MenuItemInnerLink
          to={"/analytics"}
          style={{ textDecoration: "none" }}
          onClick={() => {}}
        >
          Analytics
        </MenuItemInnerLink>
        <MenuItemOutterLink href={YLV} target={"_blank"} onClick={() => {}}>
          ylventures.com
        </MenuItemOutterLink>
      </Menu>
    </Container>
  );
};

export default Navbar;
