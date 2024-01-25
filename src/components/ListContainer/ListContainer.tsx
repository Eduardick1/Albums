import type { ReactNode } from "react";
import { List } from "./ListContainer.styled";

export default function ListContainer({ children }: { children: ReactNode }) {
  return <List>{children}</List>;
}
