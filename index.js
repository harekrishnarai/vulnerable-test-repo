const axios = require('axios');
const _ = require('lodash');
const moment = require('moment');
const semver = require('semver');
const tar = require('tar');

console.log('Vulnerable Test Application');
console.log('===========================');

// Using vulnerable axios (0.21.0 - CVE-2020-28168)
console.log('Axios version:', require('axios/package.json').version);

// Using vulnerable lodash (4.17.20 - CVE-2020-28500)
console.log('Lodash version:', require('lodash/package.json').version);

// Using vulnerable moment (2.29.1 - CVE-2022-24785)
console.log('Moment version:', require('moment/package.json').version);

// Using vulnerable semver (7.5.1 - CVE-2022-25883)
console.log('Semver version:', require('semver/package.json').version);

// Using vulnerable tar (6.1.6 - CVE-2021-37701)
console.log('Tar version:', require('tar/package.json').version);

console.log('\nThis application contains several vulnerable dependencies:');
console.log('- axios 0.21.0 (SSRF vulnerability)');
console.log('- lodash 4.17.20 (ReDoS vulnerability)');
console.log('- moment 2.29.1 (Path traversal vulnerability)');
console.log('- semver 7.5.1 (ReDoS vulnerability)');
console.log('- tar 6.1.6 (Arbitrary file overwrite vulnerability)');
console.log('\nDevDependencies also contain vulnerabilities:');
console.log('- braces 3.0.2 (Memory exhaustion)');
console.log('- micromatch 4.0.7 (ReDoS)');
console.log('- ini 1.3.5 (Prototype pollution)');
console.log('- netmask 1.0.6 (IP validation bypass)');
console.log('\nRun AutoPatch CLI to fix these vulnerabilities!');
