//Importer les composants de l'application
import Banner from './Banner';
import ShoppingList from './ShoppingList';
import QuestionForm from './QuestionForm'
import Footer from './Footer'
//Importer image de assets
import logo from '../assets/logo.png'
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
    <QuestionForm/>
    <Footer/>
  </div>)
}

export default App;
