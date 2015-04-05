// Set the require.js configuration for the application
// This paths get appended to by `grunt bower`. The map
// is there so that calls to underscore resolve to lodash.
require.config({
  baseUrl: '/wp-content/themes/grigio/assets/scripts',
  stubModules: [
    'text'
  ],
  map: {
    '*': {
      underscore: 'lodash'
    }
  },
  shim : {
    bootstrap : { "deps" :['jquery'] }
  },
  paths: {
    jquery: 'empty:',
    bkwld: 'bower_components/bkwld',
    backbone: 'bower_components/backbone/backbone',
    underscore: 'bower_components/underscore/underscore',
    lodash: 'bower_components/lodash/dist/lodash.compat',
    fastclick: 'bower_components/fastclick/lib/fastclick',
    'requirejs-text': 'bower_components/requirejs-text/text',
    modernizr: 'bower_components/modernizr/modernizr',
    velocity: 'bower_components/velocity/velocity',
    bootstrap: 'bower_components/bootstrap-sass-official/assets/javascripts/bootstrap'
  },
  packages: [

  ]
});

// Start the application
require(['bootstrap', 'modernizr', 'velocity','start']);