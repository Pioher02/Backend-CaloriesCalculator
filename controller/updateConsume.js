const updateConsumeCtrl = async (req, res, next) => {
  const { date, products } = req.body;
  const owner = req.user._id;
};

module.exports = updateConsumeCtrl;
