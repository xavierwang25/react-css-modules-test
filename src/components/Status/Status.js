import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import styles from "./Status.module.css";

export const Status = ({ label, status }) => (
  <div className={cx(styles.status, styles[status])}>{label}</div>
);

Status.propTypes = {
  label: PropTypes.string.isRequired,
  status: PropTypes.string,
};

export default Status;
