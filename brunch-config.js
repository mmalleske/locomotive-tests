module.exports = {
  files: {
    javascripts: {
      entryPoints: {
        // --- JS THEME FILE BELOW - DO NOT REMOVE THIS LINE
        'app/themes/test/frontend/javascripts/main.es6': 'themes/test/frontend.js',
    

        'app/site_builder/app.es6': 'site_builder/app.js',
        'app/site_builder/client.es6': 'site_builder/client.js'
      }
    },
    stylesheets: {
      joinTo: {
        // --- CSS THEME FILE BELOW - DO NOT REMOVE THIS LINE
        'themes/test/frontend.css': /^app\/themes\/test\/frontend\/stylesheets/,
        

        'site_builder/app.css': /^app\/site_builder\/stylesheets/
      },
      order: {
        before: []
      }
    }
  },

  plugins: {
    babel: {
      babelrc: true,
      pattern: /\.(es6|jsx)$/,
      ignore: [/^(assets|node_modules)/],
      presets: ['es2015', 'react']
    },
    sass: {
      mode: 'native',
      options: {
        includePaths: [
          'bower_components/bootstrap-sass-official/assets/stylesheets/'
        ]
      }
    }
  },

  hooks: {
    preCompile: function(cb) {
      var execSync = require('child_process').execSync;
      console.log(execSync('locomotive build').toString());
      cb();
    },
  }

};
