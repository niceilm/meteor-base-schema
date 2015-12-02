Package.describe({
  name: 'flynn:base-schema',
  version: '0.0.5',
  // Brief, one-line summary of the package.
  summary: 'base schema',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.2');
  api.export('BaseSchema');
  api.use('ecmascript');
  api.use('aldeed:simple-schema@1.4.0');
  api.addFiles('base-schema.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('flynn:base-schema');
  api.addFiles('base-schema-tests.js');
});
