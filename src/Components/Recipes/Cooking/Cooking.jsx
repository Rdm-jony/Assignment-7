import { useState } from "react";
import CookingTable from "../../Common/CookingTable/CookingTable";
import PropTypes from 'prop-types';


const Cooking = ({ selectCart, setSelectcart }) => {
    const [prepareItam, setPrepareItem] = useState([])
    const handlePrepareItem = (item) => {
        setPrepareItem([...prepareItam, item])
        const remaininSelectCart = selectCart.filter(cart => cart.recipe_id != item.recipe_id)
        setSelectcart(remaininSelectCart)
    }
    return (
        <div className="space-y-3 border-2 py-10 rounded-lg">
            <h2 className="font-semibold text-2xl text-center">Want to cook: {selectCart.length}</h2>
            <hr />
            <CookingTable
                selectCart={selectCart}
                isShowTotal={false}
                isShowBtn={true}
                handlePrepareItem={handlePrepareItem}>
            </CookingTable>
            <h2 className="font-semibold text-2xl text-center">Currently cooking: {prepareItam.length}</h2>
            <hr />
            <CookingTable isShowTotal={true} selectCart={prepareItam} isShowBtn={false}></CookingTable>
        </div >
    );
};

Cooking.propTypes = {
    selectCart: PropTypes.array.isRequired,
    setSelectcart: PropTypes.func
}

export default Cooking;