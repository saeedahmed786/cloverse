import EachBox from "./eachbox"
import BlackCoat from '../../images/blackcoat.png'
import { useContext } from "react"
import { ThemeContext } from "../themeContext"

const GridView = () => {

    const theme = useContext(ThemeContext)

    return (
        <div className="collection-seven" style={{backgroundColor:`${theme.background}`}}>
        <EachBox image={BlackCoat} id={1}/>
        <EachBox image={BlackCoat} id={2}/>
        <EachBox image={BlackCoat} id={3}/>
        <EachBox image={BlackCoat} id={4}/>
        <EachBox image={BlackCoat} id={5}/>
        <EachBox image={BlackCoat} id={6}/>
        <EachBox image={BlackCoat} id={7}/>
        <EachBox image={BlackCoat} id={8}/>
        <EachBox image={BlackCoat} id={9}/>
        <EachBox image={BlackCoat} id={10}/>
        <EachBox image={BlackCoat} id={11}/>
        <EachBox image={BlackCoat} id={12}/>
        <EachBox image={BlackCoat} id={13}/>
        <EachBox image={BlackCoat} id={14}/>
        </div>
    )
}

export default GridView