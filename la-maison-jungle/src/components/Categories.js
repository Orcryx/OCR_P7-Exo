//importer le style CSS
import '../styles/Categories.css'

function Categories({setActiveCategory, categories, activeCategory}){
    return(
        <div className='lmj-categories'>
            <select value={activeCategory} onChange={(e) => setActiveCategory(e.target.value)} className='lmj-categories-select'>
                <option value=''>Sélectionner une catégories</option>
                {categories.map((cat)=> ( <option key={cat} value={cat}>{cat}</option>))}
            </select>
            <button onClick={()=> setActiveCategory('')}>Tout voir</button>
        </div>
    )
}

export default Categories;