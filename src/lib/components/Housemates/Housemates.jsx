import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import VoteContext from '../../Context/VoteContext'
import './Housemates.scoped.css'
import Housemate from '../Housemate/Housemate.jsx'
import { eviction } from 'lib/routes'


function Housemates() {

    const {houseMates,} = useContext(VoteContext);
    const [ evictionList , setEvictionList ] = useState([])

    const args = {
        endPoint: "/eviction",
        method: 'GET',
        token: JSON.parse(localStorage.getItem('REACT_TOKEN'))
    }

    const getEvictionList =  async () => {
        const {response: {data}}  = await eviction(args)
        localStorage.setItem('REACT_HOUSEMATES', JSON.stringify(data))
        setEvictionList(data)
    }
    useEffect(() => {
        getEvictionList()
    }, [])


    const houses = evictionList.map((houseMateUpForEviction) =>
    <Housemate
        houseMateUpForEviction= {houseMateUpForEviction}
        key={houseMateUpForEviction.id}  />
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
