import React from "react";
import styles from "./Modal.module.css";
import PropTypes from "prop-types";

const Modal = ({ modalImage, closeModal }) => {
  return (
    <div onClick={closeModal} className={styles.Overlay}>
      <div className={styles.Modal}>
        <img src={modalImage} alt="" />
      </div>
    </div>
  );
};

Modal.propTypes = {
  modalImage: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
