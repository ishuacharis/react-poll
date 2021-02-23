import React , {useContext} from 'react';
import VoteContext from '../../Context/VoteContext'
import './MyVote.css'


function MyVote() {
    const {totalVotes, remainingVotes} = useContext(VoteContext)

    return (
        <div className="MyVote">
            <h4 className="vote-count">{remainingVotes}</h4>
            <div className="progress-bar">
                <progress value={remainingVotes} max={totalVotes}></progress>
            </div>
        </div>
    )
}

export default MyVote;
