module.exports.form = function (application, req, res) {
    res.render("login", {validacao: {}, login: {},user:{}});
};
module.exports.check = function (application, req, res) {
    let data = req.body;
    console.log(data);
    let connection = application.config.dbConnection;
    let loginDAO = new application.app.models.LoginDAO(connection);
    loginDAO.check(data,req,res);
};
