'use strict';

module.exports = function(grunt) {
  // Automatically load in all Grunt npm tasks
  require('load-grunt-config')(grunt);

  // default - Register tasks
  grunt.registerTask('default', ['build','jshint','6to5']);
  grunt.registerTask('build', ['jshint']);
  grunt.registerTask('test', ['build']);
  grunt.registerTask('tasks', ['availabletasks']);
  grunt.registerTask('start', ['build', 'nodemon:dev']);
};
