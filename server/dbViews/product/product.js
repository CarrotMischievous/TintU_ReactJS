const mysql  = require('mysql');
const dbDebug = require("debug")("table_product");

const connection = mysql.createConnection({
  host    : '127.0.0.1',
  user    : 'root',
  password: 'xuhang123',
  port    : '3306',
  database: 'tintu',
});

class Product {
  constructor() {
    connection.connect((err) => {
      if(err) {
        dbDebug(err.code, err.sqlMessage);
      }
    });
  }

  add(queryParam, resCallBack) {
    
  }

  update(paramList, queryParam, resCallBack) {
    
  }

  delete(queryParam, resCallBack) {
    
  }

  search(queryParam, resCallBack) {
    const searchQuery = "SELECT * FROM product where name = ?;";
    connection.query(searchQuery, queryParam, resCallBack);
  }

  exit() {
    connection.end();
  }
}

module.exports = Product;