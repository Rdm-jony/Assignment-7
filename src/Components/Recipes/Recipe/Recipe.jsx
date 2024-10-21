import PropTypes from "prop-types";
import { CiClock2 } from "react-icons/ci";
import { FaFire } from "react-icons/fa";

const Recipe = ({ rescipe, handleScelectCart }) => {
    const { calories, ingredients, preparing_time,  recipe_image, recipe_name, short_description } = rescipe;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img
                    className="w-full h-60 p-8"
                    src={recipe_image}
                    alt="Shoes" />
            </figure>
            <div className="card-body pt-0">
                <h2 className="card-title">{recipe_name}</h2>
                <p>{short_description}</p>
                <hr />
                <div>
                    <h3 className="font-bold mb-2">Ingredients: {ingredients?.length}</h3>
                    <ul className="text-sm list-disc pl-5">
                        {
                            ingredients.map((item, idx) => <li key={idx}><p>{item}</p></li>)
                        }
                    </ul>
                </div>
                <hr />
                <div className="flex">
                    <p className="flex"><CiClock2 className="size-5 mr-2" /> <span>{preparing_time}</span>
                    </p>
                    <p className="flex"><FaFire className="size-5 mr-2" /> <span>{calories}</span>
                    </p>
                </div>
                <div className="card-actions justify-start">
                    <button onClick={() => handleScelectCart(rescipe)} className="btn bg-primary rounded-full mt-4">Want to Cook</button>
                </div>
            </div>
        </div>
    );
};

Recipe.propTypes={
    rescipe:PropTypes.object.isRequired,
    handleScelectCart:PropTypes.func,
    
    
}

export default Recipe;