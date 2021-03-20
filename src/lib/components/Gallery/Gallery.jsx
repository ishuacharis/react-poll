import React, {useEffect, useReducer,} from 'react'
import "./Gallery.css"
import Helper from  "../../Helper"

function galleryReducer(state, { type, payload:{ search, fetching, photos} }) {

  switch (type) {
    case "set_search":
      return { ...state, search:  search }
    case "set_fetching":
      return { ...state, fetching:  fetching }
    case "set_photos":
      return { ...state, photos:  photos }
      
    default:
      break;
  }
}

function Gallery(){
  const [ state, dispatch ] = useReducer(galleryReducer, { search: 'roses' , fetching: false, photos: null });
  const KEY = process.env.REACT_APP_PIXABAY_KEY
  const {shortenCounts} = Helper()


  const PREFIXURL =  "https://pixabay.com/api/?key="

  const SUFFIXURL =  "&per_page=6"

  function getPhotos(queryString ='') {
    dispatch({ type: 'set_search', payload: { search: queryString } })
    dispatch({ type: 'set_fetching', payload: { fetching: true } })
    
  
    let query = encodeURIComponent(queryString)
    let APIURL =  `${PREFIXURL}${KEY}&q=${query}${SUFFIXURL}`
     fetch(APIURL)
    .then(data => data.json())
    .then(({ hits })  => {
      dispatch({ type: 'set_photos', payload: { photos: hits } })
      dispatch({ type: 'set_fetching', payload: { fetching: false } })
    })

  }
  useEffect(() => {
      getPhotos(state.search)
  },[state.search])


  return (
    !state.photos ? <div>loading....</div> :
    <div className="container">
      <div className="Gallery">
        <div className="buttons">
          <ul className="button-list">
            <li className="button-item">
              <button className="button" onClick={() => getPhotos('Nature')}>Nature</button>
            </li>
            <li className="button-item">
              <button className="button" onClick={() => getPhotos('Beauty')}>Beauty</button>
            </li>
            <li className="button-item">
              <button className="button" onClick={() => getPhotos('Girls')}>Girls</button>
            </li>
            <li className="button-item">
              <button className="button" onClick={() => getPhotos('Clothing')}>Clotthing</button>
            </li>
          </ul>
        </div>
        <div className="center-gallery">
          {
            state.photos.map((photo) => {
              return (
                <div className="single" key={photo.id}>
                  <div className ="top">
                    <div className="big-image">
                      <img src={photo.largeImageURL} alt={photo.largeImageURL} />
                    </div>
                    <div className="small-image">
                        <img src={photo.previewURL} alt={photo.previewURL} />
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="avi">
                      <div className="user-avatar">
                        <img src = {photo.userImageURL} alt={photo.userImageURL} />
                      </div>
                    </div>
                    <div className="rating">
                      <span className="counts">{shortenCounts(photo.favorites)}</span>
                      <span className="counts">{shortenCounts(photo.likes)}</span>
                      <span className="counts">{shortenCounts(photo.views)}</span>
                      <span className="counts">{shortenCounts(photo.downloads)}</span>
                      <span className="counts">{shortenCounts(photo.comments)}</span>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>

  )

}


export default Gallery
