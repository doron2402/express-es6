'use strict';

module.exports = function(grunt) {
  // Automatically load in all Grunt npm tasks
  require('load-grunt-config')(grunt);

  // default - Register tasks
  grunt.registerTask('default', ['build','jshint']);
  grunt.registerTask('build', ['jshint', 'validate-shrinkwrap', 'xbuild:spark-to-js', 'shell:spark-to-js']);
  grunt.registerTask('test', ['build', 'labTest']);
  grunt.registerTask('tasks', ['availabletasks']);
  grunt.registerTask('start', ['build', 'nodemon:dev']);
};
