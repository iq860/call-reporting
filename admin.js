function doGet(e) {
  if(e.parameter.mode==null){return ContentService.createTextOutput("error, wrong request").setMimeType(ContentService.MimeType.TEXT)};
  var coord = e.parameter.coord;
  var mode = e.parameter.mode;
  var value = e.parameter.value;
  var ss = SpreadsheetApp.openById('180LGyCh2JAS4KiT8BcIpKGVRPSaYbO9MJM4EeDFNJCA');
  var sh = ss.getSheetByName(e.parameter.sN);
  //var coord = JSON.stringify(e.parameter.coord);
  if(mode=='r'){
    var sheetValue =  JSON.stringify(sh.getRange(1,1,3,3).getValues());
    var valToReturn = ContentService.createTextOutput(sheetValue).setMimeType(ContentService.MimeType.TEXT);
    return valToReturn;
    }
  if(mode=='w'){
    sh.getRange(1,1).setValue(value);
    return ContentService.createTextOutput(value).setMimeType(ContentService.MimeType.JSON);
    }
  return ContentService.createTextOutput('error').setMimeType(ContentService.MimeType.TEXT);
}
