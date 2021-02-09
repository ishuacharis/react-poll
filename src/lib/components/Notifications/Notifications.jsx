import React, { useEffect, useState } from 'react'
import './Notification.css'
import { pusherClient } from '../../Context/PusherContext';
import { notifications } from 'lib/utils/utils';
import Notification from './Notification';


const Notifications = () => {

    const [feedback, setFeedback]  =  useState({});
    const [notificationsObject, setNotificationsObject] = useState({});
    
    const args = {
        endPoint: "/notifications/3",
        method: 'GET',
    }
    
    const notificationsCall = async () => {
      
        const feeds  = await notifications(args)
        setFeedback(feeds);
        let { response:{ message:m, notifications:{ data} } } = feeds;
        setNotificationsObject({
            message: m,
            notifications: data
        })
    } 
    useEffect( () => {
        notificationsCall()
    }, [])

    const loginChannel = pusherClient.subscribe('login-channel');
    loginChannel.bind('login-event', function(data) {
        console.log(`notifications ${data}`);
    });

    return (
        <div className="notifications">
           <Notification notifications={notificationsObject.notifications} />
        </div>
    )
}


export default Notifications;
