const mongoose = require("mongoose");

const taskSchema = mongoose.Schema(
  {
    task_name: {
      type: String,
      required: true,
    },
    task_description: {
      type: String,
    },
    task_end_date: {
      type: Date,
    },
    task_priority: {
      type: String,
    },
    task_assigned_users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
    tasks_comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Task",
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    section_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Section",
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
