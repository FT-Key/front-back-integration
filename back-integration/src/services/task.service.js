import Task from "../models/Task.model.js";

export const getAllTasks = async () => Task.find().lean();
export const getTaskById = async (id) => Task.findById(id);
export const createTask = async (data) => Task.create(data);

export const updateTask = async (id, data) => {
  const task = await Task.findByIdAndUpdate(id, data, { new: true });
  if (!task) throw new Error("TASK_NOT_FOUND");
  return task;
};

export const deleteTask = async (id) => {
  const task = await Task.findByIdAndDelete(id);
  if (!task) throw new Error("TASK_NOT_FOUND");
};
