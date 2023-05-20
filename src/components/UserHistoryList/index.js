import './index.css'

const UserHistoryList = props => {
  const {historyDetails, onDeleteUser} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails
  const onDelete = () => {
    onDeleteUser(id)
  }

  return (
    <li className="list-container">
      <div className="time-container">
        <p className="time">{timeAccessed}</p>
        <div className="history-content">
          <div className="image-content">
            <p src={logoUrl} className="image" alt="domain log" />
            <p className="title">{title}</p>
            <p className="history-url">{domainUrl}</p>
          </div>
        </div>
      </div>
      <div className="history-icon-container">
        <button className="history-button" type="button">
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-icon"
            onClick={onDelete}
          />
        </button>
      </div>
    </li>
  )
}

export default UserHistoryList
