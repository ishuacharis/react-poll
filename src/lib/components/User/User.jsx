import React , {useEffect, useState, useContext, createRef} from 'react'
import {useParams, Link, useHistory} from 'react-router-dom'
import MyVote from '../MyVote/MyVote'
import  "./User.scoped.css";
import { getUser } from "../../data/data";
import VoteContext from "../../Context/VoteContext";
import { connect } from 'react-redux';
import { vote } from 'lib/routes'
import SideNav from '../shared/SideNav/SideNav';

function User({ userId }) {
  let {id} = useParams()

  const [user, setUser] = useState(null)
  const [ isLoading, setLoading ] = useState(false)
  const [ voteCount, setVoteCount ] = useState(0)
  const {onUserVoteIncrement, onUserVoteDecrement,votesLeft,} = useContext(VoteContext)
  const positiveClick = createRef()
  const negativeClick = createRef()
  const inputRef = createRef()
  const history  = useHistory();

  const onPositiveClick = () => {
    if(votesLeft > 0 && votesLeft <= 100){ 
      setVoteCount(voteCount + 10);
      onUserVoteIncrement(10)
    }
  }

  const onNegativeClick = () => {
    if(votesLeft >= 0 && votesLeft < 100) {

      setVoteCount(voteCount - 10);
      onUserVoteDecrement(10);
    }
   
  }


  const submit  = async () => {
    setLoading(true)
    const data = {
      user_id: userId,
      housemate_id: user.id,
      platform_id: 1,
      amount: voteCount,
    };
   
    const args = {
      endPoint: "/vote",
      method: "POST",
      body: data,
      token: JSON.parse(localStorage.getItem('REACT_TOKEN'))
    };

    try {
      const response  =  await vote(args);
      if ("response" in  response) {
          setLoading(false)
          history.replace("/housemates")
      }
    } catch (e) {
      setLoading(false)
      console.error({
        error: e.message
      });
    }
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
  const getSingleUser  = async (id) => {
    const response  = await getUser(id);
    setUser(response)
  }
  useEffect(() => {
    getSingleUser(id)
  }, [id])


  if(!user) return (
    <div className="loading-container">
      <div className="loading"></div>
    </div>
  );

  return (
    <div className="container">
      <div className="project">
        <SideNav />
        <div>
          <MyVote />
          <div className="content">
            <div className="center">
              <div className="avatar">
                <img src={require(`lib/assets/${user.avatar}`)} alt="" />
              </div> 
              <div className="name">
                {user.screen_name}
              </div>
              <div className="controls">
                <Control
                  reference = {positiveClick}
                  event={onPositiveClick}
                  data={user}
                  operator="+"
                />
                <div className="control">
                  <input type="text" value={voteCount} disabled ref={inputRef}  />
                </div>
                <Control
                  reference = {negativeClick}
                  event={onNegativeClick}
                  data={user}
                  operator="-"
                />
              </div>
              <div className="buttons">
                <Link className="btn btn-primary" to="/housemates">Back</Link>
                {!isLoading && <button type="submit" className="btn btn-primary" onClick={() => submit()}>Cast Vote</button>}
                {isLoading && <div className="loading"></div>}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => ({
  userId: state.auth.user.id
})

export default connect(mapStateToProps)(User)
