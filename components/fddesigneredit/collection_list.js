import EachBox from "./eachbox"
import BlackCoat from '../../images/blackcoat.png'
import { ThemeContext } from "../themeContext"
import { useContext } from "react"

const ListView = () => {

    const theme = useContext(ThemeContext)

    return (
        <div className="collection-five" style={{backgroundColor:`${theme.background}`}}>
        <EachBox image={BlackCoat} />
        <EachBox image={BlackCoat} />
        <EachBox image={BlackCoat} />
        <EachBox image={BlackCoat} />
        <EachBox image={BlackCoat} />
        </div>
    )
}

export default ListView