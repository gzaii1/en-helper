import sqlite3 from 'sqlite3'
import path from 'path'
import  {Sequelize } from 'sequelize'

sqlite3.verbose()

const DBPath = `sqlite:${path.resolve(__dirname, './base.db')}`

const sequelize = new Sequelize(DBPath);

(async () => {
    try {
        // 测试连接
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
})()

export default sequelize