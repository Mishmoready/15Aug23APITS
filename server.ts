import env from "dotenv";
import app from "./app";

env.config();
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`server started and listening on ${PORT}`);
});
