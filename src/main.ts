import * as core from '@actions/core';
import * as fs from 'fs';
import * as path from 'path';

async function run(): Promise<void> {
  try {
    const file1Path: string = core.getInput('file1');
    const file2Path: string = core.getInput('file2');

    const file1Content: object = JSON.parse(fs.readFileSync(path.resolve(file1Path), 'utf8'));
    const file2Content: object = JSON.parse(fs.readFileSync(path.resolve(file2Path), 'utf8'));

    const areEqual: boolean = JSON.stringify(file1Content) === JSON.stringify(file2Content);

    core.setOutput('areEqual', areEqual.toString());
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
