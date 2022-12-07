//Importer le fichier CSS associer
import '../styles/Cart.css';
// Importer la variable useState de React
import { useState } from 'react'



// function Cart({cart, updateCart}) {
//     //const [cart, updateCart] = useState(0); // Plus besoin si passer en variable de déstructuration
//     const [isOpen, setIsOpen] = useState(false);
//     const monsteraPrice = 8
//     // const ivyPrice = 10
//     // const flowerPrice = 15
//     return isOpen ? (<div className='lmj-cart' >
//         <button onClick={()=> setIsOpen(false)}>Fermer</button>
//         <h2>Panier</h2>
//         {/* <ul>
//         <li>Monstera : {monsteraPrice}€</li>
//          <li>Lierre : {ivyPrice}€</li>
//          <li>Fleurs : {flowerPrice}€</li>
//         </ul> */}
//         <div>
//             Monstera : {monsteraPrice}€
//             {/* <button onClick={() => updateCart(cart + 1)}> Ajouter</button> */}
//         </div>
//           <h3>Total : {monsteraPrice * cart} €</h3>
//           <button onClick={() => updateCart(0)}>Vider le panier</button>
//         </div>) : (
//            <button onClick={()=> setIsOpen(true)}>Ouvrir le panier</button>
//         )
//     }
function Cart({ cart, updateCart }) {
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0
	)
	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}€ x {amount}
							</div>
						))}
					</ul>
					<h3>Total :{total}€</h3>
					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}
 export default Cart;
 