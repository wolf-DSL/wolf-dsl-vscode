'use strict';

import * as path from 'path';
import * as os from 'os';

import {Trace} from 'vscode-jsonrpc';
import { commands, window, workspace, ExtensionContext, Uri } from 'vscode';
import { LanguageClient, LanguageClientOptions, ServerOptions } from 'vscode-languageclient/node';

let lc: LanguageClient;

export function activate(context: ExtensionContext) {
    // The server is a locally installed in src
    let absolutePathSh = context.asAbsolutePath(path.join('src', "server.sh"));
    let absolutePathJar = context.asAbsolutePath(path.join('src', "language-server.jar"));

    let serverOptions: ServerOptions = {
        debug : { command: absolutePathSh, args: [ absolutePathJar ] },
        run: { command: absolutePathSh, args: [ absolutePathJar ], options: { env: createDebugEnv() } }
    };
    
    let clientOptions: LanguageClientOptions = {
        documentSelector: ['wolf-dsl'],
        synchronize: {
            fileEvents: workspace.createFileSystemWatcher('**/*.*')
        }
    };
    // Create the language client and start the client.
    lc = new LanguageClient('Wolf DSL Language Server', serverOptions, clientOptions, true);

    var disposable2 =commands.registerCommand("wolf-dsl.a.proxy", async () => {
        let activeEditor = window.activeTextEditor;
        if (!activeEditor || !activeEditor.document || activeEditor.document.languageId !== 'wolf-dsl') {
            return;
        }

        if (activeEditor.document.uri instanceof Uri) {
            commands.executeCommand("wolf-dsl.a", activeEditor.document.uri.toString());
        }
    })
    context.subscriptions.push(disposable2);
    
    // enable tracing (.Off, .Messages, Verbose)
    lc.setTrace(Trace.Verbose);
    lc.start();
}
export function deactivate() {
    return lc.stop();
}
function createDebugEnv() {
    return Object.assign({
        JAVA_OPTS:"-Xdebug -Xrunjdwp:server=y,transport=dt_socket,address=8000,suspend=n,quiet=y"
    }, process.env)
}