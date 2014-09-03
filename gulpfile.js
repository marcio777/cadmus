var gulp = require("gulp");
var marked = require("gulp-markdown");
var rename = require("gulp-rename");
var connect = require("gulp-connect");
var clean = require("gulp-clean");
var dust = require("dustjs-linkedin");
dust.helper = require("dustjs-helpers");
var es = require("event-stream");
var fs = require("fs");
var highlight = require("highlight.js");
var pages = require("gulp-gh-pages");
var sass = require("gulp-sass");
var mard = require("marked");
var renderer = new mard.Renderer();

renderer.image = function(href, title, text) {
	return "<img src=\"" + href + "\" alt=\"" + text + "\" title=\"" + (title || text) + "\"/>";
};

dust.onLoad = function(name, cb) {
	fs.readFile(name, function(err, contents) {
		cb(err, contents.toString());
	});
};

gulp.task("clean", function() {
	return gulp.src("./dist/**/*", {read:false})
		.pipe(clean());
});

gulp.task("convert", ["clean"], function() {
	return gulp.src("./src/**/*.md")
		.pipe(marked({
			highlight: function(code, lang) {
				if(lang) {
					return highlight.highlight(lang, code).value;
				} else {
					return code;
				}
			},
			renderer:renderer
		}))
		.pipe(rename({
			extname:".html"
		}))/*
		.pipe(ssg({
			title: "Cadmus"
		}, {
			property:"meta",
			baseUrl:"/.dist/"
		}))*/
		.pipe(es.map(function(file, cb) {
			var contents = String(file.contents);
			dust.render("./templates/page.dust", {contents:contents}, function(err, contents) {
				if(err) {
					console.log(err);
					cb(err);
				} else {
					file.contents = Buffer(contents);
					cb(null, file);
				}
			});
		}))
		.pipe(gulp.dest("./dist"));
});

gulp.task("copy", ["clean"], function() {
	return gulp.src("./src/**/*")
		.pipe(gulp.dest("./dist"));
});

gulp.task("deploy", function() {
	return gulp.src("./dist/**/*").
		pipe(pages());
});

gulp.task("server", function() {
	connect.server({
		root:"dist"
	});
});

gulp.task("styles", function() {
	return gulp.src("./styles/**/*")
		.pipe(sass({
			outputStyle:"compressed"
		}))
		.pipe(rename({
			extname:".css"
		}))
		.pipe(gulp.dest("./dist/styles"));
});

gulp.task("default", ["styles", "convert", "copy"], function() {
	gulp.start("server");
});
