import mysql from "mysql2";
export const MysqlConnect = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "todo",
});

MysqlConnect.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("DataBase Connected Successfully");
  }
});
