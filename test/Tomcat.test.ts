'use strict';

import * as assert from "assert";
import { DialogMessage } from '../src/DialogMessage';
import { TomcatController } from "../src/Tomcat/TomcatController";
import { TomcatModel } from "../src/Tomcat/TomcatModel";
import { TomcatServer } from "../src/Tomcat/TomcatServer";
import { createUuid } from "vscode-extension-telemetry-wrapper";

suite('Error input', () => {
  const serverInfo: TomcatServer = undefined;
  const tomcatModel: TomcatController = new TomcatController(new TomcatModel(''), undefined);
  test('stopServer', async () => {
    try {
      await tomcatModel.stopOrRestartServer(createUuid(), serverInfo);
      // throw new assert.AssertionError({actual:'Resolve', expected:'Reject'});
    } catch (error) {
      assert.strictEqual(error.toString(), `Error: ${DialogMessage.noServer}`);
    }
  });
  test('runOnServer', async () => {
    try {
      await tomcatModel.runOrDebugOnServer(createUuid(), undefined);
    } catch (error) {
      assert.strictEqual(error.toString(), `Error: ${DialogMessage.noServer}`);
    }
  });
});
