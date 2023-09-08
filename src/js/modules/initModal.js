import { Modal } from "./Modal";

export default () => {
  const modal = new Modal({
    isOpen: (modal) => {

    },
    isClose: (modal) => {
    },
  });

  window.shampur_API.modal = modal;
};
