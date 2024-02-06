function onEdit(event) {
  
  var sheet = event.source.getActiveSheet();
  var sheet_n = SpreadsheetApp.getActive();
  var ui = SpreadsheetApp.getUi();
  var data = Utilities.formatDate(new Date, 'GMT-3', 'dd/MM/yyyy HH:mm:ss');
  var act_range = event.source.getActiveRange();
  var act_row = act_range.getRow();
  var act_column = act_range.getColumn();
  var cel_mod = sheet.getRange(act_row, 17);
  var cel_nota = sheet.getRange(act_row, 16);
  var padraonumerico = /^\d+(\.\d+)?$/;

  if ((act_row >= 6) & (sheet.getName() == 'Projetos Base')) {
    
    cel_mod.setValue(data);
  
    if ((act_column == 2) && act_range.getValue() == 'Pago') {
      
      var input_nota_fis = ui.prompt('Insira o número da nota fiscal:')
      var nota_fis_resp = input_nota_fis.getResponseText()
      var nota_fis_select = input_nota_fis.getSelectedButton() 
      
      if (nota_fis_select == ui.Button.OK) { 
        
        while (padraonumerico.test(nota_fis_resp) == false) {
          
          if (nota_fis_resp == '') {
            ui.alert('Insira algo')
          } else if ((nota_fis_resp != '') && !(padraonumerico.test(nota_fis_resp))) { 
            ui.alert('Insira apenas números.')
          } else if ((nota_fis_resp != '') && (padraonumerico.test(nota_fis_resp))) {
            cel_nota.setValue(nota_fis_resp);
      
          }
          
          var input_nota_fis = ui.prompt('Insira o número da nota fiscal:')
          var nota_fis_resp = input_nota_fis.getResponseText()
      
        } 
        
        cel_nota.setValue(nota_fis_resp);

      } else {
        ui.alert('Nenhuma informação de nota fiscal foi registrada!')
      }
    }
  }   
}
