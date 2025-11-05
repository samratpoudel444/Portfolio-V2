const sequelize = require("../../helper/sequelizeHelper");

const deleteBlog = async (req, res, next) => {
  try {
    console.log(req.params)
    const id= req.params.id;

    if (!id) {
      return next({ code: 400, message: "Please provide the necessary Id" });
    }
    const query = `select "blogTitle" from "blogTables" where id= :id`;

    const checkIfDataExist = await sequelize.query(query, {
      raw: true,
      replacements: { id },
    });

    if (!checkIfDataExist || checkIfDataExist.length === 0) {
      return next({
        code: 404,
        message: "Blogs Not found",
      });
    }

    const deleteQuery = `Delete from "blogTables" where id= :id`;

    const [deletedData] = await sequelize.query(deleteQuery, {
      raw: true,
      replacements: { id },
    });

    if (!deletedData.length) {
      return next({
        code: 400,
        message: "Failed to delete the record",
      });
    }

    return res.status(200).json({ message: "Record Deleted Sucessfully" });
  } catch (err) {
    console.log(err)
    return next({
      code: err.code || 500,
      message: err.message || "Internal Server Error",
    });
  }
};

module.exports = deleteBlog;
