module.exports = function(sequelize, DataTypes){
    var User = sequelize.define('User', {
    email:{
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

    };
    return User;
}

