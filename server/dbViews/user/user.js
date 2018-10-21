const mysql  = require('mysql');
const dbDebug = require("debug")("table_user");
const Formater = require("../helper/format.js");

const connection = mysql.createConnection({
  host    : '127.0.0.1',
  user    : 'root',
  password: 'xuhang123',
  port    : '3306',
  database: 'tintu',
});

class User {
  constructor() {
    connection.connect((err) => {
      if(err) {
        dbDebug(err.code, err.sqlMessage);
      }
    });
  }

  add(queryParam, resCallBack) {
    const addQuery = "INSERT INTO user(name, sex, age, phone, email) VALUES(?, ?, ?, ?, ?);";
    connection.query(addQuery, queryParam, resCallBack);
  }

  update(dataParamList, keyParamList, queryParam, resCallBack) {
    // update可以针对部分值，这里解析下参数
    const dataParams = Formater.formatParams(dataParamList);
    const keyParams = Formater.formatParams(keyParamList);

    const updateQuery = `UPDATE user SET ${dataParams} WHERE ${keyParams};`;

    connection.query(updateQuery, queryParam, resCallBack);
  }

  delete(queryParam, resCallBack) {
    const deleteQuery = "DELETE FROM user WHERE phone = ?;";
    connection.query(deleteQuery, queryParam, resCallBack);
  }

  search(paramList, queryParam, resCallBack) {
    const params = Formater.formatParams(paramList);
    const searchQuery = `SELECT * FROM user WHERE ${params};`;
    connection.query(searchQuery, queryParam, resCallBack);
  }

  exit() {
    connection.end();
  }
}

module.exports = User;