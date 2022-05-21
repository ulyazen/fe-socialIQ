/* eslint-disable react-hooks/rules-of-hooks */

import styled from "styled-components";
import { forwardRef, useEffect, useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const PopupWrapper = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(41, 45, 50, 0.1);
  z-index: 9999;
  display: flex;
`;

const PopupContent = styled.div`
  width: max-content;
  padding: 32px;
  // box-shadow: 0px 16px 64px rgba(0, 0, 0, 0.04);
  border-radius: 30px;
  background: #ffffff;
  margin: auto;
`;

const PopupHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PopupHeaderTitle = styled.span`
  display: block;
  letter-spacing: -0.03em;
  font-weight: 500;
  font-size: 24px;
  line-height: 36px;
  color: #101010;
`;

const PopupHeaderActions = styled.div`
  display: flex;
  font-size: 20px;

  svg {
    cursor: pointer;
  }

  .delete-btn {
    margin-right: 10px;
    color: #d8dce9;
  }

  .edit-btn {
    color: #237cfb;
  }
`;

const Popup = forwardRef((props, ref) => {
  const { trigger: button, children } = props;
  const [show, setShow] = useState(false);

  const isChildrenFunction = typeof children === "function";

  useEffect(() => {
    if (button) {
      button.addEventListener("click", () => {
        setShow(true);
      });
    }
  }, [button]);

  if (!show) return <></>;

  if (isChildrenFunction) {
    const ChildComponent = children;

    return (
      <PopupWrapper
        {...props}
        onClick={(e) => {
          setShow(false);
        }}
      >
        <ChildComponent show={show} setShow={setShow} />
      </PopupWrapper>
    );
  }

  return (
    <PopupWrapper
      {...props}
      onClick={(e) => {
        setShow(false);
      }}
    >
      {children}
    </PopupWrapper>
  );
});

Popup.Content = ({ children }) => {
  const handleClickContent = (e) => {
    e.stopPropagation();
  };

  return <PopupContent onClick={handleClickContent}>{children}</PopupContent>;
};

Popup.Header = ({ children }) => {
  return <PopupHeader>{children}</PopupHeader>;
};

Popup.Header.Title = forwardRef((props, ref) => {
  const { children } = props;

  return (
    <PopupHeaderTitle ref={ref} {...props}>
      {children}
    </PopupHeaderTitle>
  );
});

Popup.Header.Actions = (props) => {
  const { actions, onClickEdit = () => {}, onClickDelete = () => {} } = props;

  const canEdit = actions.includes("edit");
  const canDelete = actions.includes("delete");

  return (
    <PopupHeaderActions>
      {canDelete && (
        <FaTrash onClick={(e) => onClickDelete(e)} className="delete-btn" />
      )}
      {canEdit && (
        <FaEdit onClick={(e) => onClickEdit(e)} className="edit-btn" />
      )}
    </PopupHeaderActions>
  );
};

export default Popup;
