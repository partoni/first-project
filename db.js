const {Sequelize} = require('sequelize')
const config = require('config')

// const name = config.get('nameDB')
// const user = config.get('userDB')
// const port = config.get('portDB')
// const host = config.get('hostDB')
// const password = config.get('passwordDB')

module.exports = new Sequelize(
    'taxi',
    'postgres',
    '238994',
    {
        dialect:'postgres',
        port:'5432',        
        host:'localhost'
    }
   
)


// const Pool =require('pg').Pool
// const db = new Pool({
//     user:'postgres',
//     password:'0238994Tk',
//     database:'taxi',
//     port:'5432',
//     host:'localhost'

// })
// module.exports = db