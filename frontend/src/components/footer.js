import Facebook from '../assets/facebook.svg'
import Whatsapp from '../assets/whatsapp.svg'
import Instagram from '../assets/instagram.svg'

const Footer=()=>{
    return(
        <div className='footer-image' >
            <img src={Facebook} alt='lien sur la page facebook du site' />
            <img src={Whatsapp} alt='lien pour une assistance whatsapp' />
            <img src={Instagram} alt='lien sur la page instagram du site' />
        </div>
    )
}

export default Footer;