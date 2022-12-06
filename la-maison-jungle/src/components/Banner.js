//importer la feuille de style css
import '../styles/Banner.css';
//Importer une image du dossier assets
import logo from '../assets/logo.png';

function Banner(){
    return (<div className='lmj-banner'>
                <img src={logo} alt='Logo de la maison de la jungle qui ressemble à une feuille verte' className='lmj-logo'/>
                <h1 className='lmj-title'>La maison jungle</h1>
            </div>)
}
//Il s'agit d'une syntaxe prévue dans l'ES6, qui vous épargnera d'utiliser les accolades au moment de l'import. 
export default Banner;