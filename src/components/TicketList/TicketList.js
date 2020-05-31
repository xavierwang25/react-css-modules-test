import React from 'react';
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import Status from '../Status'
import styles from './TicketList.module.css'

const TicketList = ({ tickets }) => {
  return <div className={styles.tableWrapper}>
    <table className={styles.table}>
      <thead>
        <tr>
          <th className={styles.th}>OWNER</th>
          <th className={styles.th}>REPORTED</th>
          <th className={styles.th}>ASSET</th>
          <th className={styles.th}>STATUS</th>
        </tr>
      </thead>
      <tbody>
        {tickets.map(ticket => (
          <tr key={ticket.id}>
            <td className={styles.td}><img src={ticket.avatar} alt={ticket.name} className={styles.avatar}></img></td>
            <td className={styles.td}><Moment format="MM/DD/YY HH:mm">{ticket.reportedTime}</Moment></td>
            <td className={styles.td}>{ticket.asset}</td>
            <td className={styles.td}>
              <Status label={{ 'assigned': 'ASD', 'completed': 'COM', 'unassigned': 'UNA' }[ticket.status]} status={ticket.status}></Status>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
}

TicketList.propTypes = {
      tickets: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    reportedTime: PropTypes.string.isRequired,
    asset: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
  }))
}

export default TicketList;