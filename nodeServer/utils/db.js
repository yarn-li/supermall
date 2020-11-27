let mysql = require("mysql");
let option = {
  host: "localhost",
  port: "3306",
  user: "root",
  password: "123456",
  database: "user",
};

function connectionPrimise() {
  let connection = mysql.createConnection(option);
  return new Promise((resolve, reject) => {
    connection.connect(function (err) {
      if (err) {
        console.log("数据库连接失败", err);
        reject(false);
      } else {
        resolve({res: true, conn: connection});
      }
    });
  });
}
function queryPromise(sql, conn) {
  return new Promise((resolve, reject) => {
    conn.query(sql, function (err, data) {
      if (err) {
        console.log("SQL语句执行失败", err);
        reject(false);
      } else {
        resolve(data);
      }
    })
  })
}

async function dbHandler(sql_txt) {
  let connResult = await connectionPrimise();
  if (connResult.res) {
    let queryResult = await queryPromise(sql_txt, connResult.conn);
    connResult.conn.end();
    return queryResult;
  }
}
module.exports = dbHandler;
