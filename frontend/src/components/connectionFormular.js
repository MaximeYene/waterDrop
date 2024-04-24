import Logo from '../assets/image.png'
import Facebook from '../assets/facebook.svg'
import Instagram from '../assets/instagram.svg'
import '../styles/connection.css'

const ConnForm = () => {
    return (
        <div>
            <div>
                <img src={Logo} alt='Logo' className='LogoImg'/>
                <h2>
                    Créer mon compte
                </h2>
                <p>
                    Décrivez vous en quelques mots et inscrivez vous sur WaterDrop
                </p>
                <form>
                    <div>
                        <div className='name-container' >
                            <div>
                                Prénom :
                                <input type='text' />
                            </div>
                            <div>
                                Nom :
                                <input type='text' />
                            </div>
                        </div>
                        <div>
                            Mail :
                            <input type='mail' />
                        </div>
                        <div>
                            Mot de passe :
                            <input type='password' />
                        </div>
                        <button>
                            Creer un compte
                        </button>
                    </div>
                    <div>
                        <p>
                            Vous avez deja un compte?
                        </p>
                        <div>
                            Mail :
                            <input type='mail'/>
                        </div>
                        <div>
                            Mot de passe :
                            <input type='password'/>
                        </div>
                        <button>
                            Se connecter
                        </button>
                        <div>
                            <p>
                                Se connecter :
                            </p>
                            <div>
                                <img src= {Facebook} alt='lien facebook'/>
                                <img src={Instagram} alt='lien instagram'/>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ConnForm;