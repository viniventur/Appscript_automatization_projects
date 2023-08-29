function enviarcontratos() {

  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getActiveSheet();
  
  var dados = sheet.getRange(2, 2, sheet.getLastRow(), 5);
  var clientes = dados.getValues();
  var clientes_true = []
  
  for (var i = 0; i < clientes.length; i++){
    if (clientes[i][4] === true) {
      clientes_true.push(clientes[i]);
    }
  }

  var mail = MailApp;
  var drive = DriveApp;

  for (var i = 0; i < clientes_true.length; i++){

    var arquivoQueEuQueroEnviar = drive.getFileById(clientes_true[i][3])
    
    mail.sendEmail(clientes_true[i][1],"Contrato - Virtus", "Olá, "+clientes_true[i][0]+"! Tudo bem?\nSegue o contrato em anexo.", 
    {attachments: [arquivoQueEuQueroEnviar.getAs(MimeType. PDF)],name: 'Contrato - '+clientes_true[i][0]})
  
  }
}
