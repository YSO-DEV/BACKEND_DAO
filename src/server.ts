import express from "express";
import userRoutes from "./routes/routes";

const PORT = 3000;


const app = express();
app.use(express.json());
app.use("/users", userRoutes);


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

