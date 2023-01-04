import { DataTypes } from 'sequelize'
import { sequelize } from './index'

export const Person = sequelize.define("Person", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
    },
})
