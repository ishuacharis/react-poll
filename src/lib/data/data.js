
const totalVotes = JSON.parse(localStorage.getItem('REACT_VOTES'));
const houseMatesUpForEviction = [{
        name: 'laycon',
        avatar: require("lib/assets/laycon.jpg"),
        voteCount: 0

    },
    {
        name: 'lilo',
        avatar: require("lib/assets/lilo.jpeg"),
        voteCount: 0
    },
    {
        name: 'trikkytee',
        avatar: require("lib/assets/trikkytee.jpg"),
        voteCount: 0
    },
    {
        name: 'vee',
        avatar: require("lib/assets/vee.jpg"),
        voteCount: 0
    }

]
const themes  =  {
    light: {
        foreground: "#ffffff",
        background: "#000000"
    },
    dark: {
        foreground: "#000000",
        background: "#ffffff"
    }
}

const getUser =  (screen_name) => {
    const evictionList =  JSON.parse(localStorage.getItem('REACT_HOUSEMATES'));
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(evictionList.find(housemate => housemate.screen_name === screen_name))
        reject("Failure")
      }, 3000)
    })
}



export {totalVotes, houseMatesUpForEviction,themes, getUser}