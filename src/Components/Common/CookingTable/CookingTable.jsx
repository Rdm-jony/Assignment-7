import PropTypes from "prop-types";
import { getTotalTimeCalories } from "../../Utilities/Utilities";
import CookCart from "./CookCart/CookCart";

const CookingTable = ({ isShowTotal, isShowBtn, selectCart, handlePrepareItem }) => {

    return (
        <div>
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        selectCart?.map((cart, i) => <CookCart
                            handlePrepareItem={handlePrepareItem}
                            isShowBtn={isShowBtn}
                            isShowTotal={isShowTotal}
                            cart={cart}
                            index={i + 1}
                            key={cart.id}>

                        </CookCart>)
                    }
                    {
                        isShowTotal && <tr className="font-semibold">
                            <td colSpan={2}></td>
                            <td>Total Time =
                                <span>{getTotalTimeCalories(selectCart, "preparing_time")}</span> minutes</td>
                            <td>Total Calories =
                                <span>{getTotalTimeCalories(selectCart, "calories")}</span> calories</td>
                        </tr>
                    }

                </tbody>
            </table>
        </div>
    );
};

CookingTable.propTypes = {
    isShowBtn: PropTypes.bool,
    isShowTotal: PropTypes.bool,
    selectCart: PropTypes.array,
    handlePrepareItem: PropTypes.func
}

export default CookingTable;