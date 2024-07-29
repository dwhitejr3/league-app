const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config.js/connection');

class Player extends Model {}

Player.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
        team: {
            type: DataTypes.STRING,
            references:{
                model: 'team',
                key: 'id'
            }
        },
        points: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        rebounds: {
            type: DataTypes.STRING,
            allowNull: true, 
        },
        assists: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        steals: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        turnovers: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        games_played: {
            type: DataTypes.STRING,
            allowNull: false, 
        },
        field_goals_attempted: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        field_goals_made: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'player',
      },
);

module.exports = Player;