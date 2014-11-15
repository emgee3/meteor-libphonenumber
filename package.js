Package.describe({
  name: 'emgee:libphonenumber',
  summary: '(wrapper) Library for parsing, formatting, storing and validating international phone numbers',
  version: '0.1.0',
  git: 'https://github.com/emgee3/meteor-libphonenumber.git'
});

Npm.depends({ 'google-libphonenumber' : '0.1.0' });

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.addFiles('emgee:libphonenumber.js', 'server');
  api.export('LibPhoneNumber', 'server');
});
