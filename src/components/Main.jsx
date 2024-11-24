import { useState } from "react";

export default function Main(){
    const [ingredients, setIngredients] = useState([]);
    const ingredientsList = ingredients.map(i => (
        <li key={i}>{i}</li>
    ))

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients,newIngredient])
        event.currentTarget.reset();
    }
    return (
        <main>
            <form className="add-ingredient-form" onSubmit={handleSubmit}>
                <input aria-label="Add ingredient"
                        placeholder="e.g oregano"
                        type="text" 
                        name="ingredient"/>
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsList}
            </ul>
        </main>
    );
}

