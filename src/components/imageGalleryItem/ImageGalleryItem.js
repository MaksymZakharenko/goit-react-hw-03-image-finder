import React from "react";
import styles from "./ImageGalleryItem.module.css";
import PropTypes from "prop-types";

const ImageGalleryItem = ({ item, openModal, modalImage }) => {
  return (
    <li className={styles.ImageGalleryItem}>
      <img
        onClick={() => openModal(modalImage)}
        src={item.webformatURL}
        alt={item.tags}
        className={styles.ImageGalleryItemImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.object.isRequired,
  modalImage: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
