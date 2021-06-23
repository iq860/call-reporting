function doGet(e) {
  if(e.parameter.mode==null){return ContentService.createTextOutput("error, wrong request").setMimeType(ContentService.MimeType.TEXT)};
  var coord = e.parameter.coord;
  var mode = e.parameter.mode;
  var value = e.parameter.value;
  var ss = SpreadsheetApp.openById('1DvmFeqkf0JpV3NE_kFnwNyDQIjAVdbyDLeCm_chjr1s');
  var sh = ss.getSheetByName(e.parameter.sN);
  if(mode=='r'){
    var sheetValue =  JSON.stringify(sh.getRange(coord).getValue());
    var valToReturn = ContentService.createTextOutput(sheetValue).setMimeType(ContentService.MimeType.JSON);
    return valToReturn;
    }
  if(mode=='w'){
    sh.getRange(coord).setValue(value);
    return ContentService.createTextOutput(value).setMimeType(ContentService.MimeType.JSON);
    }
  return ContentService.createTextOutput('error').setMimeType(ContentService.MimeType.TEXT);
}
