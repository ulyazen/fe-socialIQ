/* eslint-disable react-hooks/rules-of-hooks */

import styled from "styled-components";
import { useState, createContext, useContext } from "react";
import classNames from "classnames";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const initialContext = {
  open: false,
  textContent: null,
  valueItem: null,
};

const DropdownContext = createContext(initialContext);

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 50;

  .menu-button {
    svg {
      margin-left: 10px;
    }

    &.hidden-default-arrow {
      .my-arrow-default {
        display: none;
      }
    }
  }
`;

const MenuItemsWrapper = styled.div`
  width: auto;
  height: auto;
  display: none;
  padding: 10px;
  background: white;
  box-shadow: 0px 16px 64px rgba(0, 0, 0, 0.04);
  border-radius: 9px;
  flex-direction: column;
  overflow: hidden;
  margin-top: 3px;
  z-index: 99999;

  &.show-menu {
    display: flex;
  }
`;

const MenuItem = styled.div`
  width: auto;
  height: auto;
  border-radius: 15.5px;
  padding: 7px 0;
  text-align: center;
  color: ${(props) => props.theme.colors["p3"]};
  font-size: ${(props) => props.theme.fontSize["xs"]};
  line-height: 18px;
  cursor: pointer;

  :not(:last-child) {
    margin-bottom: 5px;
  }

  :hover,
  &.active {
    background: ${(props) => props.theme.colors["p1"]};
    color: white;
  }
`;

const MenuButton = styled.button`
  cursor: pointer;
`;

export const MenuContainer = styled.div`
  position: relative;
`;

export function Menu({
  children: Component,
  onItemChange = () => {},
  context,
  ...props
}) {
  const [showMenu, setShowMenu] = useState(context || initialContext);

  if (typeof Component === "function") {
    return (
      <DropdownContext.Provider
        value={{
          showMenu,
          setShowMenu,
          onItemChange,
        }}
      >
        <MenuWrapper {...props}>
          <Component
            setShowMenu={setShowMenu}
            open={showMenu.open}
            textContent={showMenu.textContent}
          />
        </MenuWrapper>
      </DropdownContext.Provider>
    );
  }

  return (
    <DropdownContext.Provider
      value={{
        showMenu,
        setShowMenu,
        onItemChange,
      }}
    >
      <MenuWrapper {...props}> {Component}</MenuWrapper>
    </DropdownContext.Provider>
  );
}

Menu.Items = ({ children, className = "", ...props }) => {
  const { showMenu } = useContext(DropdownContext);

  return (
    <MenuItemsWrapper
      className={classNames("menu-items", className, {
        "show-menu": showMenu?.open,
      })}
      {...props}
    >
      {children}
    </MenuItemsWrapper>
  );
};

Menu.Item = ({ children, className = "", ...props }) => {
  const { onItemChange, setShowMenu } = useContext(DropdownContext);
  const { prevent } = props;

  const handleClickItem = (event) => {
    const { target } = event;

    if (!prevent) {
      setShowMenu({ open: false });
    }

    const items = document.querySelectorAll(".menu-item");

    items.forEach((item) => {
      item.classList.remove("active");
    });

    target.classList.add("active");

    const valueItem = target.getAttribute("value");

    setShowMenu((prev) => ({
      ...prev,
      textContent: target.textContent,
      valueItem,
    }));

    onItemChange(event, valueItem);
  };

  return (
    <MenuItem
      onClick={handleClickItem}
      className={`${className} menu-item`}
      {...props}
    >
      {children}
    </MenuItem>
  );
};

Menu.Button = ({
  children,
  className = "",
  onItemChange = () => {},
  onClick = () => {},
  prevent,
  ...props
}) => {
  const { showMenu, setShowMenu } = useContext(DropdownContext);

  const handleClickButton = (e) => {
    onClick(e);

    if (showMenu) {
      return setShowMenu((prev) => ({ ...prev, open: !showMenu?.open }));
    }
  };

  return (
    <MenuButton
      className={`menu-button ${className}`}
      onClick={handleClickButton}
      {...props}
    >
      {showMenu.textContent && !prevent ? (
        <>
          {showMenu.open ? (
            <>
              {showMenu.textContent}{" "}
              <FaChevronUp className="my-arrow-default" />
            </>
          ) : (
            <>
              {showMenu.textContent}{" "}
              <FaChevronDown className="my-arrow-default" />
            </>
          )}
        </>
      ) : (
        children
      )}
    </MenuButton>
  );
};
