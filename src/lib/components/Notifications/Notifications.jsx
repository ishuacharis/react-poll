import React, { useEffect, } from 'react'
import './Notifications.css'
import { pusherClient } from '../../Context/PusherContext';
import { notifications } from 'lib/routes';
import Notification from './Notification';
import SideNav from 'lib/components/shared/SideNav/SideNav'
import { useReducer } from 'react';

function notificationReducer(state,{type,payload: { notifications }}) {
    switch (type) {
        case "set_notification":
            return { ...state,notifications: notifications }
        default:
            throw new Error()
    }
}

const Notifications = () => {
    const [state, dispatch] = useReducer(notificationReducer, {notifications: []});
    const args = {
        endPoint: "/notifications/3",
        method: 'GET',
    }
    
    const notificationsCall = async () => {
        const { response:{ notifications:{ data} } }   = await notifications(args)
        dispatch({ type: "set_notification", payload: {notifications: data}  })       
    }
    useEffect( () => {
        notificationsCall()
    }, [])

    const loginChannel = pusherClient.subscribe('login-channel');
    loginChannel.bind('login-event', function(data) {
        console.log(`notifications ${data}`);
    });

    return (
        <div className="container">
            <div className="project">       
                <SideNav />  
                <Notification notifications={state.notifications} />
                
            </div>
        </div>
    )
}


export default Notifications;
