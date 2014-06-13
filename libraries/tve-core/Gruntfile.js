'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  grunt.initConfig({
    uglify: {
      build: {
        files: {
          './.tmp/temp.min.js': [
            './lib/angular-bootstrap/transition.js',
            './lib/angular-bootstrap/collapse.js',
            './lib/angular-bootstrap/accordion.js',
            './lib/angular-bootstrap/modal.js',
            './lib/angular-bootstrap/tabs.js',
            './lib/ui-event.js',
            './lib/ui-keypress.js',
            './lib/mdetect.js',
            './bower-components/modernizr/modernizr.js',
            './bower-components/html5shiv/dist/html5shiv.js'
          ]
        }
      }
    },
    concat: {
      build: {
        src: [
          './bower-components/angular/angular.min.js',
          './bower-components/angular-animate/angular-animate.min.js',
          './bower-components/angular-cookies/angular-cookies.min.js',
          './bower-components/angular-sanitize/angular-sanitize.min.js',
          './.tmp/temp.min.js',
          './lib/jquery.ba-throttle-debounce.min.js',
          './lib/jquery.waitforimages.min.js',
          './lib/jquery.jscrollpane.min.js'
        ],
        dest: './dist/tve-core.min.js'
      },
      dev: {
        src: [
          './bower-components/angular/angular.js',
          './bower-components/angular-animate/angular-animate.js',
          './bower-components/angular-cookies/angular-cookies.js',
          './bower-components/angular-sanitize/angular-sanitize.js',
          './bower-components/html5shiv/dist/html5shiv.js',
          './bower-components/modernizr/modernizr.js',
          './lib/angular-bootstrap/transition.js',
          './lib/angular-bootstrap/collapse.js',
          './lib/angular-bootstrap/accordion.js',
          './lib/angular-bootstrap/modal.js',
          './lib/angular-bootstrap/tabs.js',
          './lib/ui-event.js',
          './lib/ui-keypress.js',
          './lib/mdetect.js',
          './lib/jquery.waitforimages.min.js',
          './lib/jquery.ba-throttle-debounce.min.js',
          './lib/jquery.jscrollpane.min.js'
        ],
        dest: './dist/tve-core.js'
      }
    }

  });

  grunt.registerTask('default', ['concat:dev']);
  grunt.registerTask('build', ['uglify:build', 'concat:build']);
};
