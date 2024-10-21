
import PropTypes from "prop-types";
const CookCart = ({ isShowBtn, cart, index, handlePrepareItem }) => {
    // console.log(cart)
    const { recipe_name, preparing_time, calories } = cart;
    return (
        <>
            <tr className="bg-base-200">
                <th>{index}</th>
                <td>{recipe_name}</td>
                <td>{preparing_time}</td>
                <td>{calories}</td>
                {
                    isShowBtn && <td>
                        <button onClick={() => handlePrepareItem(cart)} className="btn bg-primary rounded-full">Preparing</button>
                    </td>
                }

            </tr>

        </>
    );
};

CookCart.propTypes={
    isShowBtn:PropTypes.bool,
    handlePrepareItem:PropTypes.func,
    recipe_name:PropTypes.string,
    cart:PropTypes.object,
    index:PropTypes.string

}

export default CookCart;