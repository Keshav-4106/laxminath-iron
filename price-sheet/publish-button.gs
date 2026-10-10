// Google Apps Script for the price sheet: adds a "Website" menu with "Publish prices now".
// Setup: Extensions → Apps Script → paste this file → Project Settings → Script Properties →
// add DEPLOY_HOOK_URL = the Cloudflare Pages deploy hook URL. Reload the sheet.

function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu("Website")
    .addItem("Publish prices now", "publishPrices")
    .addToUi();
}

function publishPrices() {
  const ui = SpreadsheetApp.getUi();
  const hook = PropertiesService.getScriptProperties().getProperty("DEPLOY_HOOK_URL");
  if (!hook) {
    ui.alert("DEPLOY_HOOK_URL is not set. Add it in Apps Script → Project Settings → Script Properties.");
    return;
  }
  const answer = ui.alert(
    "Publish prices",
    "Have you waited about 5 minutes since your last edit? Google needs that long to update the published sheet.",
    ui.ButtonSet.YES_NO
  );
  if (answer !== ui.Button.YES) return;

  const response = UrlFetchApp.fetch(hook, { method: "post", muteHttpExceptions: true });
  if (response.getResponseCode() < 300) {
    ui.alert("Website rebuild started. New prices should be live in about 2 minutes.");
  } else {
    ui.alert("The rebuild request failed (HTTP " + response.getResponseCode() + "). Try again, or check Cloudflare.");
  }
}
