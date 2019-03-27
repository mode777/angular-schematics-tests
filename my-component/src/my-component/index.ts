import { Rule, SchematicContext, Tree, externalSchematic, chain } from '@angular-devkit/schematics';

const licenseText = `
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
`;

function createMySchematic(options: any) {
  return (tree: Tree, _context: SchematicContext) => {
    
    tree.getDir(options.sourceDir)
      .visit(file => {
        console.log(file);

        // only add license to typescript file
        if(!file.endsWith('.ts'))
          return;

        // read file as text
        const content = tree.read(file);

        // prepend license text and overwrite file with new content
        tree.overwrite(file, licenseText + content);
      });
    return tree;
  };
}

// You don't have to export the function as default. You can also have more than one rule factory
// per file.
export function myComponent(_options: any): Rule {
  var chainArgs = [
    externalSchematic('@schematics/angular', 'component', _options),
    createMySchematic(_options)
  ];
  return chain(chainArgs);
}
