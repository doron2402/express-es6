var task = {
  dist : {
    src: ['models/*.js', 'controllers/*.js', 'index.js', 'test/**/*.js'],
    options: {
      destination: 'doc'
    }
  }
};

module.exports = task;
