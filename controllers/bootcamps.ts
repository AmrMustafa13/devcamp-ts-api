import Bootcamp from "../models/Bootcamp";
import { ErrorResponse } from "../utils/errorResponse";
import { ExpressHandler } from "../types";
import {
  CreateBootcampRequest,
  CreateBootcampResponse,
  DeleteBootcampRequest,
  DeleteBootcampResponse,
  GetBootcampRequest,
  GetBootcampResponse,
  GetBootcampsRequest,
  GetBootcampsResponse,
  UpdateBootcampRequest,
  UpdateBootcampResponse,
} from "../api";

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamps
// @access  Public

export const getBootcamps: ExpressHandler<
  GetBootcampsRequest,
  GetBootcampsResponse
> = async (req, res, next) => {
  try {
    const bootcamps = await Bootcamp.find();
    res
      .status(200)
      .json({ success: true, data: bootcamps, count: bootcamps.length });
  } catch (error) {
    next(error);
  }
};

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamps/:id
// @access  Public
export const getBootcamp: ExpressHandler<
  GetBootcampRequest,
  GetBootcampResponse
> = async (req, res, next) => {
  try {
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
  } catch (error) {
    next(error);
  }
};

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamps
// @access  Private
export const createBootcamp: ExpressHandler<
  CreateBootcampRequest,
  CreateBootcampResponse
> = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    next(error);
  }
};

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamps/:id
// @access  Private
export const updateBootcamp: ExpressHandler<
  UpdateBootcampRequest,
  UpdateBootcampResponse
> = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!bootcamp)
      return next(
        new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
      );
    res.status(200).json({ success: true, data: bootcamp });
  } catch (error) {
    next(error);
  }
};

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamps/:id
// @access  Private
export const deleteBootcamp: ExpressHandler<
  DeleteBootcampRequest,
  DeleteBootcampResponse
> = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.findByIdAndDelete(req.params.id);
    if (!bootcamp)
      return next(
        new ErrorResponse(`Bootcamp not found with id of ${req.params.id}`, 404)
      );
    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    next(error);
  }
};
