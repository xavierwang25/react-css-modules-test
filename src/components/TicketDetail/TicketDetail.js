import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Card from "../Card";
import Moment from "react-moment";
import styles from "./TicketDetail.module.css";
import Status from "../Status";
import getLabelFromStatus from "../../utils/getLabelFromStatus";

const TicketDetail = ({ ticket }) => (
  <div className={styles.container}>
    {ticket == null ? (
      <div className={styles.empty}>
        <div className={styles.times}>
          <i className="fas fa-times"></i>
        </div>
        <div className={styles.value}>No ticket Selected</div>
      </div>
    ) : (
      <Fragment>
        <Card title="Owner">
          <div className={styles.ownerBody}>
            <img
              className={styles.avatar}
              src={ticket.avatar}
              alt={ticket.name}
            ></img>
            <div className={styles.labelValue}>
              <div className={styles.value}>{ticket.name}</div>
              <div className={styles.speciality}>{ticket.specialities[0]}</div>
            </div>
          </div>
        </Card>
        <Card title="Details">
          <div className={styles.detailBody}>
            <div className={styles.labelValue}>
              <div className={styles.label}>Reported</div>
              <div className={styles.value}>
                <Moment format="MM/DD/YY HH:mm">{ticket.reported}</Moment>
              </div>
            </div>
            <div className={styles.labelValue}>
              <div className={styles.label}>Status</div>
              <div className={styles.value}>
                <Status
                  label={getLabelFromStatus(ticket.status)}
                  status={ticket.status}
                ></Status>
              </div>
            </div>
            <div className={styles.labelValue}>
              <div className={styles.label}>Description</div>
              <div className={styles.value}>{ticket.description}</div>
            </div>
          </div>
        </Card>
        <Card title="Asset">
          <div className={styles.detailBody}>
            <div className={styles.labelValue}>
              <div className={styles.label}>Name</div>
              <div className={styles.value}>{ticket.assetName}</div>
            </div>
            <div className={styles.labelValue}>
              <div className={styles.label}>GeoCode</div>
              <div className={styles.value}>{ticket.geoCode}</div>
            </div>
            <div className={styles.labelValue}>
              <div className={styles.label}>GeoCode</div>
              <div className={styles.location}>
                <Status label="2.900"></Status>
                <Status label="19.100"></Status>
              </div>
            </div>
          </div>
        </Card>
      </Fragment>
    )}
  </div>
);

TicketDetail.propTypes = {
  ticket: PropTypes.shape({
    number: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    lastUpdatedTime: PropTypes.string.isRequired,
    reportedTime: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    specialities: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    assetName: PropTypes.string.isRequired,
    geoCode: PropTypes.string.isRequired,
  }),
};

export default TicketDetail;
