# test-signaturehelp 

## Installation
 - `npm install`
 - Open the root folder in vscode and run the extension

## Testing
- Open/Create a .txt file
- Press Ctrl + Shift + Space to bring up the signature help list

You should see this. Notice the weirdly long parameter name:

![](https://raw.githubusercontent.com/Janne252/vscode-test-signatureHelpProvider/master/images/issue_before.png)

 - Change [line 36 in signatureHelpProvider.ts](https://github.com/Janne252/vscode-test-signatureHelpProvider/blob/master/src/signatureHelpProvider.ts#L36) from 
    `label: "autoDeleteDistance"` to 
    `label: "_autoDeleteDistance"`

 - Relaunch the extension & repeat the **Testing** steps. You should see this. Notice how the weirdly long parameter name is gone:
 
![](https://raw.githubusercontent.com/Janne252/vscode-test-signatureHelpProvider/master/images/issue_after.png)