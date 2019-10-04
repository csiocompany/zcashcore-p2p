'use strict';

var gulp = require('gulp');
var zcashcoreTasks = require('bitcore-build');

zcashcoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
