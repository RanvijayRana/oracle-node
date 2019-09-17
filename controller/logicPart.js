const dbModel = require('./../models/model');

let createTable = (req,res) => {
    console.log('*******************create table**********');
    stmt = `create table ${req.query.table}(
        accountNum number,
        fName varchar(25),
        lName varchar(25),
        PRIMARY KEY(accountNum)
    )`;
    dbModel.dbCall(stmt,req,res);
}

let signup = (req,res) => {
    console.log('*******************signUp**********');
    stmt = `INSERT INTO sbi(accountNum,fName,lName)
        VALUES(${req.query.id},'${req.query.fName}',
        '${req.query.lName}')`;
    dbModel.dbCall(stmt,req,res);
}

let login = (req,res) => {
    console.log('*******************login**********');
    stmt = `select * from sbi where accountNum=${req.query.id}`;
    dbModel.dbCall(stmt,req,res);
}

let deleteTable = (req,res) => {
    console.log('*******************delete table**********');
    stmt = `DROP TABLE ${req.query.table}`;
    dbModel.dbCall(stmt,req,res);
}

let viewAll = (req,res) => {
    console.log('***************view all table data*********');
    stmt = `SELECT * from sbi`;
    dbModel.dbCall(stmt,req,res);
}

module.exports = {
    createTable: createTable,
    signup: signup,
    login: login,
    deleteTable: deleteTable,
    viewAll: viewAll
}