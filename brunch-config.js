exports.files = {
  javascripts: {
    joinTo: 'app.js',
  },
  stylesheets: {
    joinTo: 'app.css',
    order: {
      before: ['app/styles/reset.css']
    }
  },
};

exports.plugins = {
  babel: {
    presets: ['env', 'react'],
    plugins: ['transform-object-rest-spread']
  }
};
