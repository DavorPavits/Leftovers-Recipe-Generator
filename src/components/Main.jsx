import { useState } from "react";
import Recipe from "./Recipe";
import IngredientsList from "./IngredientsLIst";


export default function Main(){
    const [ingredients, setIngredients] = useState(["all spices", "ground beef", "pasta", "tomato sauce"]);
    const [recipeShown, setRecipeShown] = useState(false);
   

    function toggleRecipeShown(){
        console.log("Button clicked");
        setRecipeShown(prevShown => !prevShown)
    }

    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        if(newIngredient !== ""){
            setIngredients(prevIngredients => [...prevIngredients,newIngredient])
        }else{
            
        }
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
            
            {ingredients.length > 0 && <IngredientsList 
                                                ingredients={ingredients}
                                                toggleRecipeShown={toggleRecipeShown}/>}
           {recipeShown && <Recipe/>}
        </main>
    );
}

