import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import VoteContext from '../../Context/VoteContext'
import './Housemates.scoped.css'
import Housemate from '../Housemate/Housemate.jsx'


function Housemates() {

    const {houseMates,} = useContext(VoteContext)
    const houses = houseMates.map((houseMateUpForEviction) =>
    <Housemate
        houseMateUpForEviction= {houseMateUpForEviction}
        key={houseMateUpForEviction.name}  />
    )
    return (

        <div className="housemates">
             {houses}
        </div>
    )
}

Housemates.propTypes = {
    houseMates: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            avatar: PropTypes.string,
            voteCount: PropTypes.number
        })
    ),
}

export default Housemates
