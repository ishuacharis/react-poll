import React from 'react'

const Notification = ({notifications})  => {
    let list = null
    if (notifications) {

        list =  notifications.map((notification) => {
            return (<div key={notification.id}>
                { JSON.stringify(notification.type) }
            </div>)
        })
    }
    return (
        <div className="notification">
           {!list &&  'hey'}
           { list } 
        </div>
    )
}

export default Notification;