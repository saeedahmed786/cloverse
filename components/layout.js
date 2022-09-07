import { useContext } from "react"
import { ThemeContext } from "../themeContext"

const Layout = () => {
     
    const theme = useContext(ThemeContext)
    console.log(theme)
    return <div>
        Hello
    </div> 
}

export default Layout