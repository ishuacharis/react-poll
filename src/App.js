import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import './App.css';
import Home from 'lib/components/Home'
// import Project from 'lib/components/Project/Project';
// import User from 'lib/components/User'
// import Testing from 'lib/components/Testing/Testing'
// import Gallery from 'lib/components/Gallery/Gallery'
import NotFound from 'lib/components/NotFound/NotFound'
import routes from 'lib/Routes'

import {totalVotes, houseMatesUpForEviction,} from './lib/data/data'
import {
  increaseRemainingVotes,decreaseRemainingVotes,
  updateUser, changeRemaining
} from './lib/utils/utils'

import VoteContext from 'lib/Context/VoteContext'



function App() {

  const [houseMates, setHouseMateVote] = useState(houseMatesUpForEviction)
  const [remainingVotes, setRemainingVotes] = useState(totalVotes)
  const [votesLeft, setVotesLeft] = useState(totalVotes)

  const args = {
    votes: remainingVotes,
    amount: 10, 
    houseMates: houseMates
  }

  const increaseUserVoteCount = (args) => {
    let copyOfList  =  args['houseMates']
    return copyOfList.map(h => {
      if(h.name === args['houseMate'].name) {
        h.voteCount += args['amount']
        return h
      }
      else return h
    })
  }

  const decreaseUserVoteCount = (args) => {
    let copyOfList  =  args['houseMates']
    return copyOfList.map(h => {
      if(h.name === args['houseMate'].name) {
        h.voteCount -= args['amount']
        return h
      }
      else return h
    })
  }

  
  const onVoteIncrement = (houseMate) => {
    if (votesLeft > 0 && votesLeft <= 100) {
      houseMates.map(
        (houseMateUpForEviction) => {
          if (houseMateUpForEviction.name === houseMate.name) {
            if (houseMateUpForEviction.voteCount >= 0 && houseMateUpForEviction.voteCount < 100) {
              setVotesLeft(votesLeft - 10)
              changeRemaining(setRemainingVotes, increaseRemainingVotes, args)
              const newArgs = {
                ...args, 
                houseMate: houseMate
              }
              setHouseMateVote(updateUser(increaseUserVoteCount,newArgs))
            }
          }
          return false;
        })
    }
  }

  const onVoteDecrement = (houseMate) => {
    houseMatesUpForEviction.map(
      (houseMateUpForEviction) => {
        if (houseMateUpForEviction.name === houseMate.name) {
          if (houseMateUpForEviction.voteCount > 0 && houseMateUpForEviction.voteCount <= 100) {
            setVotesLeft(votesLeft + 10)
            changeRemaining(setRemainingVotes, decreaseRemainingVotes, args)
            const newArgs = {
              ...args, 
              houseMate: houseMate
            }
            setHouseMateVote(updateUser(decreaseUserVoteCount,newArgs))
          }
        }
        return false;
      })
  }
  const props = {
    houseMates: houseMates,
    totalVotes: totalVotes,
    remainingVotes: remainingVotes,
    onVoteIncrement: onVoteIncrement,
    onVoteDecrement: onVoteDecrement,
  }



  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact strict component={Home} />
            <VoteContext.Provider value= { {...props} }>
              {
                routes.map((route, i) => <Route path={route.path} exact strict component={route.component} key={i} />)
              }
            </VoteContext.Provider>
            <Route path="/" exact strict component={Home} />
        </Switch>
      </div>
    </Router>
  );
}


export default App;
