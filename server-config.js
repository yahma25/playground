import fs from 'fs';

/**
 * Get a local config file for the security
 */
module.exports = JSON.parse(fs.readFileSync('./config/api-config.json'));
