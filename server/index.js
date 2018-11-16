const config = require('config');

const reactApp = require('./react');
const apolloApp = require('./apollo');

// start frontend server
reactApp.listen(config.get('ports.website'));

// start graphql api server
apolloApp.listen(config.get('ports.api'));
