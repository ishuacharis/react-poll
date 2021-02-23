import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import './App.css';
import Home from 'lib/components/Home/Home'
import PrivateRoute from 'lib/components/Private/PrivateRoute'
import PublicRoute from 'lib/components/Public/PublicRoute'
import NotFound from 'lib/components/NotFound/NotFound'
import routes from 'lib/Router';

import {totalVotes, houseMatesUpForEviction,} from './lib/data/data'
import {
  increaseRemainingVotes,decreaseRemainingVotes,
  updateUser, changeRemaining
} from './lib/utils/utils'

import VoteContext from 'lib/Context/VoteContext';
import AuthContext from 'lib/Context/AuthContext';



function App() {

  const [houseMates, setHouseMateVote] = useState(houseMatesUpForEviction);
  const [remainingVotes, setRemainingVotes] = useState(totalVotes);
  const [userRemainingVotes, setUserRemainingVotes] = useState(totalVotes);
  const [votesLeft, setVotesLeft] = useState(totalVotes);
  const [isAuthenticated, setAuth] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const args = {
    votes: remainingVotes,
    amount: 10, 
    houseMates: houseMates
  }

  const onUserVoteIncrement = () => {
    setUserRemainingVotes(userRemainingVotes - 10)
    setVotesLeft(votesLeft - 10)
  }
  const onUserVoteDecrement = () => {
    setUserRemainingVotes(userRemainingVotes + 10)
    setVotesLeft(votesLeft + 10)
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

  const onAuthenticate = (cb) => {
    setAuth(true)
    cb();
  }
  
  const onUnAuthenticate = (cb) => {
    console.log("unauthenticating...")
    setLoading(true)
    setAuth(false);
    setTimeout(cb, 5000);
  }
  
  const props = {
    houseMates: houseMates,
    votesLeft: votesLeft,
    totalVotes: totalVotes,
    remainingVotes: userRemainingVotes,
    onUserVoteIncrement: onUserVoteIncrement,
    onUserVoteDecrement: onUserVoteDecrement,
  }



  const auth  = {
    isAuthenticated: isAuthenticated,
    isLoading: isLoading,
    authenticate: onAuthenticate,
    unAuthenticate: onUnAuthenticate
  };


  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact strict component={Home} />
          {/* <Route path="*" component={NotFound} /> */}
          <AuthContext.Provider value = { {...auth} }>
           
              <VoteContext.Provider value= { {...props} }>
                {
                  routes.map((route, i) => {
                    if(route.protected !== true){
                      return <PublicRoute path= {route.path} key={i} exact strict>
                        <route.component />
                      </PublicRoute>
                    } 
                    return <PrivateRoute path= {route.path} key={i} exact strict>
                                <route.component />
                            </PrivateRoute>
                  })
                }
              </VoteContext.Provider>
            </AuthContext.Provider>
            
        </Switch>
      </div>
    </Router>
  );
}


export default App;
