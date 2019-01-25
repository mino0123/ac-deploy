const { writeFileSync } = require('fs');

const js = `({func: function () {${`;`.repeat(34225)}}})`;

writeFileSync(`force-app/main/default/aura/acDeploy/acDeployController.js`, js, 'utf8');
