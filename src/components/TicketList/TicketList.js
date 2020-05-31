import React from 'react';
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import cx from 'classnames'
import Status from '../Status'
import styles from './TicketList.module.css'

const TicketList = ({ tickets, selectedId, onTicketClick }) => {
  return <div className={styles.container}>
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
          <tr key={ticket.id} className={cx({ [styles.selected]: ticket.id === selectedId })} onClick={() => onTicketClick(ticket.id)}>
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
  })),
  selectedId: PropTypes.number,
  onTicketClick: PropTypes.func.isRequired
}

export default TicketList;