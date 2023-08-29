function salvar_anexos_gmail() {

  var mail = GmailApp;
  var drive = DriveApp;
  //var threads = mail.getInboxThreads();
  var data = Utilities.formatDate(new Date(), "GMT-3", "dd/MM/yyyy");
  var threads = mail.search("after:"+data+" has:attachment");
  
  var nome_pasta_hoje = 'Anexos dos emails - '+data
  drive.createFolder(nome_pasta_hoje)
  var pasta_hoje = drive.getFoldersByName(nome_pasta_hoje).next();

  for (t = 0; t < threads.length; t++) {
    
    // loop da thread
    var thread = threads[t];
    var nome_1_msg = thread.getFirstMessageSubject();
    pasta_hoje.createFolder(nome_1_msg);
    pasta_thread = drive.getFoldersByName(nome_1_msg).next();
    var t_msgs = thread.getMessages();

    for (m = 0; m < t_msgs.length; m++) {
      
      // loop da message
      var msg = t_msgs[m];
      var m_anexos = msg.getAttachments();

      for (a = 0; a < m_anexos.length; a++) {
        
        // loop do anexo
        var anexo = m_anexos[a];

        pasta_thread.createFile(anexo.copyBlob().setName(anexo.getName()).setContentType('application/pdf'))
      
      }    
    }
  }
}
