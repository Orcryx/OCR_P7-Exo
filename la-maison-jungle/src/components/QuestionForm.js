import { useState } from 'react'

function QuestionForm()
{
    // permet de déclarer l'état initial pour  inputValue   et la fonction correspondante pour la modifier, et de lui préciser la valeur par défaut "Posez votre question ici"
    const [inputValue, setInputValue] = useState("Posez votre question ici")
    return (<div>
    <form onSubmit={handleSubmit}>
        <input type='text' name='my_input' defaultValue='Tapez votre texte' />
        <button type='submit'>Entrer</button>
    </form>
    <textarea value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
    {/* <button onClick={()=> alert(inputValue)}>Alertez-moi</button> */}
    </div>) 
  
}



function handleSubmit(e) {
    e.preventDefault()
    alert(e.target['my_input'].value)
}

export default QuestionForm;