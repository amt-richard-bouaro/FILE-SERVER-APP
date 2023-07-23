import {createContext, useContext, useState, useEffect} from 'react'
import { Theme } from '../Themes/theme'
import { themeType } from '../Themes/themeTypes'
import { THEMES } from '../Themes/THEMES'


type themeContextType = {
    theme: Theme,
    themeType: themeType,
    setCurrentTheme: React.Dispatch<React.SetStateAction<themeType>>
}

type childrenType = {
    children: React.ReactNode
}

const ThemeContext = createContext<themeContextType>({
    themeType: 'light',
    theme:THEMES['light'],
} as themeContextType)


const ThemeProvider = ({ children }: childrenType) => {

    let themeStore: themeType = 'light'
    
    if (localStorage.getItem('theme') !== null) {
    themeStore =  JSON.parse(localStorage.getItem('theme') as string).themeType  
    }

    const [currentTheme, setCurrentTheme] = useState<themeType>(themeStore)

    useEffect(() => {
        localStorage.setItem('theme', JSON.stringify({themeType: currentTheme}))
    }, [currentTheme])

    const changeTheme = () => { 
        setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light')
    }
    

  return (
      <ThemeContext.Provider value={{
        themeType: currentTheme,
        theme: THEMES[currentTheme],
        setCurrentTheme 
      }}>
        <div className="btn-theme">
        <div className="btn-theme-trigger" onClick={changeTheme}>
          
        </div>
      </div>
          {children}
      </ThemeContext.Provider>
    )
   
}



export default ThemeProvider


 export const useTheme = () => useContext(ThemeContext)