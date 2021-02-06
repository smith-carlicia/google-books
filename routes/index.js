// I hold the front end routes
// i also provide access to the backend routes 
const path = require("path");
const router = require("express").Router();
const TheBackendRoutes = require("./api");
// API Routes
router.use("/api", TheBackendRoutes);
// If no API routes are hit, send the React app
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);
module.exports = router;


