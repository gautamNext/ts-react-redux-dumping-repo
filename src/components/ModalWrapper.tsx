import React from "react";
import { Modal } from "./practice/modal/Modal";

export const ModalWrapper = () => {
  return (
    <Modal>
      <div>This is modal's child inside portal. Yay!</div>
    </Modal>
  );
};
