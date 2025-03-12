import { AnimalReport } from "../models/report.model.js";
import { User } from "../models/user.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";

// Create a new animal report (Accepts email instead of user_id)

const createReport = async (req, res) => {
  try {
    const { email, animal_type, injury_type, location, status, report_url } =
      req.body;

    console.log(req.body);
    // Validate required fields
    if (
      [email, animal_type, injury_type, location, status, report_url].some(
        (field) => !field?.trim(),
      )
    ) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    // Check if user exists
    const existedUser = await User.findOne({ email });
    if (!existedUser) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    const imageLocalPath = req.files?.image_url[0]?.path;
    console.log(req.files);
    let coverImageLocalPath;
    if (
      req.files &&
      Array.isArray(req.files.coverImage) &&
      req.files.coverImage.length > 0
    ) {
      coverImageLocalPath = req.files.coverImage[0].path;
    }
    if (!imageLocalPath) {
      throw new ApiError(400, "Image file is required");
    }
    // console.log(imageLocalPath);
    const image = await uploadOnCloudinary(imageLocalPath);
    const coverImage = await uploadOnCloudinary(coverImageLocalPath);
    if (!image) {
      throw new ApiError(400, "Image file is required");
    }
    // Create animal report
    const animalReport = await AnimalReport.create({
      user_id: existedUser._id,
      username: existedUser.fullname,
      animal_type,
      injury_type,
      location,
      image_url: image.url,
      status,
      report_url,
    });

    if (!animalReport) {
      return res.status(500).json({
        success: false,
        message: "Something went wrong while creating a report",
      });
    }
    // console.log(animalReport)
    return res.status(201).json({
      success: true,
      message: "Report created successfully",
      data: animalReport,
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
};
// Get all reports
const getAllReports = async (req, res) => {
  try {
    const {
      status,
      animal_type,
      page = 1,
      limit = 10,
      sortBy = "createdAt",
      order = "desc",
    } = req.query;

    // Filter conditions
    const filter = {};
    if (status) filter.status = status;
    if (animal_type) filter.animal_type = animal_type;

    // Pagination and Sorting
    const options = {
      skip: (page - 1) * limit,
      limit: parseInt(limit),
      sort: { [sortBy]: order === "desc" ? -1 : 1 },
    };

    const reports = await AnimalReport.find();
    // const reports = await AnimalReport.find().populate({
    //   path: "user_id",
    //   model: "User", // Explicitly mention the model name if issues persist
    //   select: "email",
    // });

    const totalReports = await AnimalReport.countDocuments(filter);
    console.log(reports)
    res.status(200).json({
      success: true,
      totalReports,
      currentPage: parseInt(page),
      totalPages: Math.ceil(totalReports / limit),
      data: reports,
    });
  } catch (error) {
    console.error("Error fetching reports:", error);
    res
      .status(500)
      .json({
        success: false,
        message: "Server error. Please try again later.",
      });
  }
};

// Get a single report by ID
const getReportById = async (req, res) => {
  try {
    const report = await AnimalReport.findById(req.params.id).populate(
      "user_id",
      "name email",
    );
    if (!report)
      return res
        .status(404)
        .json({ success: false, message: "Report not found" });

    res.status(200).json({ success: true, data: report });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching report",
      error: error.message,
    });
  }
};

// Update report status
const updateReportStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const report = await AnimalReport.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true },
    );

    if (!report)
      return res
        .status(404)
        .json({ success: false, message: "Report not found" });

    res
      .status(200)
      .json({ success: true, message: "Report status updated", data: report });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating report status",
      error: error.message,
    });
  }
};

// Delete a report
const deleteReport = async (req, res) => {
  try {
    const report = await AnimalReport.findByIdAndDelete(req.params.id);
    if (!report)
      return res
        .status(404)
        .json({ success: false, message: "Report not found" });

    res
      .status(200)
      .json({ success: true, message: "Report deleted successfully" });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting report",
      error: error.message,
    });
  }
};

export { createReport, getAllReports };
