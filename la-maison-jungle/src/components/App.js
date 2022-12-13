//Importer les composants de l'application
import Banner from './Banner';
import ShoppingList from './ShoppingList';
import QuestionForm from './QuestionForm';
import Footer from './Footer';
import Cart from './Cart';
//Importer image de assets
import logo from '../assets/logo.png';
//Importer le style CSS du fichier
import '../styles/App.css';
// Importer la variable useState de React
import { useState } from 'react';

function App() {
  const [cart, updateCart] = useState([]);
  return (<div>

    <Banner>
      <img src={logo} alt='La maison jungle' className='lmj-logo' />
      <h1 className='lmj-title'>La maison jungle</h1>
    </Banner>
    <Cart cart={cart} updateCart={updateCart}/>
    <ShoppingList cart={cart} updateCart={updateCart} />
    <QuestionForm/>
    <Footer/>
  </div>)
}

export default App;
