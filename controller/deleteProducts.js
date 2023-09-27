const { getAllConsumes, updateConsumesDate } = require("../service/consumes");

const deleteProductsCtrl = async (req, res, next) => {
  const { date } = req.params;
  const { index } = req.body;
  const owner = req.user._id;

  try {
    const dateData = await getAllConsumes({ owner, date });

    const products = dateData[0].products;
    const id = dateData[0]._id;

    products.splice(index, 1);

    const resultUpdate = await updateConsumesDate(id, products);
    res.json({
      status: "success",
      code: 200,
      data: resultUpdate,
    });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

module.exports = deleteProductsCtrl;
