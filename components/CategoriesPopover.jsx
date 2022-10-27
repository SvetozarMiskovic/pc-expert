import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { useGlobalContext } from "../context/GlobalContext";

function CategoriesPopover({ children }) {
  const { popover, updatePopover } = useGlobalContext();

  return (
    <Popover
      initialFocusRef={""}
      isOpen={popover}
      placement="right"
      closeOnBlur={true}
      trigger="click"
      onOpen={() => updatePopover()}
      onClose={() => updatePopover()}
    >
      <PopoverTrigger>{children}</PopoverTrigger>
      <PopoverContent>
        <PopoverHeader fontWeight="semibold">Confirmation</PopoverHeader>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverBody>
          Are you sure you want to continue with your action?
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default CategoriesPopover;
