import type { Dispatch, SetStateAction } from "react";
import { Icon } from "./OpenLabel.styled";

export default function OpenLabel({
  isOpen,
  toggleOpen,
}: {
  isOpen: boolean;
  toggleOpen: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <Icon onClick={() => toggleOpen((prev) => !prev)}>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {isOpen ? (
          <path d="M0 7H14" stroke="white" strokeWidth="2" />
        ) : (
          <>
            <path d="M0 7H14" stroke="white" strokeWidth="2" />
            <path d="M7 0L7 14" stroke="white" strokeWidth="2" />
          </>
        )}
      </svg>
    </Icon>
  );
}
