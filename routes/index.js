module.exports = function(app) {

    app.use('/user', require('./users'));

    app.get("/", (req, res) => {
        res.status(200).send("hi");
    })
}