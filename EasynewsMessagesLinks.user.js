// ==UserScript==
// @name        Easynews Messages Links
// @namespace   ligature.me
// @description Re-writes the links to Global5.
// @author      Bryan Creel
// @grant       none
// @homepageURL https://github.com/scytalezero/EasynewsMessagesLinks
// @updateURL   https://github.com/scytalezero/EasynewsMessagesLinks/raw/master/EasynewsMessagesLinks.user.js
// @downloadURL https://github.com/scytalezero/EasynewsMessagesLinks/raw/master/EasynewsMessagesLinks.user.js
// @icon        https://pbs.twimg.com/profile_images/479627852757733376/8v9zH7Yo_normal.jpeg
// @include     https://*.easynews.com/edit/messages.phtml*
// @include     https://account.easynews.com/messages.php*
// @version     1.3
// ==/UserScript==

$link = $("pre > a");
url = $link.attr("href");
url = "https://members.easynews.com/global5/index.html" + url.substring(url.indexOf("?"));
$link.attr("href", url).css("border", "2px solid green");
