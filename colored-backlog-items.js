// ==UserScript==
// @name         colored backlog items
// @namespace    *
// @version      0.5
// @description  backlog items in jira backlog view will receive the colors of item states as background colors
// @author       Simon Flachs
// @homepage     https://www.simonflachs.de
// @match        https://*.atlassian.net/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at       document-idle
// ==/UserScript==

(function() {
    'use strict';

    let jsIssues = document.getElementsByClassName('js-issue')

    var style
    var bgColor
    for (var i = 0; i < jsIssues.length; i++) {
        var issue = jsIssues[i]

        var grabbers = issue.getElementsByClassName('ghx-grabber')
        var endDivs = issue.getElementsByClassName('ghx-end')
        for (var j = 0; j < grabbers.length; j++) {

            style = window.getComputedStyle(grabbers[j])
            bgColor = style.backgroundColor;
            console.log("bg color")
            console.log(bgColor)
            issue.style.backgroundColor = bgColor

            for (var x = 0; x < endDivs.length; x++) {
                endDivs[x].style.backgroundColor = bgColor
            }
        }
    }
})();