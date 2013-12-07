Package.describe({
  summary: 'Server side nodejs twit wrapper'
});

Npm.depends({
  twit: '1.1.9'
});

Package.on_use(function(api){
  if(api.export){
    api.export('Twitter');
  }
  api.add_files('main.js', 'server');
});
