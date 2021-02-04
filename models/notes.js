module.exports = function(sequelize, DataTypes) {
    var Notes = sequelize.define('Notes', {
         name: {
            type:DataTypes.TEXT,
            allowNull:false
         }
    });

    Notes.associate = function(models) {
        Notes.belongsToMany(models.Details,{through:"notes"});
    };

    return Notes;
};