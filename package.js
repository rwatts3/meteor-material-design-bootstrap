Package.describe({
  name: 'rwatts:material-design-bootstrap',
  version: '4.1.1',
  // Brief, one-line summary of the package.
  summary: 'Material Design Boostrap Packaged for Meteor',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/rwatts3/meteor-material-design-bootstrap',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.4.1.1');
  api.use('ecmascript');
  api.use(['fortawesome:fontawesome@4.5.0','jquery'], 'client');
  api.imply(['jquery'], 'client');

  var assets = [
    '/font/roboto/Roboto-Bold.ttf',
    '/font/roboto/Roboto-Bold.woff',
    '/font/roboto/Roboto-Bold.woff2',
    '/font/roboto/Roboto-Light.ttf',
    '/font/roboto/Roboto-Light.woff',
    '/font/roboto/Roboto-Light.woff2',
    '/font/roboto/Roboto-Medium.ttf',
    '/font/roboto/Roboto-Medium.woff',
    '/font/roboto/Roboto-Medium.woff2',
    '/font/roboto/Roboto-Regular.ttf',
    '/font/roboto/Roboto-Regular.woff',
    '/font/roboto/Roboto-Regular.woff2',
    '/font/roboto/Roboto-Thin.ttf',
    '/font/roboto/Roboto-Thin.woff',
    '/font/roboto/Roboto-Thin.woff2',
  ];

  addAssets(api, assets);

  api.addFiles([
      '/tether.js',
      '/js/mdb.js',
      '/css/mdb.css',
  ], 'client');

});


function addAssets(api, assets){
  if(api.addAssets){
    api.addAssets(assets, 'client');
  } else {
    api.addFiles(assets, 'client', {isAsset: true});
  }
}

});
