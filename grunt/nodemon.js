module.exports = {
  options: {
    ignore: ['node_modules/**', '.git'],
    ext: 'js,css,html',
    watch: ['adapters', 'controllers', 'models', 'routes', 'validations', 'views', 'public'],
    delay: 1000
  },
  dev: {
    script: 'index.js'
  }
};
