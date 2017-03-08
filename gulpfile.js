var gulp = require("gulp");
var marked = require("gulp-markdown");
var rename = require("gulp-rename");
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

gulp.task("convert", function() {
	return gulp.src("./src/**/*.md")
		.pipe(marked({
			highlight: function(code, lang) {
				if(lang) {
					return highlight.highlight(lang, code).value.split("\n").map(function(p, i) {
						return "<span class=\"line-line\"><span class=\"line-number\">" + (i + 1) + "</span><span class=\"line-contents\">" + p + "</span></span>";
					}).join("\n");
					//return highlight.highlight(lang, code).value;
				} else {
					return code;
				}
			},
			renderer:renderer
		}))
		/*
		.pipe(ssg({
			title: "Cadmus"
		}, {
			property:"meta",
			baseUrl:"/.dist/"
		}))*/
		.pipe(es.map(function(file, cb) {
			var x = file.path.split("/");
			var contents = String(file.contents);
			dust.render("./templates/page.dust", {contents:contents, title: x[x.length -1].split(".")[0].split(":")[1]}, function(err, contents) {
				if(err) {
					console.log(err);
					cb(err);
				} else {
					file.contents = Buffer(contents);
					cb(null, file);
				}
			});
		}))
		.pipe(rename(function(path) {
			path.basename = path.basename.replace(/\s+/g, '-');
			path.extname = ".html";
		}))
		.pipe(gulp.dest("./dist"));
});

gulp.task("copy", function() {
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

gulp.task("default", ["styles", "convert", "copy"]);
