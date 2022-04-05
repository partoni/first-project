const Pool =require('pg').Pool
const db = new Pool({
    user:'postgres',
    password:'0238994Tk',
    database:'taxi',
    port:'5432',
    host:'localhost'

})
module.exports = db