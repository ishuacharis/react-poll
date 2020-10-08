import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import VoteContext from "../../Context/VoteContext";
import './Housemate.css'
import { houseMatesUpForEviction } from 'lib/data/data';

const Avatar  = ({avatar}) => {
  return(
    <div className="avatar">
      <img src={avatar} alt="" />
    </div>
  )
}

const Control = ({reference, event, data, operator}) => {
   return (
    <div className="control"
      ref={reference}
      onClick={() => event(data)}>
      <span>{operator}</span>
    </div>
   )
 }

{/*
 const Controls = () => {
  return (
      <div className="controls">
        <Control
          reference = {positiveClick}
          event={onPositiveClick}
          data={houseMateUpForEviction}
          operator="+"
        />
        <div className="control">
          <input type="text" ref={inputRef}
          value={voteCount} disabled  />
        </div>
        <Control
          reference = {negativeClick}
          event={onNegativeClick}
          data={houseMateUpForEviction}
          operator="-"
        />
    </div>
  )
}
*/}

function Housemate(props) {
    const {houseMateUpForEviction,} = props
    const {avatar,name,voteCount} = houseMateUpForEviction
    const {onVoteIncrement, onVoteDecrement,} = useContext(VoteContext)
    const positiveClick = React.createRef()
    const negativeClick = React.createRef()
    const inputRef = React.createRef()

    const onPositiveClick = (houseMate) => {

      onVoteIncrement(houseMate)
    }

    const onNegativeClick = houseMate => {

      onVoteDecrement(houseMate)
    }

    return (
      <div className="Housemate">
        <Avatar avatar={avatar} />
        <div>
          <h4 className="name">{name}</h4>
          <div className="controls">
            <Control
              reference = {positiveClick}
              event={onPositiveClick}
              data={houseMateUpForEviction}
              operator="+"
            />
            <div className="control">
              <input type="text" ref={inputRef}
              value={voteCount} disabled  />
            </div>
            <Control
              reference = {negativeClick}
              event={onNegativeClick}
              data={houseMateUpForEviction}
              operator="-"
            />
          </div>
        </div>
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
