//Importer le fichier avec la liste de données et pour le traitement en faire une variable
import { plantList } from '../datas/plantList.js'
//importer le style CSS
import '../styles/ShoppingList.css'
//importer un composant
import CareScale from './CareScale'

/** Pour chaque élement dans la const PlantList, créer un élément li de la liste à puce ul cela en parcourant la liste avec la méthode map()
 * key : paramètre unique et à valeur stable dans le temps; ici créer avec une string et la combiner avec l'index de la data dans votre tableau map().
 */
function ShoppingList(){
    const categories = plantList.reduce(
		(acc, plant) =>
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
    
    return (
		<div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul className='lmj-plant-list'>
				{plantList.map((plant) => (
					<li key={plant.id} className='lmj-plant-item'>
						{plant.name}{plant.isBestSale ? <span>🔥</span> : null}
						{plant.isSpecialOffer && <div className='lmj-sales'>Soldes</div>}
						<CareScale scaleValue={plant.light}/>
					</li>
				))}
			</ul>
		</div>
	)
}
console.log(ShoppingList());

export default ShoppingList;