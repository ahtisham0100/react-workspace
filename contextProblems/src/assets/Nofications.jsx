// import { useNotifications } from "./context/NotificationProvider";

// // NotificationBanner.jsx

// function NotificationBanner() {
//   const {
//     isNotificationEnabled,
//     notifications,
//     disableNotification,
//     enableNotification,
//     addNotification
//   } = useNotifications();

//   return (
//     <div className="notification-banner">
//       {isNotificationEnabled ? (
//         <>
//           <p>✅ Notifications are enabled</p>
//           {notifications.map((n, i) => (
//             <div key={i} className="notification-item">
//               {n}
//             </div>
//           ))}
//           <button onClick={() => addNotification("New notification at " + new Date().toLocaleTimeString())}>➕ Add</button>
//           <button onClick={disableNotification}>❌ Disable</button>
//         </>
//       ) : (
//         <div>
//           Notifications are disabled.
//           <button onClick={enableNotification}>Enable</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export {NotificationBanner};
