module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON( 'package.json' ),

    emberTemplates: {
      compile: {
        options: {
          templateBasePath: /public\/js\/templates\//
        },
        files: {
          'public/js/templates.js': 'public/js/templates/**/*.hbs'
        }
      }
    },

    sass: {
      dist: {
        files: {
          'public/app.css': [ 'scss/app.scss' ]
        }
      }
    },

    watch: {
      emberTemplates: {
        files: 'public/js/templates/**/*.hbs',
        tasks: ['emberTemplates']
      },
      sass: {
        files: 'scss/**/*.scss',
        tasks: ['sass']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-ember-templates');

  // Default task(s).
  grunt.registerTask('default', ['emberTemplates', 'sass']);
};
