function qbonus() {
  
  // questao bonus
  var spread = SpreadsheetApp.getActive();
  var ss = spread.getSheetByName('Projetos Base');
  var inter_registro = ss.getRange('B3:Q3');
  var inter_base = ss.getRange('B6:Q6');
  var proj_reg = ss.getRange('E3').getValue()
  var proj_base = ss.getRange('E6:E').getValues();
  var proj_base = proj_base.flat();


  if (proj_base.indexOf(proj_reg) < 0) {

    ss.insertRowBefore(6);
    inter_registro.copyTo(inter_base);
    inter_registro.clear({contentsOnly: true});

    var inter_data = ss.getRange('F1');
    var data = Utilities.formatDate(new Date(), 'GMT-3', 'dd/mm/yyyy HH:mm:ss');
    inter_data.setValue(data);
  
  } else if (proj_base.indexOf(proj_reg) >= 0) {
    SpreadsheetApp.getUi().alert('Projeto já consta na base');

  }
}

function atualizas() {
  var spread = SpreadsheetApp.getActive();
  var ss = spread.getSheetByName('Projetos Base');
  var data_ref = ss.getRange("O1").getDisplayValue()
  var ref = ss.getRange("P8").getDisplayValue()
  var inter_datas = ss.getRange(6, 16, ss.getLastRow(), 1).getDisplayValues()
  var datas_validas = []

  for (i = 0; i < inter_datas.length; i++) {
    if (inter_datas[i] > data_ref) {
      datas_validas.push(inter_datas[i])
    }
  }

  Logger.log(datas_validas)


}

