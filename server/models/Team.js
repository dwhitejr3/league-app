const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config.js/connection');

class Team extends Model {}

Team.init(
    {
        id:{
           type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        } ,
        team_name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        wins: {
            type: DataTypes.INTEGER,
            allowNull:false
        },
        loses: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        roster: {
            type: DataTypes.STRING,
            allowNull: false,
            references:{
                model:'player',
                key: 'id'
            }
        }

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'team',
      },
);

module.exports = Team;