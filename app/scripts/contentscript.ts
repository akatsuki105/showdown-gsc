import { makeIconsGen2 } from './icon';
import { injectSEDir, injectMusicDir, injectIntroDir, injectEmbed, injectSelectSE } from './inject';

// const extensionID = chrome.i18n.getMessage('@@extension_id');

const interval = setInterval(function() {
    const teamicons = document.getElementsByClassName('teamicons');
    makeIconsGen2(teamicons);
}, 100);

// SE
injectSEDir();
injectMusicDir();
injectIntroDir();
injectEmbed();
injectSelectSE();
