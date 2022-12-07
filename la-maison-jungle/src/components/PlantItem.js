//Importer le style CSS
import '../styles/PlantItem.css'
//importer un composant 
import CareScale from './CareScale'

function handleClick(){
    console.log('Clic');
}


function PlantItem({id, cover, name, water, light}){
    return (
        <li key={id} className='lmj-plant-item' onClick={handleClick(name)}>
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`}/>
            {name}
            <div>
                <CareScale careType='light' scaleValue={light}/>
				<CareScale careType='water' scaleValue={water}/>
            </div>
        </li>
    )
}
//Exporter le composant dans le projet
export default PlantItem;