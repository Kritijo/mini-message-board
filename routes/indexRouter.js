const { Router } = require("express");
const indexRouter = Router();

const messageController = require("../controllers/messageController");

indexRouter.get("/", messageController.home);
indexRouter.get("/message/:id", messageController.viewMessage);
indexRouter.post("/new", messageController.addMessage);

module.exports = indexRouter;
