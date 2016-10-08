//引入gulp工具
var gulp = require('gulp');

//引入gulp-webserver
var webserver = require('gulp-webserver');

//引入css预处理 的模块
var minifyCSS = require('gulp-minify-css')
var sass = require('gulp-sass');

//引入js 的模块 js文件模块 vinyl-named js 压缩模块
var named = require('vinyl-named');
var webpack = require('gulp-webpack');
var uglify = require('gulp-uglify');
//引入fs url模块哦
var fs = require('fs');
var url = require('url');
//引入rev revCollector 模块 版本号控制
var rev=require('gulp-rev');
var revCollector=require('gulp-rev-collector');
//引入glup
var sequence=require('gulp-sequence');

gulp.task('webserver', function() {
    gulp.src('./')
        .pipe(webserver({
            host: 'localhost',
            port: 8080,
            directoryListing: {
                enable: true,
                path: './'
            },
            livereload: true,
            //mock 数据
            middleware: function(req, res, next) {
                var urlObj=url.parse(req.url,true);
                switch (urlObj.pathname) {
                  case '/api/order':
                  res.setHeader('Content-Type','application/json');
                    fs.readFile('./mock/listtest.json',function(err,data){
                      res.end(data);
                    })
                    return;
                  case  '/Product/GetPagerListProductByType':
                  //res.setHeader('Content-Type','application/json');
                    fs.readFile('./mock/listgoods.json',function(err,data){
                      res.end(data);
                    })
                    return;
                  case '/api/cart':
                  //cart
                    return;
                }
                next();
            }
        }));
});
//css模块化
var cssFiles = [
    './src/styles/usage/page/*.scss'
];
gulp.task('scss', function() {
    gulp.src(cssFiles)
        .pipe(sass().on('error', sass.logError))
        .pipe(minifyCSS())
        .pipe(gulp.dest('./bulid/prd/styles/'));
});
//js模块化
var jsFiles = [
    './src/scripts/*.js'
];
gulp.task('packjs', function() {
        gulp.src(jsFiles)
            .pipe(named())
            .pipe(webpack({
                output: {
                    filename: '[name].js'
                },
                module: {
                    loaders: [
                      {
                        test: /\.js$/,
                        loader: 'imports?define=>false'
                        //exclude: './src/scripts/libs/zepto.js'//忽略zepto.js
                      },
                      {
                        test:/\.string$/,
                        loader:'string'// 使它可以读string文件
                      }
                  ]
                }
            }))
            .pipe(uglify().on('error', function(err) {
                console.log('\x07', err.linNumber, err.message);
                return this.end;
            }))
            .pipe(gulp.dest('./bulid/prd/scripts/'));
    })
//版本号控制
var cssDistFiles=[
  './bulid/prd/styles/**/*.scss'
];
var jsDistFiles=[
  './bulid/prd/scripts/*.js'
]
gulp.task('ver',function(){
  gulp.src(cssDistFiles)
      .pipe(rev())
      .pipe(gulp.dest('./bulid/prd/styles/'))
      .pipe(rev.manifest())
      .pipe(gulp.dest('./bulid/ver/styles/'));
  gulp.src(jsDistFiles)
      .pipe(rev())
      .pipe(gulp.dest('./bulid/prd/scripts/'))
      .pipe(rev.manifest())
      .pipe(gulp.dest('./bulid/ver/scripts/'));
});
gulp.task('html',function(){
  gulp.src(['./bulid/ver/**/*','./bulid/*.html'])
      .pipe(revCollector())
      .pipe(gulp.dest('./bulid/'));
})
// gulp.task('min',sequence('copy-index','ver','html'),function(){
//   console.log("!~~~~~~min~~~~~~~^_^");
// });
gulp.task('min',sequence('copy-index','ver','html'));
//拷贝index.html 到build文件夹
gulp.task('copy-index', function() {
    gulp.src('./*.html')
        .pipe(gulp.dest('./bulid'));
});

//拷贝images 到build文件夹
//单个*.{jpg,JPG,bmp,gif} 多个*.* 全部（包括文件夹）/**/*
gulp.task('copy-images', function() {
        gulp.src('./images/**/*')
            .pipe(gulp.dest('./bulid/images/'));
    })
//拷贝libs（库文件，fonts）文件
gulp.task('copy-libs',function(){
  gulp.src('./libs/**/*')
      .pipe(gulp.dest('./bulid/libs/'));
})
//侦测文件变化
gulp.task('watch', function() {
        gulp.watch('./*.html', ['copy-index']);
        gulp.watch('./images/**/*{jpg,png,gif}', ['copy-images']);
        gulp.watch('./libs/**/*.{js,css,scss}', ['copy-libs']);
        gulp.watch('./src/styles/**/*', ['scss']);
        gulp.watch('./src/scripts/**/*', ['packjs']);
    })
    //配置default 任务 执行任务队列

gulp.task('default', ['watch', 'webserver'], function() {
    console.log("^_^~~~~~~~~~ok");
});
