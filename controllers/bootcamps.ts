import Bootcamp from "../models/Bootcamp";
import { ErrorResponse } from "../utils/errorResponse";
import { asyncHandler } from "../middlewares/async";

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public

export const getBootcamps = asyncHandler(async (req, res, next) => {
  const bootcamps = await Bootcamp.find();
  res
    .status(200)
    .json({ success: true, data: bootcamps, count: bootcamps.length });
});

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
export const getBootcamp = asyncHandler(async (req, res, next) => {
  // check if the id is valid mongoose id
  if (!req.params.id.match(/^[0-9a-fA-F]{24}$/)) {
    return next(new ErrorResponse(`Invalid id`, 400));
  }
  const bootcamp = await Bootcamp.findById(req.params.id);
  if (!bootcamp) {
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  }
  res.status(200).json({ success: true, data: bootcamp });
});

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
export const createBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.create(req.body);
  res.status(200).json({ success: true, data: bootcamp });
});

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
export const updateBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!bootcamp)
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  res.status(200).json({ success: true, data: bootcamp });
});

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
export const deleteBootcamp = asyncHandler(async (req, res, next) => {
  const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
  if (!bootcamp)
    return next(
      new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
    );
  res.status(200).json({ success: true, data: {} });
});
