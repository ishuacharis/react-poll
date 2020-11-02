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

import VoteContext from 'lib/Context/VoteContext'



function App() {

  const [houseMates, setHouseMateVote] = useState(houseMatesUpForEviction)
  const [remainingVotes, setRemainingVotes] = useState(totalVotes)
  const [votesLeft, setVotesLeft] = useState(totalVotes)

  const changeRemaining = (command) => {

    if(command === 'increase'){
       setRemainingVotes(remainingVotes - 10)
    }
    if(command === 'decrease'){
      setRemainingVotes(remainingVotes + 10)
    }
  }
  const updateUser = (command, obj) =>{
    if(command === 'increase') {
      return houseMates.map(h => {
        if(h.name === obj.name) {
          h.voteCount += 10
          return h
        }
        else return h
      })
    }
    if(command === 'decrease') {
      return houseMates.map(h => {
        if(h.name === obj.name) {
          h.voteCount += 10
          return h
        }
        else return h
      })
    }
  }
  const onVoteIncrement = (houseMate) => {
    if (votesLeft > 0 && votesLeft <= 100) {
      houseMates.map(
        (houseMateUpForEviction) => {
          if (houseMateUpForEviction.name === houseMate.name) {
            if (houseMateUpForEviction.voteCount >= 0 && houseMateUpForEviction.voteCount < 100) {
              setVotesLeft(votesLeft - 10)
              changeRemaining('increase')
              setHouseMateVote(updateUser('increase',houseMate))
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
          changeRemaining('decrease')
          setHouseMateVote(
            houseMates.map(h => {
              if (h.name === houseMate.name) {
                h.voteCount -= 10
                return h
              } else return h
            })
          )
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
