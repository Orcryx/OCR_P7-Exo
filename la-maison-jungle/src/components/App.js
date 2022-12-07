//Importer les composants de l'application
import Banner from './Banner';
import logo from '../assets/logo.png'
//import Cart from './Cart';
import ShoppingList from './ShoppingList';
//Importer le style CSS du fichier
import '../styles/App.css';

function App() {
  return (<div>

    <Banner>
      <img src={logo} alt='La maison jungle' className='lmj-logo' />
      <h1 className='lmj-title'>La maison jungle</h1>
    </Banner>
    {/* <Cart/> */}
    <ShoppingList/>
  </div>)
}

export default App;
