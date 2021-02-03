const bcrypt = require("bcrypt");

module.exports = function(sequelize, DataTypes){
    var User = sequelize.define('User', {
    username:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
        validate:{
             len:[6]
        }
    }
});
    User.associate = function(models){
        User.hasMany(models.Details);
    };

    User.beforeCreate(function(user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });
    
    return User;
}

