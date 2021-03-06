// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import * as path from 'path';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "suddenly-muscle-training" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const videoIdList = [
		'HF7H6M4nzNY',
		's4jzFWoRRA0',
		'jK_8IgcgBHo',
		'vJ_NBi0YuPM',
		'yqQM3qPoQsk',
		'MHwzwXPzIzI',
		'MByVZoPO6Ds',
	];

	const gif_base64 = 'data:image/gif;base64,R0lGODlhiACDAMQfAPv17WhmZN+2jvOdMPbCiPvXrfnr2/SoS/e3a9nW1be1tJmYmImKiayqqaqIbIdyZBAMCvzhw6KhoLGdjcGYc9SqgpGPjtDEutSTTVNIQ8C/vjM0NPnImPKUGf///////yH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTRDNDVDQjc2MTU1MTFFOTg1QkFDMUI5Q0NEODJCQzYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTRDNDVDQjg2MTU1MTFFOTg1QkFDMUI5Q0NEODJCQzYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFNEM0NUNCNTYxNTUxMUU5ODVCQUMxQjlDQ0Q4MkJDNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFNEM0NUNCNjYxNTUxMUU5ODVCQUMxQjlDQ0Q4MkJDNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0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';

	const getRandomInt = (max :number) => {
		return Math.floor(Math.random() * Math.floor(max));
	};

	let printDate = function () {
		const rand = getRandomInt(20);
		if(rand !== 1) {
			return;
		}

		const index = getRandomInt(videoIdList.length);
		const videoId = videoIdList[index];

		const panel = vscode.window.createWebviewPanel(
			'Muscle Training',
			'Muscle Training',
			vscode.ViewColumn.Active,
			{
				localResourceRoots: [vscode.Uri.file(path.join(context.extensionPath, 'media'))]
			}
			);
			panel.webview.html = `
			<h1>Muscle Training Time!!!</h1>
			<h2>Click <a style="font-size: 32px" href="https://www.youtube.com/watch?v=${videoId}">This</a> and Open Youtube Video!</h2>
			<img width="300px" src="${gif_base64}" />
			`;
		
	};

	const MS_PER_MIN = 1000 * 60;
	const intervalMinute = 30;

	setInterval(printDate, MS_PER_MIN * intervalMinute);

}
// this method is called when your extension is deactivated
export function deactivate() {}
