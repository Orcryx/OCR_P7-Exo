const plantList = [
    'monstera',
    'ficus lyrata',
    'pothos argenté',
    'yucca',
    'palmier'
]

/** Pour chaque élement dans la const PlantList, créer un élément li de la liste à puce ul cela en parcourant la liste avec la méthode map()
 * key : paramètre unique et à valeur stable dans le temps; ici créer avec une string et la combiner avec l'index de la data dans votre tableau map().
 */
function ShoppingList(){
    return(
        <ul> 
            {plantList.map((plant, index)=>(<li key={`${plant}-${index}`}>{plant}</li>))}
        </ul>
        
    )
}
//console.log(ShoppingList());

export default ShoppingList;