document.querySelector('button').addEventListener('click', function() {
    const botToken = document.getElementById('botToken').value;
    window.chrome.webview.postMessage(`botToken:${botToken}`);
});