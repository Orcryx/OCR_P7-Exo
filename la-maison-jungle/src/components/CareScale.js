//importer les images pour les échelles
import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

//les props sont récupérées dans les paramètres de la fonction qui définit notre composant.
function CareScale(props){
   
    // On évite de multiplier les déclarations qui sans cette syntaxe auraient été :
    const {scaleValue, careType} = props
    // const scaleValue = props.scaleValue et
    // const careType = props.careType
    const range = [1, 2, 3]
    
    const scaleType = careType === 'light' ? (<img src={Sun} alt='sun-icon' />) : (<img src={Water} alt='water-icon' />)

    return (
            <div>
                {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null)}
            </div>
        )
}

// exporter le composant à l'ensemble du projet
export default CareScale;