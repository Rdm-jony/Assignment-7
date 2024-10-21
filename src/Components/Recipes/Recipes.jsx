import { useEffect, useState } from "react";
import Recipe from "./Recipe/Recipe";
import Cooking from "./Cooking/Cooking";
import toast from 'react-hot-toast';


const Recipes = () => {
    const [recipes, setRecipes] = useState([])
    const [selectCart, setSelectcart] = useState([])

    useEffect(() => {
        fetch("fake.json")
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])

    const handleScelectCart = (item) => {
        const checkDouble = selectCart.find(cart => cart.recipe_id == item.recipe_id)
        console.log(checkDouble)
        checkDouble ? toast.error("Already exsts!") : setSelectcart([...selectCart, item])
    }

    return (
        <div className="mt-14 ">
            <div className="text-center lg:w-2/3 mx-auto">
                <h2 className="font-semibold text-4xl mb-5">Our Recipes</h2>
                <p>Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. Eget urna volutpat curabitur elementum mauris aenean neque. </p>
            </div>
            <div className="flex lg:flex-row flex-col-reverse gap-5 mt-10">
                <div className="grid lg:grid-cols-2 grid-cols-1 lg:w-2/3 gap-5  overflow-auto h-screen">
                    {
                        recipes.map(rescipe => <Recipe key={rescipe.id} rescipe={rescipe} handleScelectCart={handleScelectCart}></Recipe>)
                    }
                </div>
                <div className="flex-grow ">
                    <Cooking setSelectcart={setSelectcart} selectCart={selectCart} ></Cooking>
                </div>
            </div>
        </div>
    );
};

export default Recipes;