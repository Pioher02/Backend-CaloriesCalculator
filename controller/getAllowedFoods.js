const { getProductsAllows } = require("../service/products");

const getAllowedFoods = async (req, res, next) => {
    const { userBloodType } = req.params;
    const result = await getProductsAllows(userBloodType);
// hacer el filtro para que solo tengo los permitidos y responder eso

};

module.exports = getAllowedFoods;