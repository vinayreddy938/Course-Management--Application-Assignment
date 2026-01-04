import {
  courseReadService,
  courseReadByIdService,
  courseCreateService,
  courseEditService,
  courseDeleteService
} from "../services/course.service.js";

export const courseReadController = async (req, res) => {
  try {
    const courses = await courseReadService();

    return res.status(200).json({
      success: true,
      message: "courses fetched successfully",
      data: courses
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      message: "Something went wrong"
    });
  }
};

export const courseReadByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await courseReadByIdService(Number(id));

    return res.status(200).json({
      success: true,
      message: "course fetched successfully",
      data: course
    });
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      success: false,
      message: err.message || "Something went wrong"
    });
  }
};

export const courseCreateController = async (req, res) => {
  try {
    const course = await courseCreateService(req.body);

    return res.status(201).json({
      success: true,
      message: "course created successfully",
      data: course
    });
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      success: false,
      message: err.message || "Something went wrong"
    });
  }
};

export const courseEditController = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await courseEditService(Number(id), req.body);

    return res.status(200).json({
      success: true,
      message: "course updated successfully",
      data: course
    });
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      success: false,
      message: err.message || "Something went wrong"
    });
  }
};

export const courseDeleteController = async (req, res) => {
  try {
    const { id } = req.params;
    await courseDeleteService(Number(id));

    return res.status(200).json({
      success: true,
      message: "course deleted successfully"
    });
  } catch (err) {
    return res.status(err.statusCode || 500).json({
      success: false,
      message: err.message || "Something went wrong"
    });
  }
};
