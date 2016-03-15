Package.describe({
  name: 'emgee:libphonenumber',
  summary: '[DEPRECATED] (wrapper) Library for parsing, formatting, storing and validating international phone numbers',
  version: '1.0.15',
  git: 'https://github.com/emgee3/meteor-libphonenumber.git'
});

Npm.depends({ 'google-libphonenumber' : '1.0.15' });

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('emgee:libphonenumber.js', 'server');
  api.export('LibPhoneNumber', 'server');
});
