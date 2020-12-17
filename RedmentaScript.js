// ==UserScript==
// @name     RedmentaScript
// @version  1
// @grant    none
// @match	 https://redmenta.com/*
// ==/UserScript==
function addGlobalStyle(css) {
var head, style;
head = document.getElementsByTagName('head')[0];
if (!head) { return; }
style = document.createElement('style');
style.innerHTML = css;
head.appendChild(style);
}

addGlobalStyle("#content {width: 100%;padding: 40px 5%;min-height: 250px;flex: 1 1 auto;background-color: #121212;color: white;}");
addGlobalStyle(".adatdoboz .fej.nemaktiv {color: white;}");
addGlobalStyle(".folder_head .folder_name {float: left;background: #1d1d1d;padding: 8px;}");
addGlobalStyle(".adatdoboz .content {background-color: #1d1d1d;color: #000;font-size: 11pt;padding: 3px 6px;text-align: center;border: none;}");
addGlobalStyle(".adatdoboz .meta {background: #3a3a3a;color: white;font-size: 10pt;padding: 5px;}");
addGlobalStyle(".metro .fg-green {color: #32cb00 !important;}");
addGlobalStyle(".metro h5 {font-family: segoe ui semibold_,open sans bold,Verdana,Arial,Helvetica,sans-serif;font-weight: 700;color: #a2a2a2;font-size: 1.6rem;line-height: 1.6rem;letter-spacing: .02em;color: #a2a2a2;font-size: 1.4rem;line-height: 1.4rem;}");
addGlobalStyle(".metro h4 {font-family: segoe ui semibold_,open sans bold,Verdana,Arial,Helvetica,sans-serif;font-weight: 700;color: white;font-size: 1.6rem;line-height: 1.6rem;letter-spacing: .02em;}");
addGlobalStyle("#ksKitolt #cime a:hover {color: #f00f0f;}");
addGlobalStyle("#ksKitolt #cime a {color: white;}");
addGlobalStyle("#ksKitoltBack {background: #121212;max-width: 700px;width: 100%;margin: 0 auto;padding-top: 10px;padding-bottom: 20px;color: white;}");
addGlobalStyle(".metro .table th, .metro .table td {padding: 8px;font-size: 14px;line-height: 14pt;vertical-align: top;border-bottom: 1px #444 solid;background-color: #121212;color: white;}");
addGlobalStyle(".metro h2 {font-family: segoe ui light,open sans light,Verdana,Arial,Helvetica,sans-serif;font-weight: 300;color: white;letter-spacing: 0;font-size: 2.5rem;line-height: 2.5rem;letter-spacing: .01em;}");
addGlobalStyle(".eredm .wrong {color: white !important;font-weight: 700;}");
addGlobalStyle(".eredm .kellett {color: white !important;font-weight: 700;}");
addGlobalStyle(".eredm .good {color: white !important;font-weight: 700;}");
addGlobalStyle(".metro div, .metro span, .metro p {font-weight: 400;font-style: normal;color: white;}");
addGlobalStyle(".metro .panel .panel-content {width: 100%;height: auto;padding: 10px;background-color: #313131;color: white;}");
addGlobalStyle("#ksKitolt h3, #ksKitolt h4 {color: white !important;}");
addGlobalStyle(".eredm tr td {padding: 2px 4px;background-color: #3a3a3a;color: white;}");
addGlobalStyle(".jovalasz {font-weight: 400 !important;color: #304ffe !important;font-family: Segoe UI !important;line-height: 11pt !important;font-size: 11pt !important;text-align: justify !important;margin: 5px 5px 0 !important;}");
addGlobalStyle(".eredm .sorrend_label {width: 33% !important;font-weight: 700;border-right: none;padding-bottom: 6px;}");
addGlobalStyle(".matching_table_second_cell {border-right: none;}");
addGlobalStyle("#kitoltesekTablePreview h4, #kitoltesekTablePreview h5, #kitoltesekTablePreview h6 {margin: 0;padding: 0;color: white;}");
addGlobalStyle("#kitoltesekTablePreview tr td {padding: 4px 3px;vertical-align: bottom;background-color: #313131;}");
addGlobalStyle(".folder_item.folder_has_hover:hover {background: #6c6c6c;}");
addGlobalStyle(".folder_item.folder_has_hover {cursor: pointer;background-color: #4f4f4f;}");
addGlobalStyle(".infotextarea {width: 100%;background-color: #484848;color: white;border: none;}");
addGlobalStyle(".metro .fg-black {color: #fff !important;}");
addGlobalStyle(".metro .input-control.text, .metro .input-control.password, .metro .input-control.file, .metro .input-control.email, .metro .input-control.tel {display: inline-block;cursor: pointer;position: relative;background-color: #121212;outline: 0;height: 34px;width: 100%;}");
addGlobalStyle(".feleletvalasztos_valasz {width: 50%;text-align: center;padding: 12px;cursor: pointer;background-color: #dcdcdc;border: 5px solid #121212;font-size: 15pt;display: table-cell;vertical-align: middle;background-color: #1e1e1e;}");
addGlobalStyle("#ksKitolt #lapozas .solving-info {display: flex;align-items: center;background-color: none;padding: 6px 14px 7px;margin: 5px;vertical-align: middle;}");
addGlobalStyle("#ksKitolt #lapozas .solving-info {display: flex;align-items: center;background-color: none;padding: 6px 14px 7px;margin: 5px;vertical-align: middle;}");
addGlobalStyle(".activeValasz, .activeValasz:hover {background-color: #4f92d0;}");
addGlobalStyle(".activeValasz {background-color: blue;}");
addGlobalStyle(".catalogBox {width: 400px;margin: 10px;padding: 10px;border-radius: 4px;border: 1px solid #d4d4d4;background-color: #424242;color: #4c4a6d;display: flex;flex-direction: column;justify-content: space-between;}");
addGlobalStyle(".catalogBoxMeta span {background-color: #5e5e5e;display: inline-block;padding: 2px 4px;margin-bottom: 4px;border-radius: 3px;}");
addGlobalStyle("#ksKitolt #lapozas .solving-info {display: flex;align-items: center;background-color: none;padding: 6px 14px 7px;margin: 5px;vertical-align: middle;}");
document.body.innerHTML += "Dark mode by Redline Design"
