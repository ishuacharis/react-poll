
import {createContext} from 'react'
import {themes} from '../data/data'

const ThemeContext = createContext({
    theme: themes.dark,
    toggleTheme: () => {}
})

export default ThemeContext