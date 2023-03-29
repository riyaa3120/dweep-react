import  './Footer.css'
import vector1 from '../img/Vector (1).png'
import vector2 from '../img/Vector (2).png'

const footer = ()=>{
    return(
        <>
        <div class="footerC">
            <div class="lower-left">
                <ul>
                    <li>Prompt Generator</li>
                    <li>Dweep Daily</li>
                    <li>All Contributors</li>
                    <li>Your data on Dweep.io</li>
                    <li>Contribute to Dweep</li>
                </ul>
            </div>
            <div class="lower-right">
                <ul>
                    <li>Dweep.io</li>
                    <li>made with love in India</li>
                    <li><img src={vector1} alt="na"/> </li>
                    <img src={vector2} alt = "na"/>
                    <li >hello@dweep.io</li>
                </ul>
            </div>
        </div>
        </>
    )
}
export default footer;