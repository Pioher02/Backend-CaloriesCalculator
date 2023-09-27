const { getAllConsumes } = require("../service/consumes");

const getProductsConsumedCtrl = async (req, res, next) => {
    const { date } = req.body;
  const owner = req.user._id;
  const products = await getAllConsumes({ owner, date });
  
};

module.exports = getProductsConsumedCtrl;
