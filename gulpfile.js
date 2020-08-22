let gulp = require("gulp"),
    ts = require("gulp-typescript"),
    browserSync = require('browser-sync'),
    minify = require('gulp-minify'),
    cleanCSS = require('gulp-clean-css'),
    less = require('gulp-less'),
    tsProject = ts.createProject('tsconfig.json');

function watchHtml(){
    gulp.src("public/*.html").pipe(browserSync.reload({stream: true}));
}

function lessGulp(){
    return gulp.src('app/less/**/*.less')
        .pipe(less())
        .pipe(cleanCSS())
        .pipe(gulp.dest('public/css'))
        .pipe(browserSync.reload({stream: true}))
}

function tsGulp(){
    return gulp.src("app/ts/**/*.ts")
        .pipe(tsProject())
        .pipe(minify())
        .pipe(gulp.dest('public/js'))
        .pipe(browserSync.reload({stream: true}));
}

function browserSyncGulp(){// Создаем таск browser-sync
    browserSync({ // Выполняем browserSync
        server: { // Определяем параметры сервера
            baseDir: 'public' // Директория для сервера - app
        },
        watch: true,
        notify: true // Отключаем уведомления
    });
}

exports.watch = gulp.parallel(watchHtml, browserSyncGulp, tsGulp, lessGulp);