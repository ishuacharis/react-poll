import {createContext} from 'react'

export default GalleryContext =  createContext({
  apiUrl: "https://api.pexels.com/v1/search?query=nature&per_page=1"
})
