import React,{useState} from 'react'
import Sun from "../../assets/icons8-sun-50.png"
import Dark from "../../assets/icons8-dark-48.png"
import "./style.css"
function Theme() {
    const [dark, setdark] = useState(true)
    const toogletheme = ()=>{
        if(dark){
            document.querySelector('body').setAttribute("data-theme","light")
            console.log("Dark")
            setdark(false)
        }else{
            document.querySelector('body').setAttribute("data-theme","dark")
            console.log("Light")
            setdark(true)
        }
    }
    return (
        <div className='themetoogle'>
            <input type="checkbox" name="theme" id="theme" onChange={toogletheme}/>
            <label htmlFor="theme">
                <img src={dark ? Sun : Dark} alt="themeimg" />
            </label>
        </div>
    )
}

export default Theme