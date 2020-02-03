module.exports = function() {
    $.gulp.task('pug', ()=>  {
        return $.gulp.src('./dev/pug/pages/*.pug')
            .pipe($.gp.pug({
                locals : {
                    nav: JSON.parse($.fs.readFileSync('./data/navigation.json', 'utf8')),
                    press: JSON.parse($.fs.readFileSync('./data/pages/press.json', 'utf8')),
                    contact: JSON.parse($.fs.readFileSync('./data/pages/contact.json', 'utf8')),
                    global: JSON.parse($.fs.readFileSync('./data/global.json', 'utf8')),
                    index: JSON.parse($.fs.readFileSync('./data/pages/index.json', 'utf8')),
                    smpo: JSON.parse($.fs.readFileSync('./data/pages/smpo.json', 'utf8')),
                },
                pretty: true
            }))
            .on('error', $.gp.notify.onError(function(error) {
                return {
                    title: 'Pug',
                    message: error.message
                };
            }))
            .pipe($.gulp.dest('./build/'))
            .on('end', $.browserSync.reload);
    });
};
