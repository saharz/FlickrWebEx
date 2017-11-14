module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        concat: {
            options: {},
            build_css: {
                src: ['src/index.css'],
                dest: 'build/app.css'
            },
            build_js: {
                src: ['src/services/*.js', 'src/index.js'],
                dest: 'build/app.js'
            }
        },
        clean: {
            build: ['build']
        },
        includeSource: {
            target: {
                files: {
                    'build/index.html': 'src/index.html'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-include-source');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('build', ['clean', 'concat', 'includeSource']);
};
