import React, { useContext, useEffect, useReducer,  } from 'react'
import PropTypes from 'prop-types'
import VoteContext from '../../Context/VoteContext'
import './Housemates.scoped.css'
import Housemate from '../Housemate/Housemate.jsx'
import { eviction } from 'lib/routes'
import { connect } from 'react-redux'
import { getEviction } from 'lib/redux/actions/action_creators/housemate/housemate_async_action'



const  Housemates = ({token,housemates,loading,handleRequest}) => {

    const {houseMates,} = useContext(VoteContext);
    
    const args = {
        endPoint: "/eviction",
        method: 'GET',
        token: token
    }

    const getEvictionList =  async () => {
        await handleRequest(args);        
    }
    
    useEffect(() => {
        getEvictionList()
    }, [])

    const houses = housemates.map((houseMateUpForEviction) =>
    <Housemate
        houseMateUpForEviction= {houseMateUpForEviction}
        key={houseMateUpForEviction.id}  />
    )
    if(loading) return (
        <div className="loading-container">
          <div className="loading"></div>
        </div>
    );
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
const mapStateToProps = (state) => ({
    loading: state.global.loading,
    token:  state.auth.token,
    housemates: state.housemate.housemates
})

const mapDispatchToProps = (dispatch) => ({
    handleRequest: (value) => dispatch(getEviction(value, eviction))
})
export default connect(mapStateToProps, mapDispatchToProps)(Housemates)
