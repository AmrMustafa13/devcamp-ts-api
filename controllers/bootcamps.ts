import { RequestHandler } from "express";
import Bootcamp from "../models/Bootcamp";

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public

export const getBootcamps: RequestHandler = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    res.status(200).json({ success: true, data: bootcamps });
  } catch (error: any) {
    res.status(400).json({ success: false });
  }
};

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
export const getBootcamp: RequestHandler = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findById(req.params.id);
    if (!bootcamp)
      return res
        .status(400)
        .json({ success: false, data: "No bootcamp found" });
    res.status(200).json({ success: true, data: bootcamp });
  } catch (error: any) {
    res.status(400).json({ success: false });
  }
};

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
export const createBootcamp: RequestHandler = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(200).json({ success: true, data: bootcamp });
  } catch (error: any) {
    res.status(400).json({ success: false });
  }
};

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
export const updateBootcamp: RequestHandler = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!bootcamp)
      return res
        .status(400)
        .json({ success: false, data: "No bootcamp found" });
    res.status(200).json({ success: true, data: bootcamp });
  } catch (error: any) {
    res.status(400).json({ success: false });
  }
};

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
export const deleteBootcamp: RequestHandler = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!bootcamp)
      return res
        .status(400)
        .json({ success: false, data: "No bootcamp found" });
    res.status(200).json({ success: true, data: {} });
  } catch (error: any) {
    res.status(400).json({ success: false });
  }
};
