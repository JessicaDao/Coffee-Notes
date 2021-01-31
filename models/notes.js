module.exports = function(sequelize, DataTypes){
    var Details = sequelize.define('Details', {
    coffee_name:{
        type:DataTypes.STRING,
        unique:true,
        allowNull:false
    },
    producer:{
        type:DataTypes.STRING,
        allowNull:true
    },
    coffee_bean:{
        type:DataTypes.STRING,
        allowNull:true
    },
    brew_method:{
        type:DataTypes.STRING,
        allowNull:true
    },
    taste:{
        type:DataTypes.STRING,
        allowNull:false
    },
    rate:{
        type:DataTypes.FLOAT,
        allowNull:false,
        validate:{
            min:0,
            max:5
        }
    },
    price:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    location:{
        type:DataTypes.STRING,
        allowNull:true
    }
});
    Details.associate = function(models){

    };
    return Details;
}

