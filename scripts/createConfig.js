const fs = require('fs');
const path = require('path');

const config = {
    domain: process.env.AUTH0_DOMAIN,
    clientId: process.env.AUTH0_CLIENT_ID,
    audience: process.env.AUTH0_AUDIENCE
};

fs.writeFileSync(path.join(__dirname, '../client/src/auth_config.json'), JSON.stringify(config, null, 2));
