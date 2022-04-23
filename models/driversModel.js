const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Driver = sequelize.define('driver',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    name:{type:DataTypes.STRING,unique:true},
    firstName:{type:DataTypes.STRING},
    auto:{type:DataTypes.STRING},
    phone:{type:DataTypes.STRING},
    role:{type:DataTypes.STRING, defaultValue:'DRIVER'}
})
module.exports = Driver