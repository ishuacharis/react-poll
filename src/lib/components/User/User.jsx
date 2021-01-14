import React , {useEffect, useState, useContext, createRef} from 'react'
import {useParams, Link} from 'react-router-dom'
import MyVote from '../MyVote/MyVote'
import  "./User.scoped.css";
import { getUser } from "../../data/data";
import VoteContext from "../../Context/VoteContext";

function User() {
  let {id} = useParams()

  const [user, setUser] = useState(null)
  useEffect(() => {
    getUser(id).then(res => {
      setUser(res)
    })
  }, [id])

   const {onVoteIncrement, onVoteDecrement,} = useContext(VoteContext)
    const positiveClick = createRef()
    const negativeClick = createRef()
    const inputRef = createRef()

    const onPositiveClick = (houseMate) => {
      onVoteIncrement(houseMate)
    }

    const onNegativeClick = houseMate => {

      onVoteDecrement(houseMate)
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



  if(!user) return (<div className="loading"></div>);

  return (
    <div className="container">
      <MyVote />
      <div className="content">
        <div className="center">
          <div className="avatar">
            <img src={user.avatar} alt="" />
          </div> 
          <div className="name">
            {user.name}
          </div>
          <div className="controls">
            <Control
              reference = {positiveClick}
              event={onPositiveClick}
              data={user}
              operator="+"
            />
            <div className="control">
              <input type="text" value={user.voteCount} disabled ref={inputRef}  />
            </div>
            <Control
              reference = {negativeClick}
              event={onNegativeClick}
              data={user}
              operator="-"
            />
          </div>
          <Link className="btn btn-primary" to="/housemates">Back</Link>
        </div>
      </div>
    </div>
  )
}

export default User
