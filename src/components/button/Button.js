import React from "react";
import styles from "./Button.module.css";
import PropTypes from "prop-types";

const Button = ({ showMore }) => {
  return (
    <>
      <button className={styles.showMore} onClick={showMore}>
        Show More
      </button>
    </>
  );
};

Button.propTypes = {
  showMore: PropTypes.func.isRequired,
};

export default Button;


