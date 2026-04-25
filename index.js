const express = require("express");
const app = express();
const pool = require("./db");

app.use(express.json());

app.use((req, res, next) => {
  const waktu = new Date().toISOString();
  console.log(`[${waktu}] ${req.method} ${req.url}`);
  next();
});

app.get("/tasks", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM tasks ORDER BY id ASC");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await pool.query("SELECT * FROM tasks WHERE id=$1", [id]);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Task tidak ditemukan" });
    }

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post("/tasks", async (req, res) => {
  try {
    let { title, description } = req.body;

    if (!title || title.trim() === "") {
      return res.status(400).json({
        message: "Title tidak boleh kosong"
      });
    }

    const result = await pool.query(
      "INSERT INTO tasks (title, description) VALUES ($1, $2) RETURNING *",
      [title, description]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.put("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let { title, description, is_completed } = req.body;

    const check = await pool.query("SELECT * FROM tasks WHERE id=$1", [id]);

    if (check.rows.length === 0) {
      return res.status(404).json({ message: "Task tidak ditemukan" });
    }

    const result = await pool.query(
      "UPDATE tasks SET title=$1, description=$2, is_completed=$3 WHERE id=$4 RETURNING *",
      [title, description, is_completed, id]
    );

    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.delete("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const check = await pool.query("SELECT * FROM tasks WHERE id=$1", [id]);

    if (check.rows.length === 0) {
      return res.status(404).json({ message: "Task tidak ditemukan" });
    }

    await pool.query("DELETE FROM tasks WHERE id=$1", [id]);

    res.json({ message: "Task berhasil dihapus" });
  } catch (err) {
  console.error("ERROR:", err); // 🔥 TAMBAHKAN INI
  res.status(500).json({ message: err.message });
}
});

app.listen(3000, () => {
  console.log("Server running di http://localhost:3000");
});
