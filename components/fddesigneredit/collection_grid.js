import EachBox from "./eachbox"
import BlackCoat from '../../images/blackcoat.png'
import { useContext } from "react"
import { ThemeContext } from "../themeContext"

const GridView = () => {

    const theme = useContext(ThemeContext)

    return (
        <div className="collection-seven" style={{backgroundColor:`${theme.background}`}}>
        <EachBox image={BlackCoat} />
        <EachBox image={BlackCoat} />
        <EachBox image={BlackCoat} />
        <EachBox image={BlackCoat} />
        <EachBox image={BlackCoat} />
        <EachBox image={BlackCoat} />
        <EachBox image={BlackCoat} />
        <EachBox image={BlackCoat} />
        <EachBox image={BlackCoat} />
        <EachBox image={BlackCoat} />
        <EachBox image={BlackCoat} />
        <EachBox image={BlackCoat} />
        <EachBox image={BlackCoat} />
        <EachBox image={BlackCoat} />
        </div>
    )
}

export default GridView