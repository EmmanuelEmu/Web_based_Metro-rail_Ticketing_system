module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    NID: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false
    },
    mobile:{
      type: DataTypes.INTEGER,
      defaultValue: 0,
      allowNull: false
    },
    dob:{
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    email:{
      type: DataTypes.STRING,
      allowNull: false
    },
    password:{
      type: DataTypes.STRING,
      allowNull: false
    },
    picture:{
      type: DataTypes.BLOB,
      allowNull: true
    },
  });

  return User;
};



// module.exports = user;