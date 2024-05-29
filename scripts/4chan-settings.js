// ==UserScript==
// @name            Auto Insert 4Chan Settings
// @namespace       Auto Insert 4Chan Settings
// @match           *://boards.4chan.org/*
// @grant           none
// @version         1.0
// @author          Alfredo3232
// @description     This creates cookies of my settings on your browser when you visit 4chan, this is meant to increase privacy by not having cookies always on your machine.
// @license         GPL-3.0
// @homepageURL     https://github.com/Alfredo3232/webScripts
// @supportURL      https://github.com/Alfredo3232/webScripts/issues
// @compatible      firefox
// @compatible      librewolf
// ==/UserScript==

let createCookie = () => {
    if (document.cookie.includes("nws_style=Tomorrow")) return;

    document.cookie = "ws_style=Tomorrow";
};

let createLocalStorageItem = () => {
    if (localStorage.getItem("4chan-settings")) return;

    localStorage.setItem("4chan-settings", `
        {
            "quotePreview"          :true,
            "backlinks"             :true,
            "quickReply"            :true,
            "threadUpdater"         :true,
            "threadHiding"          :true,
            "alwaysAutoUpdate"      :false,
            "topPageNav"            :false,
            "threadWatcher"         :false,
            "threadAutoWatcher"     :false,
            "imageExpansion"        :true,
            "fitToScreenExpansion"  :true,
            "threadExpansion"       :true,
            "alwaysDepage"          :false,
            "localTime"             :true,
            "stickyNav"             :false,
            "keyBinds"              :false,
            "inlineQuotes"          :true,
            "showNWSBoards"         :true,
            "filter"                :false,
            "revealSpoilers"        :false,
            "imageHover"            :false,
            "threadStats"           :true,
            "IDColor"               :true,
            "noPictures"            :false,
            "embedYouTube"          :true,
            "embedSoundCloud"       :true,
            "updaterSound"          :true,
            "customCSS"             :false,
            "autoScroll"            :false,
            "hideStubs"             :false,
            "compactThreads"        :false,
            "centeredThreads"       :false,
            "dropDownNav"           :false,
            "autoHideNav"           :false,
            "classicNav"            :false,
            "fixedThreadWatcher"    :false,
            "persistentQR"          :false,
            "forceHTTPS"            :true,
            "darkTheme"             :true,
            "linkify"               :true,
            "unmuteWebm"            :false,
            "disableAll"            :false,
            "customMenu"            :false,
            "imageHoverBg"          :false
        }
    `);
};

createCookie();
createLocalStorageItem();