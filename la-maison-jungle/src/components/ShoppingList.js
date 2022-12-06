const plantList = [
    'monstera',
    'ficus lyrata',
    'pothos argenté',
    'yucca',
    'palmier'
]

/** Pour chaque élement dans la const PlantList, créer un élément li de la liste à puce ul cela en parcourant la liste avec la méthode map() */
function ShoppingList(){
    return(
        <ul> 
            {plantList.map((plant)=>(<li>{plant}</li>))}
        </ul>
    )
}

export default ShoppingList;