//les props sont récupérées dans les paramètres de la fonction qui définit notre composant.
function CareScale(props){
    const scaleValue = props.scaleValue;
    const range = [1,2,3]
    return (<div>
               {range.map((rangeElem) => scaleValue >= rangeElem ? <span key={rangeElem.toString()}>☀️</span> : null)}
            </div>)
}

// exporter le composant à l'ensemble du projet
export default CareScale;