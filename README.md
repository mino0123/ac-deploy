
https://github.com/mino0123/lwc-slow-deploy との比較用。同じサイズのJavaScriptを持つAuraComponentをデプロイ。

## Generate

- $ `node make-ac.js`

## Deploy

- $ `time sfdx force:source:push`

```
=== Pushed Source
STATE  FULL NAME                       TYPE                  PROJECT PATH
─────  ──────────────────────────────  ────────────────────  ──────────────────────────────────────────────────────────
Add    acDeploy/acDeploy.auradoc       AuraDefinitionBundle  force-app/main/default/aura/acDeploy/acDeploy.auradoc
Add    acDeploy/acDeploy.cmp           AuraDefinitionBundle  force-app/main/default/aura/acDeploy/acDeploy.cmp
Add    acDeploy/acDeploy.cmp           AuraDefinitionBundle  force-app/main/default/aura/acDeploy/acDeploy.cmp-meta.xml
Add    acDeploy/acDeploy.css           AuraDefinitionBundle  force-app/main/default/aura/acDeploy/acDeploy.css
Add    acDeploy/acDeploy.design        AuraDefinitionBundle  force-app/main/default/aura/acDeploy/acDeploy.design
Add    acDeploy/acDeploy.svg           AuraDefinitionBundle  force-app/main/default/aura/acDeploy/acDeploy.svg
Add    acDeploy/acDeployController.js  AuraDefinitionBundle  force-app/main/default/aura/acDeploy/acDeployController.js
Add    acDeploy/acDeployHelper.js      AuraDefinitionBundle  force-app/main/default/aura/acDeploy/acDeployHelper.js
Add    acDeploy/acDeployRenderer.js    AuraDefinitionBundle  force-app/main/default/aura/acDeploy/acDeployRenderer.js
        4.74 real         2.31 user         0.37 sys
```
