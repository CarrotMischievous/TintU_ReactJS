const mysql  = require('mysql');
const dbDebug = require("debug")("table_user");

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
    const addQuery = "INSERT INTO user(name, sex, age, phone) VALUES(?, ?, ?, ?);";
    connection.query(addQuery, queryParam, resCallBack);
  }

  update(paramList, queryParam, resCallBack) {
    // update可以针对部分值，这里解析下参数
    const props = paramList.map((param) => {
      return `${param} = ?,`;
    });
    const params = props.join(" ");
    const updateQuery = `UPDATE user ${params} WHERE phone = ?`;

    connection.query(updateQuery, queryParam, resCallBack);
  }

  delete(queryParam, resCallBack) {
    const deleteQuery = "DELETE FROM user WHERE phone = ?;";
    connection.query(deleteQuery, queryParam, resCallBack);
  }

  search(queryParam, resCallBack) {
    const searchQuery = "SELECT * FROM user WHERE phone = ?;";
    connection.query(searchQuery, queryParam, resCallBack);
  }

  exit() {
    connection.end();
  }
}

module.exports = User;