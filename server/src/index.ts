import cors from "cors";
import express from "express";
import routes from "./routes";

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cors());
routes(app);

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
