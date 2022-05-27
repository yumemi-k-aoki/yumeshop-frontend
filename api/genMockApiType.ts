import path from 'path';
import fs from 'fs';
import { CodeGenerator } from '@himenon/openapi-typescript-code-generator';

const codeTemplate = (source: string) => `
/* eslint-disable @typescript-eslint/no-namespace */

${source}
`;

const main = () => {
  const codeGenerator = new CodeGenerator(
    path.resolve(__dirname, './openapi.yml'),
  );
  const code = codeTemplate(codeGenerator.generateTypeDefinition());
  fs.writeFileSync(path.resolve(__dirname, '../src/types/api.ts'), code, {
    encoding: 'utf-8',
  });

  console.log('Generate demo1');
};

main();
