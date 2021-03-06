const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    email:{type:DataTypes.STRING,unique:true},
    password:{type:DataTypes.STRING},
    role:{type:DataTypes.STRING, defaultValue:'USER'}
})
const Post=sequelize.define('post',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    title:{type:DataTypes.STRING},
    body:{type:DataTypes.STRING}
}
)
const Token=sequelize.define('token',{
    refreshToken:{type:DataTypes.STRING},
    
})

User.hasMany(Post)
Post.belongsTo(User)

User.hasOne(Token)
Token.belongsTo(User)

module.exports = {User,Post,Token}