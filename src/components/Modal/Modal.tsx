import React, { Dispatch, SetStateAction } from "react";
import { CloseModal, ImageModal, ModalWrapper } from "./Modal.styled";
import { IPhoto } from "utils/types";
import { createPortal } from "react-dom";

export default function Modal({
  big_url,
  closeModal,
}: Pick<IPhoto, "big_url"> & {
  closeModal: Dispatch<SetStateAction<boolean>>;
}) {
  return createPortal(
    <ModalWrapper>
      <ImageModal>
        <img src={big_url} alt="600x600" />
      </ImageModal>
      <CloseModal onClick={() => closeModal((prev) => !prev)}>
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 2a6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1.00049 1L25 24.9995" stroke="white" strokeWidth="2" />
          <path d="M24.9995 1L1 24.9995" stroke="white" strokeWidth="2" />
        </svg>
      </CloseModal>
    </ModalWrapper>,
    document.body
  );
}
