const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv")
const cors = require("cors");
const morgan = require("morgan");
const multer = require("multer");
const path = require("path");

const authRoute = require("./routes/auth.routes");
const userRoute = require("./routes/users.routes");
const postRoute = require("./routes/post.routes");
const categoryRoute = require("./routes/categories.routes");
const createItemHomeRoute = require("./routes/homeitem.routes");
 require("./config/config");
dotenv.config();
require("./database");
const app = express();
app.use(morgan("dev"));
app.set("port", process.env.PORT || 4000);

//static file
app.use("/images", express.static(path.join(__dirname, "/images")));

app.use(
  cors({
    origin: "*", // <-- location of the react app were connecting to
    credentials: true,
  })
);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "src/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded");
});

// storage home section
const storage2 = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "src/images/home");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload2 = multer({ storage: storage2 });
app.post("/api/uploadhome", upload2.single("file"), (req, res) => {
  res.status(200).json("File has been uploaded home");
});




// routes
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/categories", categoryRoute);
app.use("/api/createitemhome", createItemHomeRoute);


app.use(express.static(path.join(__dirname, "../client/build")));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));

});


// listen server
app.listen(app.get("port"), () => {
  console.log("backend running on port: ", app.get("port"));
});
