const express = require("express");
const app = express();
const fs = require("fs");
const path = require('path');

const rootDir = "./static/Media";

// Get main dirs for buttons on homepage
app.get("/maincat", function(req, res) {
    console.log("Getting main folders");
    var folders = getDirInDir(rootDir);
    console.log(folders);
    res.send(folders);
});

// Get categorys for a main dir
app.get("/cat/:main", function(req, res) {
    var main = req.params.main;
    var ph = path.join(rootDir, main);
    console.log("Getting categorys from: " + ph);

    if (fs.existsSync(ph)) {
        var folders = getDirInDir(ph);
        console.log(folders);
        res.send(folders);
    }
    else {
        res.sendStatus(404);
    }
});

// Get SubCategorys for a categorys
app.get("/cat/:main/:cat", function(req, res) {
    var main = req.params.main;
    var cat = req.params.cat;
    var ph = path.join(rootDir, main, cat);
    console.log("Getting SubCategorys from: " + ph);

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
    console.log("Getting Videos from: " + ph);

    if (fs.existsSync(ph)) {
        var files = getFilesInDir(ph);
        console.log(files);
        res.send(files);
    }
    else {
        res.sendStatus(404);
    }
});

// Get videos in a SubCategory
app.get("/videos/:main/:cat/:subCat", function(req, res) {
    var main = req.params.main;
    var cat = req.params.cat;
    var subCat = req.params.subCat;
    var ph = path.join(rootDir, main, cat, subCat);
    console.log("Getting Videos from: " + ph);

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
    return fs.readdirSync(path).filter(function (file) {
        return fs.statSync(path+'/'+file).isFile();
    });
}

module.exports = {
    path: "/api/",
    handler: app
}