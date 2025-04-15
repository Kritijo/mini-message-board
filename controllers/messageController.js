const messages = require("../models/messages");
const colours = require("../models/colours");

exports.home = (req, res) => {
    res.render("index", { messages });
};

exports.viewMessage = (req, res) => {
    const msg = messages[parseInt(req.params.id)];
    const colour = colours[Math.floor(Math.random() * colours.length)];
    if (!msg) return res.status(404).send("Not found");
    res.render("message", { msg, colour });
};

exports.addMessage = (req, res) => {
    const messageUser = req.body.name;
    const messageText = req.body.message;
    messages.push({ text: messageText, user: messageUser, added: new Date() });
    res.redirect("/");
};
