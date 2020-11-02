import React, {useEffect, useState} from 'react'
import "./Gallery.css"
import Helper from  "../../Helper"

function Gallery(){
  const KEY = ""
  const {shortenCounts} = Helper()
  const [photos , setPhotos] = useState(null)
  const [fetching, setFetching] = useState(false)
  const PREFIXURL =  "https://pixabay.com/api/?key="

  const SUFFIXURL =  "&per_page=6"

  function getPhotos(queryString ='') {
    setFetching(true)
    let query = encodeURIComponent(queryString)
    let APIURL =  `${PREFIXURL}${KEY}&q=${query}${SUFFIXURL}`
     fetch(APIURL)
    .then(data => data.json())
    .then(data => {
      setPhotos(data.hits)
      setFetching(false)
    })

  }
  useEffect(() => {
      getPhotos('roses')
  }, [])


  return (
    !photos ? <div>loading....</div> :
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
            photos.map((photo) => {
              return (
                <div className="single" key={photo.id}>
                  <div className ="top">
                    <div className="big-image">
                      <img src={photo.largeImageURL} />
                    </div>
                    <div className="small-image">
                        <img src={photo.previewURL} />
                    </div>
                  </div>
                  <div className="bottom">
                    <div className="avi">
                      <div className="user-avatar">
                        <img src = {photo.userImageURL} />
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
