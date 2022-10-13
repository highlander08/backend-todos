const express = require("express");
const routes = express.Router();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

routes.get("/todos", async (req, res) => {
  const todos = await prisma.todo.findMany();
  return res.status(200).json(todos);
});

routes.post("/todos", async (req, res) => {
  const { name } = req.body;
  const todo = await prisma.todo.create({
    data: {
      name,
    },
  });
  return res.status(201).json(todo);
});

routes.put("/todos", async (req, res) => {
  const { name, id, status } = req.body;

  if (!id) return res.status(400).json("Id is mandatory");

  const todoAlreadyExist = await prisma.todo.findUnique({ where: { id } });

  if (!todoAlreadyExist) return res.status(404).json("Todo not exist");

  const todoUpdate = await prisma.todo.update({
    where: {
      id,
    },
    data: {
      name,
      status,
    },
  });
  return res.status(200).json(todoUpdate);
});

routes.delete("/todos/:id", async (req, res) => {
  const { id } = req.params;

  const IdInt = parseInt(id);

  if (!IdInt) return res.status(404).json("Id is mandatory");

  const todoAlreadyExist = await prisma.todo.findUnique({
    where: { id: IdInt },
  });

  if (!todoAlreadyExist) return res.status(404).json("Todo not exist");

  await prisma.todo.delete({ where: { id: IdInt } });
  return res.status(200).json(`Todo deleted with id ${IdInt}`);
});

module.exports = routes;
