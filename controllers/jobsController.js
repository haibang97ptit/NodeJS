const Job = require("../models/jobs");

//get all jobs => api/v1/jobs
exports.getJobs = async (req, res, next) => {
  const jobs = await Job.find();

  res.status(200).json({
    success: true,
    result: jobs.length,
    data: jobs,
  });
};

//create new job => api/v1/job/new
exports.newJob = async (req, res, next) => {
  const job = await Job.create(req.body);

  res.status(200).json({
    succes: true,
    message: "Job created",
    data: job,
  });
};

exports.updateJob = async (req, res, next) => {
  let job = await Job.findById(req.params.id);

  if (!job) {
    return res.status(404).json({
      success: false,
      message: "Job not found",
    });
  }

  job = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });

  res.status(200).json({
    success: true,
    message: "Job is updated",
    data: job,
  });
};

exports.deleteJob = async (req, res, next) => {
  let job = await Job.findByIdAndDelete(req.params.id);

  if (!job) {
    return res.status(404).json({
      success: false,
      message: "Job not found",
    });
  }

  job = await Job.findByIdAndDelete(req.params.id);
  res.status(200).json({
    success: true,
    message: "Job is deleted",
  });
};
