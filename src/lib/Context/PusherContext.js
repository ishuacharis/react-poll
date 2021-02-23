const Pusher =  require('pusher-js');
Pusher.logToConsole = true;

export const pusherClient  = new Pusher(process.env.REACT_APP_PUSHER_APP_KEY, {
    cluster: 'eu',
    encrypted: true
});
