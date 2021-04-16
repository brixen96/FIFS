const express = require("express");
const app = express();
const fs = require("fs");
const path = require('path');

const rootDir = "./TestFolder";

// Get main dirs for buttons on homepage
app.get("/maincat", function(req, res) {
    var folders = getDirInDir(rootDir);
    console.log(folders);
    res.send(folders);
});

// Get categorys for a main dir
app.get("/cat/:main", function(req, res) {
    var main = req.params.main;
    console.log("Getting categorys from: " + main);
    var ph = path.join(rootDir, main);

    if (fs.existsSync(ph)) {
        var folders = getDirInDir(ph);
        console.log(folders);
        res.send(folders);
    }
    else {
        res.sendStatus(404);
    }
});

// Get videos in a category
app.get("/videos/:main/:cat", function(req, res) {
    var main = req.params.main;
    var cat = req.params.cat;
    var ph = path.join(rootDir, main, cat);

    if (fs.existsSync(ph)) {
        var files = getFilesInDir(ph);
        console.log(files);
        res.send(files);
    }
    else {
        res.sendStatus(404);
    }
});

function getDirInDir(path) {
    return fs.readdirSync(path).filter(function (file) {
        return fs.statSync(path+'/'+file).isDirectory();
    });
}

function getFilesInDir(path) {
    return fs.readdirSync(path);
}

module.exports = {
    path: "/api/",
    handler: app
}