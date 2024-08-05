const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config.js/connection');

// creating a model for the Leagues
class League extends Model {}

League.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        league_name: {
            type: DataTypes.STRING,
            allowNull: false,  
        },
        teams: {
            type: DataTypes.STRING,
            allowNull: false, 
            references: {
                model: 'team',
                key: 'id'
            } 
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'league',
    }
)