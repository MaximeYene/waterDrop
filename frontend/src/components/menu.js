import '../styles/produits.css'

const Menu=()=>{
    const title1='Catégories'
    const title2='Panier'

    return(
        <div className="menu-container" >
            <h2 className='menu-title1' >{title1}</h2>
            <h2 className='menu-title2' >{title2}</h2>
        </div>
    )
}

export default Menu;