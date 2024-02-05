import Image from '../assets/image.png'
import '../styles/home.css'
import { Link } from 'react-router-dom'

const HomeBody=()=>{
    const presentation='Découvrez notre gamme de produits aquacoles de qualité, des poissons aux aliments spécialisés, pour créer un environnement prospère et équilibré.'
    return(
        <div className='homebody-container' >
            <div className='homebody-presentation' >
            <h1>{presentation}</h1>
            <Link to='/produits' className='homebody-link' >Nos produits</Link>
            </div>
            <div className='homebody-image' ><img src={Image} alt='Dessin illustratif'/></div>
        </div>
    )
}

export default HomeBody