function submitDataCall() {
  var ss        = SpreadsheetApp.getActiveSpreadsheet();
  var formSS    = ss.getSheetByName("Form"); //Form Sheet
  var datasheet = ss.getSheetByName("Data"); //Data Sheet
  
  //Input Valu
  var cell="toto";
  var values = [[formSS.getRange("K18").getValue(),
                 formSS.getRange("D12").getValue(),
                 formSS.getRange("D14").getValue(),
                 formSS.getRange("D16").getValue(),
                 formSS.getRange("D18").getValue(),
                 formSS.getRange("C21").getValue(),
                 formSS.getRange("D21").getValue(),
                 formSS.getRange("G21").getValue(),
                 formSS.getRange("C23").getValue(),
                 formSS.getRange("D23").getValue(),
                 formSS.getRange("G23").getValue(),
                 formSS.getRange("C25").getValue(),
                 formSS.getRange("D25").getValue(),
                 formSS.getRange("G25").getValue(),
                 formSS.getRange("O6").getValue(),
                 formSS.getRange("AC4").getValue()]];
  
  formSS.getRange(formSS.getLastRow()+1, 3, 1, 16).setValues(values);
}  

/*function CopyVisitID() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var form = ss.getSheets()[0];
  var cell = form.getRange(form.getLastRow()+0, 3, 1, 1);
   cell.setFormula("=LEFT(D12)&LEFT(D14)&LEFT(D16)&LEFT(D18)&LEFT(O7,5)");  
 }                         
*/

function remove(){
  var app = SpreadsheetApp;
  var activesheet = app.getActiveSpreadsheet().getActiveSheet()
  activesheet.getRange("D12:G18").clearContent()
  activesheet.getRange("C21:I28").clearContent()
  }

function Savecall() {
  submitDataCall();
  remove();
}
