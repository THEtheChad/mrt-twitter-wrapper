Package.describe({
  summary: 'Twitter API Client'
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
