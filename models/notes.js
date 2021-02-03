module.exports = function(sequelize, DataTypes) {
    var Notes = sequelize.define('Notes', {
         name: {
            type:DataTypes.STRING,
            unique:true,
            allowNull:false
         }
    });

    Notes.associate = function(models) {
        Notes.belongsToMany(models.Details,{through:"SavedNotes"});
    };

    return Notes;
};