import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { Pool, type QueryResult } from "pg";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: parseInt(process.env.DB_PORT || "5432"),
});

pool.connect((e, client, release) => {
  if (e) {
    console.error('Error connecting to database:', e);
  } else {
    console.log('Connected to PostgreSQL database');
    release();
  }
});

// Get all employees
app.get("/api/employees", async (req, res) => {
  try {
    const result: QueryResult = await pool.query('SELECT * FROM employees');
    res.json(result.rows);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Database error' });
  }
});

// Get all tasks
app.get("/api/tasks", async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM tasks');
    res.json(result.rows);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Database error' });
  }
});

// Get tasks for specific employee
app.post("/api/tasks", async (req, res) => {
  const { task, person_id } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO tasks (task_name, person_id) VALUES ($1, $2) RETURNING *", 
      [task, person_id]
    );
    res.json(result.rows[0]);
  } catch (e) {
    console.error(e);
    res.status(500).send("Error adding task");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});