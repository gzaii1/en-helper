import sqlite3 from 'sqlite3'
import { Sequelize } from 'sequelize'

sqlite3.verbose()

export const sequelize = new Sequelize("sqlite:db/base.db")

sequelize.sync({ force: false })

export default sequelize.models