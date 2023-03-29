//import statements
import './Header.css'
import man from '../img/dweep io 1.png'

const header = ()=>{
    return(<>

    <div class="headerC">
            <div class="left">
                <h1>An inspiring design delivered to your inbox every morning</h1>
                <h2>Our team scouts the internet for the best designs, illustrations and art and delivers a truly
                    inspiring one every day to your inbox</h2>
                <b>Show me how it looks</b>
                <div class="form">
                    <input type="text" placeholder="Your Email Address"/>
                    <button>Register Now</button>
                </div>
                <p>Free - No Spam - No Data Sharing</p>
            </div>
            <div class="right"><img src={man} alt="not available" id="image"/></div>
        </div>
    </>
    )
}

export default header;