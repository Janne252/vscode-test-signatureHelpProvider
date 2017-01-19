'use strict';

import {ExtensionContext, languages} from 'vscode';
import SignatureHelpProvider from './signatureHelpProvider';

export function activate(context: ExtensionContext) 
{
    context.subscriptions.push(languages.registerSignatureHelpProvider('plaintext', new SignatureHelpProvider()));
}

export function deactivate() 
{

}