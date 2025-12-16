import * as taskService from "../services/task.service.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await taskService.getAllTasks();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: "ERROR_GET_TASKS" });
  }
};

export const getTask = async (req, res) => {
  try {
    const task = await taskService.getTaskById(req.params.id);
    if (!task) {
      return res.status(404).json({ message: "TASK_NOT_FOUND" });
    }
    res.json(task);
  } catch (error) {
    res.status(400).json({ message: "INVALID_TASK_ID" });
  }
};

export const createTask = async (req, res) => {
  try {
    const newTask = await taskService.createTask(req.body);
    res.status(201).json(newTask);
  } catch (error) {
    res.status(400).json({ message: "ERROR_CREATE_TASK" });
  }
};

export const updateTask = async (req, res) => {
  try {
    const updatedTask = await taskService.updateTask(
      req.params.id,
      req.body
    );
    res.json(updatedTask);
  } catch (error) {
    if (error.message === "TASK_NOT_FOUND") {
      return res.status(404).json({ message: error.message });
    }
    res.status(400).json({ message: "ERROR_UPDATE_TASK" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    await taskService.deleteTask(req.params.id);
    res.json({ message: "TASK_DELETED" });
  } catch (error) {
    if (error.message === "TASK_NOT_FOUND") {
      return res.status(404).json({ message: error.message });
    }
    res.status(400).json({ message: "ERROR_DELETE_TASK" });
  }
};
