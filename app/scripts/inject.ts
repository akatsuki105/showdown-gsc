const extensionID = chrome.i18n.getMessage('@@extension_id');
const seDir = `chrome-extension://${extensionID}/images/se/`;
const musicDir = `chrome-extension://${extensionID}/images/music/`;

export const injectSEDir = () => {
    const th = document.getElementsByTagName('body')[0];
    const s = document.createElement('script');
    s.textContent = `const seDir = "${seDir}"`;
    return th.appendChild(s);
};

export const injectMusicDir = () => {
    const th = document.getElementsByTagName('body')[0];
    const s = document.createElement('script');
    s.textContent = `const musicDir = "${musicDir}"`;
    return th.appendChild(s);
};