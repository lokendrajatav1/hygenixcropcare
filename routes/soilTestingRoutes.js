const express = require("express");
const {
  createSoilTestRequest,
  getAllRequests,
} = require("../controllers/soilTestingController");

const router = express.Router();

/**
 * @route   POST /api/soil-test
 * @desc    Submit a new soil test request
 * @access  Public
 */
router.post("/", createSoilTestRequest);

/**
 * @route   GET /api/soil-test/admin
 * @desc    Fetch all soil test requests (for admin panel)
 * @access  Admin (protect with auth middleware later)
 */
router.get("/", getAllRequests);

module.exports = router;
