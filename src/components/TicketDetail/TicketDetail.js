import React from 'react'
import PropTypes from 'prop-types'
import styles from './TicketDetail.module.css'

const TicketDetail = ({ ticket }) => <div className={styles.container}>
  asdf
</div>

TicketDetail.propTypes = {
  ticket: PropTypes.shape({
    number: PropTypes.number.isRequired,
    lastUpdatedTime: PropTypes.number.isRequired,
    specialities: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    assetName: PropTypes.string.isRequired,
    geoCode: PropTypes.string.isRequired,
  })
}

export default TicketDetail;