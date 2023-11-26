import { MysqlConnect } from "./config/db.js";
import express from "express";
import cors from "cors";
import moment from "moment";

const app = express();
app.use(express.json());
app.use(cors());

app.get("/get-tasks", (req, res) => {
  MysqlConnect.query("SELECT * FROM tasks", (err, rows) => {
    if (err) {
      console.log(err);
    } else {
      res.send(rows);
    }
  });
});

app.post("/add-task", (req, res) => {
  const data = req.body;
  const TaskData = [data.title, data.description, moment(Date.now()).format(" h:mm:ss a,MMMM Do YYYY")];
  MysqlConnect.query(
    "INSERT INTO tasks(title,description,created_at) VALUES(?)",
    [TaskData],
    (err, rows) => {
      if (err) {
        console.log(err);
      } else {
        res.send(rows);
      }
    }
  );
  console.log(TaskData)
});

app.delete("/delete-task/:id", (req, res) => {
  MysqlConnect.query(
    "DELETE FROM tasks WHERE id=" + req.params.id,
    (err, rows) => {
      if (err) {
        console.log(err);
      } else {
        res.send(rows);
      }
    }
  );
});

app.listen(1122, () => {
  console.log("http://localhost:1122");
});
