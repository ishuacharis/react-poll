import React from 'react'
import PropTypes from 'prop-types'
import {Link, useRouteMatch, } from 'react-router-dom'
import './Housemate.css'



const Avatar  = ({avatar, match, name}) => {
  return(
    <Link to={`${match.url}/${name}`} className="avatar">
      <img src={avatar} alt="" />
    </Link>
  )
}


function Housemate(props) {
    let match = useRouteMatch()
    console.log(match)
    const {houseMateUpForEviction,} = props
    const {avatar,name} = houseMateUpForEviction


    return (

      <div className="housemate">
        <Avatar avatar={avatar} match={match} name={name} />
      </div>

    );
}



Housemate.prototype = {
  houseMateUpForEviction: PropTypes.exact({
    name: PropTypes.string,
    avatar: PropTypes.string,
    voteCount: PropTypes.number
  }),
  onVoteIncrement: PropTypes.func.isRequired,
  onVoteDecrement: PropTypes.func.isRequired
}

export default Housemate
