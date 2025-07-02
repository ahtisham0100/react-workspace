import { createContext, useMemo, useState } from "react";

const NotificationContext = createContext();

export default NotificationContext;


function NotificationProvider({children}) {

    const [isNotificationEnabled, setIsNotificationEnabled] = useState(false);
let notifications = ["Welcome to the Notification Center!" , "New message received!", "Your profile has been updated!" , "System maintenance scheduled for tonight." , "New comment on your post!"];
    const enableNotification = () => {
        setIsNotificationEnabled(true);
    };

    const disableNotification = () => {
        setIsNotificationEnabled(false);
    };

    return(
        <NotificationContext.Provider value ={useMemo(() => ({
  isNotificationEnabled,
  enableNotification,
  disableNotification,
  notifications
}), [isNotificationEnabled, notifications])}
>
            {isNotificationEnabled ? <div className="notification-banner">Notifications are enabled
              <span onMouseOver={(e)=>{
                let target = e.target;
                target.classList.add("hover");
              }} className="notification">
  <span className="bell">
    <span className="bell-body"></span>
    <span className="bell-clapper"></span>
    <span className="bell-handle"></span>
  </span>
</span>
{notifications.map((notification, index) => (
                <div key={index} className="notification-item"> {notification}</div>
            ))}

<button onClick={disableNotification}>Disable Notifications</button>
            </div> : <div className="notification-banner">
                
                <div>
                    <p>
                        Notifications are disabled. 
                        <button onClick={enableNotification}>Enable Notifications</button>
                    </p>
                    </div></div>}
            {children}
        </NotificationContext.Provider>
    )
} 


export { NotificationProvider, NotificationContext };