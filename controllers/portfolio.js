const projects = require('../data/projects.json');
const user = require('../data/user.json');

function index(req, res) {
    res.render('index', {
        projects: projects.projects
    });
}

function fetchProjectInto(req, res) {
    let id = req.params.id;
    let project = projects.projects.filter((project) => project.id == id)[0];
    res.render('project', {
        project
    });
}

function aboutPage(req, res) {
    res.render('about', {
        user: user.user_info
    });
}

module.exports = {
    index,
    fetchProjectInto,
    aboutPage
};