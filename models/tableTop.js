module.exports = function(sequelize, DataTypes) {
  const tableTop = sequelize.define("tableTop", {
    tableNumber: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  });
  return tableTop;
};
