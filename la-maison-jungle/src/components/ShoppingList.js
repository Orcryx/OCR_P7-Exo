//Importer le fichier avec la liste de données et pour le traitement en faire une variable
import { plantList } from '../datas/plantList.js'
import Categories from './Categories';
//importer le style CSS
import '../styles/ShoppingList.css'
//importer un composant
import PlantItem from './PlantItem.js'

/** Pour chaque élement dans la const PlantList, créer un élément li de la liste à puce ul cela en parcourant la liste avec la méthode map()
 * key : paramètre unique et à valeur stable dans le temps; ici créer avec une string et la combiner avec l'index de la data dans votre tableau map().
* Petite précision : categories nous vient de la partie précédente pour récupérer toutes les catégories uniques de plantes.
 */

function ShoppingList({ cart, updateCart }) {
	const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)

	function addToCart(name, price) {
		const currentPlantSaved = cart.find((plant) => plant.name === name)
		if (currentPlantSaved) {
			const cartFilteredCurrentPlant = cart.filter(
				(plant) => plant.name !== name
			)
			updateCart([
				...cartFilteredCurrentPlant,
				{ name, price, amount: currentPlantSaved.amount + 1 }
			])
		} else {
			updateCart([...cart, { name, price, amount: 1 }])
		}
	}

	return (
		<div className='lmj-shopping-list'>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map(({ id, cover, name, water, light, price }) => (
					<div key={id}>
						<PlantItem
							cover={cover}
							name={name}
							water={water}
							light={light}
							price={price}
						/>
						<button onClick={() => addToCart(name, price)}>Ajouter</button>
					</div>
				))}
			</ul>
		</div>
	)
}

//console.log(ShoppingList());

export default ShoppingList;