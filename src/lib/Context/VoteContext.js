import {createContext} from 'react'
import {totalVotes,houseMatesUpForEviction} from '../data/data'

const VoteContext = createContext({
    totalVotes: totalVotes,
    votesLeft: totalVotes,
    remainingVotes: totalVotes,
    houseMatesUpForEviction: JSON.parse(localStorage.getItem('REACT_HOUSEMATES')) || houseMatesUpForEviction,
    changeRemaining: () => {},
    changeUserRemaining: () => {},
    onVoteIncrement:  () => {},
    onUserVoteIncrement:  () => {},
    onVoteDecrement: () => {},
    onUserVoteDecrement: () => {}
})
VoteContext.displayName = "VoteContext"

export default VoteContext