const response = require('./../libs/responseLib');
const oracledb = require('oracledb');
const dbConfig = require('./../config/dbconfig');

oracledb.autoCommit = true;

let dbCall = (stmt,req,res) => {
    oracledb.getConnection(
        {
            user: 'SYSTEM',
            password: 'Infy123+',
            // connectionString: dbConfig.connectionString
        },
        (err,connection) => {
            if(err){
                let apiResponse = response.generate(true,'error establishing connection',500,err.message);
                console.log(apiResponse);
                res.send(apiResponse);
            }else if(connection){
                let apiResponse = response.generate(false,'connection established',200,null);
                console.log(apiResponse);
                connection.execute(stmt,(err,result) => {
                    if(err){
                        let apiResponse = response.generate(true,'error in query',500,err.message);
                        console.log(apiResponse);
                        res.send(apiResponse);
                    }else{
                        let apiResponse = response.generate(true,'query completed',200,result);
                        console.log(apiResponse);
                        res.send(apiResponse);
                    }
                })
            }
        }
    )
}

module.exports = {
    dbCall : dbCall
}