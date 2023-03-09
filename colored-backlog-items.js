// ==UserScript==
// @name         colored backlog items
// @namespace    *
// @version      0.6
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

    // list of backlog items
    let jsIssues = document.getElementsByClassName('js-issue')

    var style
    var bgColor
    for (var i = 0; i < jsIssues.length; i++) {
        var issue = jsIssues[i]

        // this element holds the issue state color
        var grabbers = issue.getElementsByClassName('ghx-grabber')
        var endDivs = issue.getElementsByClassName('ghx-end')
        for (var j = 0; j < grabbers.length; j++) {

            style = window.getComputedStyle(grabbers[j])
            bgColor = style.backgroundColor;
            console.log("bg color")
            console.log(bgColor)

            // set the issue state color to the whole backlog item element
            // issue.style.backgroundColor = bgColor
            issue.style.background = "linear-gradient(to right, "+bgColor+" , white, white)";

            //for (var k = 0; k < endDivs.length; k++) {
                // set background color of the element that shows issue nmber and assignee
                //endDivs[k].style.backgroundColor = bgColor
            //}
        }
    }
})();