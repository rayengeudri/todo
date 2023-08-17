const express = require("express");
const cors = require("cors")
const TaskRoute = require("./routes/TaskRoute")
const users = require("./routes/users")
const app = express();
const PORT = 5000;
app.use(express.json())

app.use(cors())    
app.use("/api/Task",TaskRoute)   
app.use("/api/users",users)
// TODO - add additional route handlers as necessary
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
