import { RequestHandler } from "express";

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public

export const getBootcamps: RequestHandler = async (req, res, next) => {
  res.send("Hello World!");
};

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
export const getBootcamp: RequestHandler = async (req, res, next) => {
  res.send(`Hello World ${req.params.id}`);
};

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
export const createBootcamp: RequestHandler = async (req, res, next) => {
  res.send("Hello World!");
};

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
export const updateBootcamp: RequestHandler = async (req, res, next) => {
  res.send(`Hello World ${req.params.id}`);
};

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
export const deleteBootcamp: RequestHandler = async (req, res, next) => {
  res.send(`Hello World ${req.params.id}`);
};
