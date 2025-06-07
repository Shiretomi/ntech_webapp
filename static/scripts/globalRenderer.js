document.addEventListener("DOMContentLoaded", () => {
    const buttonMain = document.getElementById('toMain');
    buttonMain?.addEventListener("click", () => {
        window.tabs.switchPage('mainPage');
    });
    const buttonScripts = document.getElementById('toScripts');
    buttonScripts.addEventListener("click", () => {
        window.tabs.switchPage('scripts');
    });
})