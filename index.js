const express = require("express");
const path = require("path");

const port = 8080;
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use("/css", express.static(path.join(__dirname, "public/css")));

app.get("/", sendFileWrapper("index.html"));
app.get("/about", sendFileWrapper("about.html"));
app.get("/contact-me", sendFileWrapper("contact-me.html"));

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
});

app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).send("Internal Server Error");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});

function sendFileWrapper(fileName) {
  return (req, res) => {
    const filePath = path.join(__dirname, "views", fileName);
    res.status(200).sendFile(filePath, (err) => {
      if (err) {
        next(err);
      }
    });
  };
}
