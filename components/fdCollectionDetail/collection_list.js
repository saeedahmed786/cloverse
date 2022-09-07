import EachBox from "./eachbox"
import BlackCoat from '../../images/blackcoat.png'
import { useContext } from "react"
import { ThemeContext } from "../themeContext"

const ListView = () => {

    const theme = useContext(ThemeContext)

    return (
        <div className="collection-five" style={{backgroundColor:`${theme.background}`}}>
        <EachBox image={BlackCoat} id={1}/>
        <EachBox image={BlackCoat} id={2}/>
        <EachBox image={BlackCoat} id={3}/>
        <EachBox image={BlackCoat} id={4}/>
        <EachBox image={BlackCoat} id={5}/>
        </div>
    )
}

export default ListView