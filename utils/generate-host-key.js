const { utils: { generateKeyPairSync } } = require('ssh2');
const fs = require('fs');

module.exports = () => {
    let keys = generateKeyPairSync('ed25519');

    fs.writeFileSync('host.key', keys.private);
};
