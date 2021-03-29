import React from 'react'
import "./Notification.css";
const Notification = ({notifications})  => {
    let list = null
    let notificationType ;
    if (notifications) {

        list =  notifications.map(({id, type}) => {
            if(type == "UserLoginNotification") {
                notificationType = "Last logged in"
            }
            return (<div key={id} className="notification">
                { notificationType }
            </div>)
        })
    }
    return (
        <div className="notifications">
           {!list &&  'hey'}
           { list } 
        </div>
    )
}

export default Notification;