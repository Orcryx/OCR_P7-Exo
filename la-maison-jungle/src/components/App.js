//Importer les composants de l'application
import Banner from './Banner';
import Cart from './Cart';
import ShoppingList from './ShoppingList';
//Importer le style CSS du fichier
import '../styles/App.css';

function App() {
  return (<div>

    <Banner/>
    <Cart/>
    <ShoppingList/>
  </div>)
}

export default App;
