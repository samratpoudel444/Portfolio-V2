const sequelize = require("../../helper/sequelizeHelper");

const deleteExperince = async (req, res, next) => {
  try {
    const { id } = req.params;

    if (!id) {
      return next({ code: 400, message: "Please provide the necessary Id" });
    }
    const query = `select "Position" from "experinceTables" where id= :id`;

    const [checkIfDataExist] = await sequelize.query(query, {
      raw: true,
      replacements: { id },
    });

    if (!checkIfDataExist || checkIfDataExist.length === 0) {
      return next({
        code: 404,
        message: "Experince data Not found",
      });
    }

    const deleteQuery = `Delete from "experinceTables" where id= :id`;

    const [_,deletedData] = await sequelize.query(deleteQuery, {
      raw: true,
      replacements: { id },
    });


    if (!deletedData || deletedData === 0) {
      return next({
        code: 400,
        message: "Failed to delete the record",
      });
    }

    return res.status(200).json({ message: "Record Deleted Sucessfully" });
  } catch (err) {
    return next({
      code: err.code || 500,
      message: err.message || "Internal Server Error",
    });
  }
};

module.exports = deleteExperince;
