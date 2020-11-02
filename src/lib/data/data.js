
const totalVotes = 100
const houseMatesUpForEviction = [{
        name: 'laycon',
        avatar: require("../assets/laycon.jpg"),
        voteCount: 0

    },
    {
        name: 'lilo',
        avatar: require("../assets/lilo.jpeg"),
        voteCount: 0
    },
    {
        name: 'trikkytee',
        avatar: require("../assets/trikkytee.jpg"),
        voteCount: 0
    },
    {
        name: 'vee',
        avatar: require("../assets/vee.jpg"),
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
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(houseMatesUpForEviction.find(housemate => housemate.name === screen_name))
        reject("Failure")
      }, 3000)
    })
}



export {totalVotes, houseMatesUpForEviction,themes, getUser}