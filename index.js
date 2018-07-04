const mri = require("mri");
const pshell = require("pshell").context({ echoCommand: false });
const ora = require("ora");
const fs = require("fs");

const options = mri(process.argv.slice(2));

const [cmd, directory] = options._;

if (cmd === "install") {
  const spinner = ora(`Installing template...`).start();

  pshell(`cp -r template ${directory}`)
    .then(res => spinner.succeed("Done."))
    .catch(res => spinner.fail(`Error: ${res.message}`));

  return;
}

if (cmd === "start") {
  pshell(`yarn storybook`, { echoCommand: false });
  return;
}

if (cmd === "build") {
  //   pshell(`yarn rollup --config rollup.config.js`).then(() => )
  return;
}
