import { awscdk } from "projen";
const project = new awscdk.AwsCdkTypeScriptApp({
  authorEmail: "niko.virtala@hey.com",
  authorName: "Niko Virtala",
  authorUrl: "https://nikovirtala.io",
  cdkVersion: "2.64.0",
  defaultReleaseBranch: "main",
  license: "MIT",
  minNodeVersion: "18.13.0",
  name: "cdk-eventbridge-pipes-demo",
  prettier: true,
  projenrcTs: true,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();
