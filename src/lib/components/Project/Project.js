import React , {useState, useEffect} from 'react'

import {totalVotes, houseMatesUpForEviction,} from '../../data/data'

import VoteContext from '../../Context/VoteContext'

import Housemates from '../Housemates/Housemates'
import MyVote from '../MyVote/MyVote'




function Projects() {
    /*useEffect(() =>{

      fetch('http://localhost:8000/api/')
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })


    },[])*/
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
        <div>
            <VoteContext.Provider value= {
              {...props}
            }>
              <MyVote  />
              <Housemates/>
            </VoteContext.Provider>
        </div>
    )

}


export default Projects
