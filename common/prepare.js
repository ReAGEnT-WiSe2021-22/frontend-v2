#!/bin/node

/**
 * Prepare all modules
 */

const { execSync } = require("child_process");

const { copySync } = require("fs-extra");
const { resolve } = require("path");

const { CLONE_V1, BUILD_V1, CLEANUP_V1, BUILD_V2, MOVE_V2, MOVE_V1 } =
  process.env;

const eval = (str) => str === "true";

const VARS = {
  CLONE_V1: CLONE_V1 ? eval(CLONE_V1) : true,
  BUILD_V1: BUILD_V1 ? eval(BUILD_V1) : true,
  MOVE_V1: MOVE_V1 ? eval(MOVE_V1) : true,
  CLEANUP_V1: CLEANUP_V1 ? eval(CLEANUP_V1) : true,
  BUILD_V2: BUILD_V2 ? eval(BUILD_V2) : true,
  MOVE_V2: MOVE_V2 ? eval(MOVE_V2) : true,
};

if (VARS.BUILD_V2) {
  console.log("Building frontend-v2 module....");
  execSync(`yarn build:all`);
}

if (VARS.MOVE_V2) {
  console.log("Moving frontend-v2 module to backend directory....");
  const source = resolve("./packages/container/build");
  const destination = resolve("./packages/backend/frontends/frontend-v2");
  copySync(source, destination, { overwrite: true });
  console.log("Moved!");
}

if (VARS.CLONE_V1) {
  console.log("Cloning frontend-v1....");
  execSync(
    `git clone https://github.com/ReAGEnT-WiSe2021-22/ReAgentFrontEnd.git frontend-v1`
  );
}

if (VARS.BUILD_V1) {
  console.log("Building frontend-v1....");
  execSync(
    `cd ./frontend-v1/Client && npm i && SKIP_PREFLIGHT_CHECK=true npm run build`
  );
}

if (VARS.MOVE_V1) {
  console.log("Moving frontend-v1 module to backend directory....");
  const source = resolve("./frontend-v1/Client/build");
  const destination = resolve("./packages/backend/frontends/v1");
  copySync(source, destination, { overwrite: true });
  console.log("Moved!");
}

if (VARS.CLEANUP_V1) {
  console.log("Cleaning up....");
}
