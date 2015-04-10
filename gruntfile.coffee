module.exports = (grunt) ->

    # Load watch and less plugins
    grunt.loadNpmTasks 'grunt-contrib-less'
    grunt.loadNpmTasks 'grunt-contrib-watch'
    grunt.loadNpmTasks 'grunt-contrib-connect'

    # Start configuration block
    grunt.initConfig

        # Files to watch, and tasks to run
        watch:
            gruntfile:
                files: ['Gruntfile.js']
            less:
                files: ['less/**/*.less']
                tasks: ['less:dev']
            livereload:
                options:
                    livereload: '<%= connect.options.livereload %>'
                files: ['css/**/*.css',
                        'app/**/*.js',
                        'index.html']

        # Connect/livereload settings
        connect:
            options:
                port: 9000
                # Change to '0.0.0.0' to access from outside
                hostname: 'localhost'
                livereload: 35729
            livereload:
                options:
                    open: true

        # Less compiler settings
        less:
            dev:
                options:
                    paths: ['less']
                    sourceMap: true
                    sourceMapFilename: 'css/app.css.map'
                    sourceMapURL: 'app.css.map'
                src: ['less/app.less']
                dest: 'css/app.css'
            prod:
                options:
                    paths: ['less']
                    compress: true
                src: ['less/app.less']
                dest: 'css/app.css'

    # Default task is to watch and livereload for now
    grunt.registerTask 'default', ['less:dev', 'connect:livereload', 'watch']

    # For building for production
    grunt.registerTask 'build', 'less:prod'
