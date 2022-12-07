//Importer le fichier CSS associer
import '../styles/Cart.css';
// Importer la variable useState de React
import { useState } from 'react'



function Cart() {
    const [cart, updateCart] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const monsteraPrice = 8
    // const ivyPrice = 10
    // const flowerPrice = 15
    return isOpen ? (<div className='lmj-cart' >
        <button onClick={()=> setIsOpen(false)}>Fermer</button>
        <h2>Panier</h2>
        {/* <ul>
        <li>Monstera : {monsteraPrice}€</li>
         <li>Lierre : {ivyPrice}€</li>
         <li>Fleurs : {flowerPrice}€</li>
        </ul> */}
        <div>
            Monstera : {monsteraPrice}€
            <button onClick={() => updateCart(cart + 1)}> Ajouter</button>
        </div>
          <h3>Total : {monsteraPrice * cart} €</h3>
        </div>) : (
           <button onClick={()=> setIsOpen(true)}>Ouvrir le panier</button>
        )
    }
    
 export default Cart;
 