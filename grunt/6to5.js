var task = {
  tasks: {
    options: {
      sourceMap: true
    },
    dist: {
      files: {
        'dist/app.min.js': ['src/**/*.js']
      }
    }
  }
};

module.exports = task;