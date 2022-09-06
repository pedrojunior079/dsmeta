import icon from '../assets/img/notification-icon.svg';
import './NotificationStyles.css';

function NotificationButton() {
  return (
    <div className="dsmeta-red-btn">
      <img src={icon} alt="Notificar" />
    </div>
  );
}

export default NotificationButton;
