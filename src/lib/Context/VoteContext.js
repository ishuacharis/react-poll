import {createContext} from 'react'
import {totalVotes,houseMatesUpForEviction} from '../data/data'

const VoteContext = createContext({
    totalVotes: totalVotes,
    votesLeft: totalVotes,
    remainingVotes: totalVotes,
    houseMatesUpForEviction: houseMatesUpForEviction,
    changeRemaining: () => {},
    onVoteIncrement:  () => {},
    onVoteDecrement: () => {}
})
VoteContext.displayName = "VoteContext"

export default VoteContext