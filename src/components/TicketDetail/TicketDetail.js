import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Card from '../Card'
import styles from './TicketDetail.module.css'

const TicketDetail = ({ ticket }) => <div className={styles.container}>
  {ticket == null ? <div className={styles.empty}>
    <div className={styles.times}>
      <i className="fas fa-times"></i>
    </div>
    <div className={styles.value}>No ticket Selected</div>
  </div> : <Fragment>
    <Card title="Owner">
      <div className={styles.ownerBody}>
        <img className={styles.avatar} src={ticket.avatar} alt={ticket.name}></img>
        <div className={styles.ownerInfo}>
          <div className={styles.value}>{ticket.name}</div>
          <div className={styles.speciality}>{ticket.specialities[0]}</div>
        </div>
      </div>
    </Card>
    <Card title="Details">
      asdfasdf
  </Card>
    <Card title="Asset">
      asdfasdf
  </Card>
  </Fragment>}
</div>

TicketDetail.propTypes = {
  ticket: PropTypes.shape({
    number: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    lastUpdatedTime: PropTypes.string.isRequired,
    specialities: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    assetName: PropTypes.string.isRequired,
    geoCode: PropTypes.string.isRequired,
  })
}

export default TicketDetail;