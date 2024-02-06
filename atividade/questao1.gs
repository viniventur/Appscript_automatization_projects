function q1() {
  
  // questao 1
  var spread = SpreadsheetApp.getActive();
  var ss = spread.getSheetByName('Projetos Base');
  var inter_registro = ss.getRange('B3:Q3');
  var inter_base = ss.getRange('B6:Q6');

  ss.insertRowBefore(6);
  inter_registro.copyTo(inter_base);
  inter_registro.clear({contentsOnly: true});


}
