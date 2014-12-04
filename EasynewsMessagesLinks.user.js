// ==UserScript==
// @name        Easynews Messages Links
// @namespace   ligature.me
// @description Re-writes the links to Global5.
// @author      Bryan Creel
// @homepageURL https://github.com/scytalezero/EasynewsMessagesLinks
// @updateURL   
// @include     https://*.easynews.com/edit/messages.phtml*
// @require     https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js
// @version     1.0
// ==/UserScript==

$link = $("pre > a");
url = $link.attr("href");
url = "https://members.easynews.com/global5/index.html" + url.substring(url.indexOf("?"));
$link.attr("href", url).css("border", "2px solid green");
