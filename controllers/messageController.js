const db = require("../db/queries");
const colours = require("../db/colours");

exports.home = async (req, res) => {
    const messages = await db.getAllMessages();
    res.render("index", { messages });
};

exports.viewMessage = async (req, res) => {
    const id = parseInt(req.params.id);
    const msg = await db.viewMessage(id);
    const colour = colours[Math.floor(Math.random() * colours.length)];
    if (!msg) return res.status(404).send("Not found");
    res.render("message", { msg, colour });
};

exports.addMessage = async (req, res) => {
    const messageUser = req.body.username;
    const messageText = req.body.message;
    await db.addMessage(messageUser, messageText);
    res.redirect("/");
};
 