import React from 'react'
import PropTypes from 'prop-types'
import {Link, useRouteMatch, } from 'react-router-dom'
import './Housemate.scoped.css'



const Avatar  = ({avatar, url, name}) => {
  return(
    <Link to={`${url}/${name}`} className="avatar avatar-large">
      <img src={require(`lib/assets/${avatar}`)} alt="" />
    </Link>
  )
}


function Housemate(props) {
    let match = useRouteMatch()
    const {houseMateUpForEviction,} = props
    const {avatar,screen_name} = houseMateUpForEviction

    return (
      <div className="housemate">
        <Avatar avatar={avatar} url={match.url} name={screen_name} />
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
