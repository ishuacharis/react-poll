import React, { useContext, useEffect, useReducer } from 'react'
import PropTypes from 'prop-types'
import VoteContext from '../../Context/VoteContext'
import './Housemates.scoped.css'
import Housemate from '../Housemate/Housemate.jsx'
import { eviction } from 'lib/routes'

function houseMatesReducer(state, {type, payload: { houseMates, isLoading} }) {
    switch (type) {
        case "set_evictionList":
            return  { ...state, houseMates: houseMates }
        case "setIsLoading":
            return { ...state, isLoading: isLoading }
        default:
            throw new Error();
    }
}
function Housemates() {

    const {houseMates,} = useContext(VoteContext);
    const [ state , dispatch] = useReducer(houseMatesReducer,{houseMates: [], isLoading: true });
    const args = {
        endPoint: "/eviction",
        method: 'GET',
        token: JSON.parse(localStorage.getItem('REACT_TOKEN'))
    }

    const getEvictionList =  async () => {
        const {response: {data}}  = await eviction(args)
        localStorage.setItem('REACT_HOUSEMATES', JSON.stringify(data))
        dispatch({ type: "set_evictionList", payload: { houseMates: data } })
        dispatch({ type: "setIsLoading", payload: { isLoading: false } })
        
    }
    useEffect(() => {
        getEvictionList()
    }, [])

    const houses = state.houseMates.map((houseMateUpForEviction) =>
    <Housemate
        houseMateUpForEviction= {houseMateUpForEviction}
        key={houseMateUpForEviction.id}  />
    )
    if(state.isLoading) return (
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

export default Housemates
