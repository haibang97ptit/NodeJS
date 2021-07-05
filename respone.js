const http = require("http");

const data = [
  {
    id: 1,
    name: "Bangnh8",
  },
  {
    id: 2,
    name: "Tiendx2",
  },
];

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.getHeader("Date", new Date(Date.now()));
  res.setHeader("X-Powered-By", "Bangnh8");
  res.end(
    JSON.stringify({
      message: "Success",
      total: data.length,
      data: data,
    })
  );
});

server.listen(3000, () => {
  console.log("Server already Started");
});
