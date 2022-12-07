function Recommendation (){
    //Créer une variable qui récupère le mois de la date système
    const currentMonth = new Date().getMonth();
    //Créer une variable qui calcule la période où se trouve le printemps parmis les mois du calendrier
    const isSpring = currentMonth >= 2 && currentMonth <= 5;

    if (!isSpring){
        return (<div>Ce n'est pas le moment de remporter.</div>)
    }
    return (<div>C'est le printemps, l est temps de rempoter vos plantes ! </div>)
}

//exporter le contenu de la fonction vers les autres fichiers du projet
export default Recommendation;