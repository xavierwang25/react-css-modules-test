import React from 'react';
import PropTypes from 'prop-types'
import Moment from 'react-moment'
import styles from './Sidebar.module.css'

const Sidebar = ({ tickets }) => {
  return <div className={styles.sidebar}>
    <input></input>
    <table>
      <thead>
        <tr>
          <th>OWNER</th>
          <th>REPORTED</th>
          <th>ASSET</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
        {tickets.map(ticket => (
          <tr key={ticket.id}>
          <td>{ ticket.avatar }</td>
          <td><Moment format="MM/DD/YY HH:mm">{ ticket.reportedTime }</Moment></td>
          <td>{ ticket.asset }</td>
          <td>{ ticket.status }</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
}

Sidebar.propTypes = {
  tickets: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    reportedTime: PropTypes.string.isRequired,
    asset: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired
  }))
}

export default Sidebar;