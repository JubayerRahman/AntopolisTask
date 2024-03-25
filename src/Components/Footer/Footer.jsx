import { FaFacebookSquare } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";





const Footer = () => {
  return (
    <div className='footer'>
        <div className='logoFont main'>
            <div className="section1">
            <h1>Taste now</h1>
            <div className="icons">
                <p><FaFacebookSquare/></p>
                <p><ImInstagram/></p>
                <p><FaTwitter/></p>
                <p><FaYoutube/></p>
            </div>

            </div>
            <div className="section2">
            <div className="section1">
            <span>Seslendirme ve Alt Jazz</span>
            <span>Media Market</span>
            <span>Gillie</span>
            <span>Size Last</span>

            </div>
            <div className="section1">
            <span>Self Betimes</span>
            <span>Yatırımcı İlişkileri</span>
            <span>Basal Himmler</span>

            </div>
            <div className="section1">
            <span>Yard Market</span>
            <span>Is İmkanları</span>
            <span>Car Tercihleri</span>

            </div>
            <div className="section1">
            <span>Hedge Karla</span>
            <span>Mullein Koşulları</span>
            <span>Autumnal Bulgier</span>

            </div>
            </div>
        </div>
        <div className="iconsForMobile">
                <p><FaFacebookSquare/></p>
                <p><ImInstagram/></p>
                <p><FaTwitter/></p>
                <p><FaYoutube/></p>
            </div>
    </div>
  )
}

export default Footer
