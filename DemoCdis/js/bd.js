var db;
        var shortName = 'DemoCdis';
        var version = '1.0';
        var displayName = 'DemoCdis';
        var maxSize = 65535;

        // this is called when an error happens in a transaction
        function errorHandler(transaction, error) {
            alert('Error: ' + error.message + ' code: ' + error.code);
        }

	function successCallBack() {
            //alert("DEBUGGING: success");
        }

	function nullHandler() { }

        function onBodyLoad() {

            
            
            db = openDatabase(shortName, version, displayName, maxSize);



            db.transaction(function(tx){
            tx.executeSql('CREATE TABLE IF NOT EXISTS TipoProveedor(TipoProveedorId INTEGER NOT NULL PRIMARY KEY, Descripcion TEXT NOT NULL)', [],nullHandler,errorHandler);
            },errorHandler,successCallBack);
            
            db.transaction(function(tx){
            tx.executeSql('CREATE TABLE IF NOT EXISTS Departamento(DepartamentoId INTEGER NOT NULL PRIMARY KEY, Descripcion INTEGER NOT NULL)', [],nullHandler,errorHandler);
            },errorHandler,successCallBack);
            //----
            db.transaction(function(tx){
            tx.executeSql('CREATE TABLE IF NOT EXISTS Bodega(BodegaId INTEGER NOT NULL PRIMARY KEY, Descripcion INTEGER NOT NULL)', [],nullHandler,errorHandler);
            },errorHandler,successCallBack);

            db.transaction(function(tx){
            tx.executeSql('CREATE TABLE IF NOT EXISTS Rampa(RampaId INTEGER NOT NULL PRIMARY KEY, Descripcion INTEGER NOT NULL)', [],nullHandler,errorHandler);
            },errorHandler,successCallBack);
            //--------
            db.transaction(function(tx){
            tx.executeSql('CREATE TABLE IF NOT EXISTS EstatusCita(EstatusId INTEGER NOT NULL PRIMARY KEY, Descripcion TEXT NOT NULL )', [],nullHandler,errorHandler);
            },errorHandler,successCallBack);

            db.transaction(function(tx){
            tx.executeSql('CREATE TABLE IF NOT EXISTS EstatusFactura(EstatusId INTEGER NOT NULL PRIMARY KEY, Descripcion TEXT NOT NULL )', [],nullHandler,errorHandler);
            },errorHandler,successCallBack);
            //----------
             db.transaction(function(tx){
            tx.executeSql('CREATE TABLE IF NOT EXISTS Usuario(UsuarioId INTEGER NOT NULL PRIMARY KEY, Usuario TEXT NOT NULL , Contrasena TEXT NOT NULL, Nombre TEXT NOT NULL, Bodega INTEGER NOT NULL, Estatus Integer NOT NULL, FOREIGN KEY(Bodega) REFERENCES Bodega(BodegaId))', [],nullHandler,errorHandler);
            },errorHandler,successCallBack);

             db.transaction(function(tx){
            tx.executeSql('CREATE TABLE IF NOT EXISTS Proveedor(ProveedorId INTEGER NOT NULL PRIMARY KEY, Tipo_de_Proveedor INTEGER NOT NULL, Nombre TEXT NOT NULL, FOREIGN KEY(Tipo_de_Proveedor) REFERENCES TipoProveedor(TipoProveedorId))', [],nullHandler,errorHandler);
            },errorHandler,successCallBack);
             //---------
             db.transaction(function(tx){
             tx.executeSql('CREATE TABLE IF NOT EXISTS Cita(CitaId INTEGER NOT NULL PRIMARY KEY, Folio TEXT NOT NULL, Proveedor INTEGER, Rampa INTEGER, Estatus INTEGER, Bodega INTEGER NOT NULL, Departamento INTEGER NOT NULL, FOREIGN KEY(Proveedor) REFERENCES Proveedor(ProveedorId), FOREIGN KEY(Rampa) REFERENCES Rampa(RampaId),  FOREIGN KEY(ESTATUS) REFERENCES EstatusCita(EstatusId), FOREIGN KEY(Bodega) REFERENCES Bodega(BodegaId), FOREIGN KEY(Departamento) REFERENCES Departamento(DepartamentoId))', [],nullHandler,errorHandler);
             },errorHandler,successCallBack);

            db.transaction(function(tx){
            tx.executeSql('CREATE TABLE IF NOT EXISTS Factura(FacturaId INTEGER NOT NULL PRIMARY KEY, Nombre TEXT NOT NULL, Cita INTEGER NOT NULL, TPMS INTEGER, ESTATUS INTEGER, FOREIGN KEY(Cita) REFERENCES Cita(CitaId),  FOREIGN KEY(ESTATUS) REFERENCES EstatusFactura(EstatusId))', [],nullHandler,errorHandler);
            },errorHandler,successCallBack);

            db.transaction(function(tx){
            tx.executeSql('CREATE TABLE IF NOT EXISTS Producto(Productoid INTEGER NOT NULL PRIMARY KEY, Factura INTEGER NOT NULL, Nombre TEXT NOT NULL, Cantidad INTEGER NOT NULL, Imagen TEXT, ESTATUS INTEGER, FOREIGN KEY(Factura) REFERENCES Factura(FacturaId))', [],nullHandler,errorHandler);
            },errorHandler,successCallBack);

           //DeleteRegister();
           //InsertRegister();
            
        }

         function InsertRegister() {

            db = openDatabase(shortName, version, displayName, maxSize);

            db.transaction(function(tx){
            tx.executeSql('INSERT INTO TipoProveedor(Descripcion) VALUES("Indefinido")', [],nullHandler,errorHandler);
             tx.executeSql('INSERT INTO Departamento(Descripcion) VALUES(1)', [],nullHandler,errorHandler);
             tx.executeSql('INSERT INTO Bodega(Descripcion) VALUES(1)', [],nullHandler,errorHandler);
             tx.executeSql('INSERT INTO Rampa(Descripcion) VALUES(1)', [],nullHandler,errorHandler);
             tx.executeSql('INSERT INTO EstatusCita(Descripcion) VALUES(1)', [],nullHandler,errorHandler);
             tx.executeSql('INSERT INTO EstatusFactura(Descripcion) VALUES("Proceso")', [],nullHandler,errorHandler);
             tx.executeSql('INSERT INTO Usuario(Usuario, Contrasena, Nombre, Bodega, Estatus) VALUES("Angel","12","Angel Diaz Rios",1,0)', [],nullHandler,errorHandler);
             tx.executeSql('INSERT INTO Proveedor(Tipo_de_Proveedor,Nombre) VALUES(1,"Samsung")', [],nullHandler,errorHandler);
             tx.executeSql('INSERT INTO Cita(Folio,Proveedor,Rampa,Estatus,Bodega,Departamento) VALUES("12873065",1,1,1,1,1)', [],nullHandler,errorHandler);
             tx.executeSql('INSERT INTO Factura(Cita,Nombre,TPMS,ESTATUS) VALUES(1,"F00001",0,1)', [],nullHandler,errorHandler);
             tx.executeSql('INSERT INTO Producto(Factura,Nombre,Cantidad,Imagen,ESTATUS) VALUES(1,"Television LED",10,"productos/tel.png",1)', [],nullHandler,errorHandler);

             tx.executeSql('INSERT INTO TipoProveedor(Descripcion) VALUES("Interno")', [],nullHandler,errorHandler);
             tx.executeSql('INSERT INTO Departamento(Descripcion) VALUES(2)', [],nullHandler,errorHandler);
             tx.executeSql('INSERT INTO Bodega(Descripcion) VALUES(2)', [],nullHandler,errorHandler);
             tx.executeSql('INSERT INTO Rampa(Descripcion) VALUES(2)', [],nullHandler,errorHandler);
             tx.executeSql('INSERT INTO EstatusCita(Descripcion) VALUES(2)', [],nullHandler,errorHandler);
             tx.executeSql('INSERT INTO EstatusFactura(Descripcion) VALUES("En Rampa")', [],nullHandler,errorHandler);
             tx.executeSql('INSERT INTO Usuario(Usuario, Contrasena, Nombre, Bodega, Estatus) VALUES("Pablo","pab","Pablo Barrera Fraga",2,0)', [],nullHandler,errorHandler);
             tx.executeSql('INSERT INTO Proveedor(Tipo_de_Proveedor,Nombre) VALUES(2,"Koblex")', [],nullHandler,errorHandler);
             tx.executeSql('INSERT INTO Cita(Folio,Proveedor,Rampa,Estatus,Bodega,Departamento) VALUES("82763828",2,2,2,2,2)', [],nullHandler,errorHandler);
             tx.executeSql('INSERT INTO Factura(Cita,Nombre,TPMS,ESTATUS) VALUES(2,"F00002",12,2)', [],nullHandler,errorHandler);
             tx.executeSql('INSERT INTO Producto(Factura,Nombre,Cantidad,Imagen,ESTATUS) VALUES(2,"Sofa",2,"productos/sofa.png",1)', [],nullHandler,errorHandler);

             tx.executeSql('INSERT INTO TipoProveedor(Descripcion) VALUES("Externo")', [],nullHandler,errorHandler);
             tx.executeSql('INSERT INTO Departamento(Descripcion) VALUES(3)', [],nullHandler,errorHandler);
             tx.executeSql('INSERT INTO Bodega(Descripcion) VALUES(3)', [],nullHandler,errorHandler);
             tx.executeSql('INSERT INTO Rampa(Descripcion) VALUES(3)', [],nullHandler,errorHandler);
             tx.executeSql('INSERT INTO EstatusCita(Descripcion) VALUES(3)', [],nullHandler,errorHandler);
             tx.executeSql('INSERT INTO EstatusFactura(Descripcion) VALUES("Salida")', [],nullHandler,errorHandler);
             tx.executeSql('INSERT INTO Usuario(Usuario, Contrasena, Nombre, Bodega, Estatus) VALUES("Hernan","her","Hernan Jasso Gonzalez",3,0)', [],nullHandler,errorHandler);
             tx.executeSql('INSERT INTO Proveedor(Tipo_de_Proveedor,Nombre) VALUES(3,"LG")', [],nullHandler,errorHandler);
             tx.executeSql('INSERT INTO Cita(Folio,Proveedor,Rampa,Estatus,Bodega,Departamento) VALUES("5012345678900",3,3,3,3,3)', [],nullHandler,errorHandler);
             tx.executeSql('INSERT INTO Factura(Cita,Nombre,TPMS,ESTATUS) VALUES(3,"F00003",4,3)', [],nullHandler,errorHandler);
                  tx.executeSql('INSERT INTO Factura(Cita,Nombre,TPMS,ESTATUS) VALUES(3,"F00023",2,3)', [],nullHandler,errorHandler);
                  tx.executeSql('INSERT INTO Factura(Cita,Nombre,TPMS,ESTATUS) VALUES(3,"F00033",3,3)', [],nullHandler,errorHandler);
                  tx.executeSql('INSERT INTO Factura(Cita,Nombre,TPMS,ESTATUS) VALUES(3,"F00053",6,3)', [],nullHandler,errorHandler);
             tx.executeSql('INSERT INTO Producto(Factura,Nombre,Cantidad,Imagen,ESTATUS) VALUES(3,"Lampara",2,"productos/lamp.png",1)', [],nullHandler,errorHandler);


            },errorHandler,successCallBack);
        }

        function DeleteRegister() {

            db = openDatabase(shortName, version, displayName, maxSize);

            db.transaction(function(tx){
            tx.executeSql('Delete FROM Producto', [],nullHandler,errorHandler);
            tx.executeSql('Delete FROM Factura', [],nullHandler,errorHandler);
            tx.executeSql('Delete FROM Cita', [],nullHandler,errorHandler);
            tx.executeSql('Delete FROM Proveedor', [],nullHandler,errorHandler);
            tx.executeSql('Delete FROM Usuario', [],nullHandler,errorHandler);
            tx.executeSql('Delete FROM EstatusFactura', [],nullHandler,errorHandler);
            tx.executeSql('Delete FROM EstatusCita', [],nullHandler,errorHandler);
            tx.executeSql('Delete FROM Rampa', [],nullHandler,errorHandler);
            tx.executeSql('Delete FROM Bodega', [],nullHandler,errorHandler);
            tx.executeSql('Delete FROM Departamento', [],nullHandler,errorHandler);
            tx.executeSql('Delete FROM TipoProveedor', [],nullHandler,errorHandler);
            },errorHandler,successCallBack);
        }

    function AddUser(){
    db = openDatabase(shortName, version, displayName, maxSize);             

    db.transaction(function(tx){
    tx.executeSql('INSERT INTO Usuario(Usuario, Contrasena, Nombre, Bodega, Estatus) VALUES(?,?,?,?,0)', [$('#txtuse').val(), $('#txtpas').val(), $('#txtnom').val(), $('#cbobod').val()],nullHandler,errorHandler);
    },errorHandler,successCallBack);
}


function dropdatabaseDemoCdis(){
      db = openDatabase(shortName, version, displayName, maxSize);

    db.transaction(function(tx){
    tx.executeSql('DROP DATABASE DemoCdis', [],nullHandler,errorHandler);
    
    },errorHandler,successCallBack);
    
}

function droptable(){
      db = openDatabase(shortName, version, displayName, maxSize);

    db.transaction(function(tx){
    tx.executeSql('DROP TABLE Usuario', [],nullHandler,errorHandler);
    
    },errorHandler,successCallBack);
    
}

function LoadComboUser(){


if (!window.openDatabase) {

return;
 }
 
 db = openDatabase(shortName, version, displayName,maxSize);

   db.transaction(function(transaction) {
   transaction.executeSql('SELECT BodegaId,Descripcion FROM Bodega;', [], function(transaction, result) {
      if (result != null && result.rows != null) {
        for (var i = 0; i < result.rows.length; i++) {
          var row = result.rows.item(i);
           $('#cbobod').append('<option value="' + row.BodegaId + '">' + row.Descripcion + '</option>');
        }
      }
      
     },errorHandler);
 },errorHandler,nullHandler);


}

function LoadListviewUser(){


if (!window.openDatabase) {

return;   //Usuario(Usuario, Contrasena
 }
 
 db = openDatabase(shortName, version, displayName,maxSize);

   db.transaction(function(transaction) {
   transaction.executeSql('SELECT Nombre FROM Usuario;', [], function(transaction, result) {
      if (result != null && result.rows != null) {
        for (var i = 0; i < result.rows.length; i++) {
          var row = result.rows.item(i);
           $('#listUsers').append('<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="b" class="ui-btn ui-btn-up-b ui-btn-icon-right ui-li-has-arrow ui-li ui-first-child"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><a href="#" class="ui-link-inherit">'+ row.Nombre +'</a></div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li>');
        }  //      <li><a href="#">tempor incididunt.</a><div class="ui-li-count">6/9</div></li>
      }  //$('#contentListView').append('<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="false" data-iconpos="right" data-theme="b" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-btn-up-b"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><i class="icon-spinner icon-spin icon-large"></i>'+ row.Nombre +'</div></div></li>');
      
     },errorHandler);
 },errorHandler,nullHandler);


}

function LoadComboBill(){
    

if (!window.openDatabase) {

return;
 }
 
 db = openDatabase(shortName, version, displayName,maxSize);

   db.transaction(function(transaction) {
   transaction.executeSql('SELECT EstatusId,Descripcion FROM EstatusFactura;', [], function(transaction, result) {
      if (result != null && result.rows != null) {
        for (var i = 0; i < result.rows.length; i++) {
          var row = result.rows.item(i);
           $('#cboest').append('<option value="' + row.EstatusId + '">' + row.Descripcion + '</option>');
        }
      }
      
     },errorHandler);
 },errorHandler,nullHandler);
    
}

function LoadComboappointment(){
    

if (!window.openDatabase) {

return;
 }
 
 db = openDatabase(shortName, version, displayName,maxSize);

   db.transaction(function(transaction) {
   transaction.executeSql('SELECT CitaId,Folio FROM Cita;', [], function(transaction, result) {
      if (result != null && result.rows != null) {
        for (var i = 0; i < result.rows.length; i++) {
          var row = result.rows.item(i);
           $('#cbocit').append('<option value="' + row.CitaId + '">' + row.Folio + '</option>');
        }
      }
      
     },errorHandler);
 },errorHandler,nullHandler);
    
}

function AddBill(){
    
    db = openDatabase(shortName, version, displayName, maxSize);

    db.transaction(function(tx){
    tx.executeSql('INSERT INTO Factura(Nombre,Cita,TPMS,Estatus) VALUES(?,?,?,?)', [$('#txtfac').val(), $('#cbocit').val(), $('#txttpm').val(), $('#cboest').val()],nullHandler,errorHandler);
    },errorHandler,successCallBack);
    
}

function LoadListviewBill() {
    
    
    
if (!window.openDatabase) {

return;  
 }
 
 db = openDatabase(shortName, version, displayName,maxSize);

   db.transaction(function(transaction) {
   transaction.executeSql('SELECT Nombre FROM Factura;', [], function(transaction, result) {
      if (result != null && result.rows != null) {
        for (var i = 0; i < result.rows.length; i++) {
          var row = result.rows.item(i);
           $('#listviewbill').append('<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="b" class="ui-btn ui-btn-up-b ui-btn-icon-right ui-li-has-arrow ui-li ui-first-child"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><a href="#" class="ui-link-inherit">'+ row.Nombre +'</a></div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li>');
        }
      }
      
     },errorHandler);
 },errorHandler,nullHandler);
    
}

function LoadListviewProviders(){
        
if (!window.openDatabase) {

return;  
 }
 
 db = openDatabase(shortName, version, displayName,maxSize);

   db.transaction(function(transaction) {
   transaction.executeSql('SELECT Nombre FROM Proveedor;', [], function(transaction, result) {
      if (result != null && result.rows != null) {
        for (var i = 0; i < result.rows.length; i++) {
          var row = result.rows.item(i);
           $('#listviewproviders').append('<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="b" class="ui-btn ui-btn-up-b ui-btn-icon-right ui-li-has-arrow ui-li ui-first-child"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><a href="#" class="ui-link-inherit">'+ row.Nombre +'</a></div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li>');
        }
      }
      
     },errorHandler);
 },errorHandler,nullHandler);
    
} 
  
function LoadComboProviders(){
    

if (!window.openDatabase) {

return;
 }
 
 db = openDatabase(shortName, version, displayName,maxSize);

   db.transaction(function(transaction) {
   transaction.executeSql('SELECT TipoProveedorId,Descripcion FROM TipoProveedor;', [], function(transaction, result) {
      if (result != null && result.rows != null) {
        for (var i = 0; i < result.rows.length; i++) {
          var row = result.rows.item(i);
           $('#cbotip').append('<option value="' + row.TipoProveedorId + '">' + row.Descripcion + '</option>');
        }
      }
      
     },errorHandler);
 },errorHandler,nullHandler);
    
}

function AddProviders(){
    
    db = openDatabase(shortName, version, displayName, maxSize);

    db.transaction(function(tx){
    tx.executeSql('INSERT INTO Proveedor(Tipo_de_Proveedor,Nombre) VALUES(?,?)', [$('#cbotip').val(), $('#txtnom').val()],nullHandler,errorHandler);
    },errorHandler,successCallBack);
     
} 

// ESTA FUNCION REVISA EL USUARIO QUE VA ENTRAR AL SISTEMA
	function CheckUser(){


        if (!window.openDatabase) {

        return; //Usuario(Usuario, Contrasena
        }

        	db = openDatabase(shortName, version, displayName,maxSize);

        	db.transaction(function(transaction) {
        		transaction.executeSql('SELECT Nombre FROM Usuario Where Usuario = ? and Contrasena = ?;', [$('#txtnom').val(), $('#txtpas').val()], function(transaction, result) {
        			if (result.rows.length != 0) {

        				var row = result.rows.item(0);


        				transaction.executeSql('UPDATE Usuario SET Estatus = 0;', [], function(transaction, result) {
        			},errorHandler);


        				updateUser();



        			} 

            },errorHandler);
            },errorHandler,nullHandler);


	}

//ESTA FUNCION ES PARA REVISAR LA BASE DE DATOS EN LOGIN Y EJECUTA DELETEREGISTER E INSERTREGISTER

function CheckBD(){


        if (!window.openDatabase) {

        return;
        }

        db = openDatabase(shortName, version, displayName,maxSize);

        db.transaction(function(transaction) {
				transaction.executeSql('SELECT Nombre FROM Usuario' , [], function(transaction, result) {

                    if ( result.rows.length != 0) {


                    }
                    else{
                            DeleteRegister();
                            InsertRegister();

                    }
                    });

                        },errorHandler);


}


function updateUser(){
    
    
if (!window.openDatabase) {

return;  
 }
 
 db = openDatabase(shortName, version, displayName,maxSize);

   db.transaction(function(transaction) {
 
       
         transaction.executeSql('UPDATE Usuario SET Estatus = 1 Where Usuario = ? and Contrasena = ?;', [$('#txtnom').val(), $('#txtpas').val()], function(transaction, result) {
     },errorHandler);
       
       openwindows();
       
       
 },errorHandler,nullHandler);
    
}


function showName(){
    
    if (!window.openDatabase) {

return;  
 }
 
 db = openDatabase(shortName, version, displayName,maxSize);

   db.transaction(function(transaction) { 

   transaction.executeSql('SELECT u.Nombre,b.Descripcion FROM Usuario u INNER JOIN Bodega b ON b.BodegaId=u.Bodega AND u.Estatus = 1', [], function(transaction, result) {
      if (result != null && result.rows != null) {
      
          var row = result.rows.item(0);

       document.getElementById("bodega").value = "Bodega: " + row.Descripcion + "      " + row.Nombre;
       document.getElementById("bodega").style.color = "yellow";

      } 
      
     },errorHandler);
 },errorHandler,nullHandler);


}

function openwindows(){
    window.location.href='menuPrincipal.html';
}


function LoadFillProviders(){
    

if (!window.openDatabase) {

return;
 }
 
 db = openDatabase(shortName, version, displayName,maxSize);

   db.transaction(function(transaction) {
   transaction.executeSql('SELECT ProveedorId,Nombre FROM Proveedor;', [], function(transaction, result) {
      if (result != null && result.rows != null) {
        for (var i = 0; i < result.rows.length; i++) {
          var row = result.rows.item(i);
           $('#cboprov').append('<option value="' + row.ProveedorId + '">' + row.Nombre + '</option>');
        }
      }
      
     },errorHandler);
 },errorHandler,nullHandler);
    
}


function LoadFillRam(){
    

if (!window.openDatabase) {

return;
 }
 
 db = openDatabase(shortName, version, displayName,maxSize);

   db.transaction(function(transaction) {
   transaction.executeSql('SELECT RampaId,Descripcion FROM Rampa;', [], function(transaction, result) {
      if (result != null && result.rows != null) {
        for (var i = 0; i < result.rows.length; i++) {
          var row = result.rows.item(i);
           $('#cboram').append('<option value="' + row.RampaId + '">' + row.Descripcion + '</option>');
        }
      }
      
     },errorHandler);
 },errorHandler,nullHandler);
    
}



function insertcita(){ 
    
      if (!window.openDatabase) {

return;  
 }
 
 db = openDatabase(shortName, version, displayName,maxSize);

   db.transaction(function(transaction) { 

   transaction.executeSql('SELECT u.Nombre,b.BodegaId FROM Usuario u INNER JOIN Bodega b ON b.BodegaId=u.Bodega AND u.Estatus = 1', [], function(transaction, result) {
      if (result != null && result.rows != null) {
      
          var row = result.rows.item(0);
          //  tx.executeSql('INSERT INTO Cita(Folio,Proveedor,Rampa,Estatus,Bodega,Departamento) VALUES(?,?,?,?,?,?)', [$('#txRecibeFolio').val(), $('#cboprov').val(), $('#cboram').val(),1, row.BodegaId,1],nullHandler,errorHandler);
          
            transaction.executeSql('INSERT INTO Cita(Folio,Proveedor,Rampa,Estatus,Bodega,Departamento) VALUES(?,?,?,?,?,?)', [$('#txRecibeFolio').val(), $('#cboprov').val(), $('#cboram').val(),1, row.BodegaId,1], function(transaction, result) {
     },errorHandler);
          
          
         
      } 
      
     },errorHandler);
 },errorHandler,nullHandler);
  
}


function openMenu(){
    window.location.href='menuPrincipal.html';
}


function LoadFacturas(){
    

if (!window.openDatabase) {

return;
 }
 
 db = openDatabase(shortName, version, displayName,maxSize);
    db.transaction(function(transaction) {
   transaction.executeSql('SELECT f.Nombre, f.TPMS, e.Descripcion FROM Factura f JOIN EstatusFactura e ON f.ESTATUS = e.EstatusId JOIN Cita c ON f.Cita = c.CitaId WHERE c.Folio = ?;', [$('#txRecibeFolio').val()], function(transaction, result) {
      if (result != null && result.rows != null) {
          var tabla = document.getElementById("tablaFacturasCita");
          tabla.innerHTML="";
        for (var i = 0; i < result.rows.length; i++) {
          var row = result.rows.item(i);
           $('#tablaFacturasCita').append('<tr> <th>1</th> <td><a  data-rel="external">' + row.Nombre + '</a></td> <td>' + row.Descripcion + '</td> <td >' + row.TPMS + '</td> </tr>');
        }
      }
     },errorHandler);
 },errorHandler,nullHandler);
    LoadlabelProviders2();
}



function LoadlabelProviders2(){
    

if (!window.openDatabase) {

return;
 }
 
 db = openDatabase(shortName, version, displayName,maxSize);

   db.transaction(function(transaction) {
   transaction.executeSql('SELECT p.Nombre FROM Proveedor p INNER JOIN Cita c ON p.ProveedorId=c.Proveedor AND c.Folio = ?' , [$('#txRecibeFolio').val()], function(transaction, result) {
     
       if ( result.rows.length != 0) {
            var row = result.rows.item(0);
       document.getElementById("provedor").value = "Proveedor: " + row.Nombre;
       document.getElementById("provedor").style.color = "yellow";
            
        }
       else{
            document.getElementById("provedor").value = " ";
       }
      });
      
     },errorHandler);
 
    
}

//FUNCIONES DE SONIDO - ENTRADA DE FACTURAS
// Estas Funciones son para reproducir los sonido "beep2.mp3" , "alert.mp3" en Entrada de Facturas.
// Para verificar si la cita existe o no y aparte arroja un mensaje de Alerta para notificar al usuario.


		function isFeedbackEnabledCallback(feedback) {
			if(feedback.haptic && feedback.acoustic) alert("Both haptic and acoustic feedback are enabled by user.")
			else if(feedback.haptic) alert("Haptic feedback is enabled, but acoustic not.")
			else if(feedback.acoustic) alert("Haptic feedback is disabled, nevertheless acoustic is enabled.")
			else alert("Neither haptic feedback is enabled nor acoustic.")
		}
		function performFeedback() {
			window.plugins.deviceFeedback.isFeedbackEnabled(function(feedback) {
				if(feedback.acoustic) window.plugins.deviceFeedback.acoustic()
				else window.plugins.deviceFeedback.haptic()
			})
		}
        
        
        
 function validar(){
     
   db = openDatabase(shortName, version, displayName,maxSize);

   db.transaction(function(transaction) {
       
   transaction.executeSql('Select Folio From Cita Where Folio = ?', [$('#txRecibeFolio').val()], function(transaction, result) {
   
       if ( result.rows.length != 0) {
          
             	 playmp3("sounds/alert.mp3");
                 alert("Folio Aceptado");
             }else{
                 playmp3("sounds/beep2.mp3");
                 alert("Folio no Existente");
        	 }
    });
   });
 }

function playmp3(file) {
    var mp3URL = getMediaURL(file);
    var media = new Media(mp3URL, null, mediaError);
    media.play();
}

function getMediaURL(s) {
    if(device.platform.toLowerCase() === "android") return "/android_asset/www/" + s;
    return s;
}

function mediaError(e) {
    alert('Media Error');
    alert(JSON.stringify(e));
}


//AQUI TERMINAN LAS FUNCIONES DE SONIDO - ENTRADA DE FACTURAS




//// FUNCION PARA ESTATUS DEL DIA LLENAR TABLAS EN CADA FASE DE ESTATUS DE LOS PROVEEDORES

function LoadProveedoresPendientes(){
    

if (!window.openDatabase) {

return;
 }
 
 db = openDatabase(shortName, version, displayName,maxSize);
    db.transaction(function(transaction) {
   transaction.executeSql('Select Folio, P.Nombre, R.Descripcion From Cita C Inner Join Proveedor P On C.Proveedor = P.ProveedorId Inner Join Rampa R On C.Rampa = R.RampaId Where C.Estatus = 1;', [], function(transaction, result) {
      if (result != null && result.rows != null) {
          var tabla = document.getElementById("tablaPPendientes");
          tabla.innerHTML="";
        for (var i = 0; i < result.rows.length; i++) {
          var row = result.rows.item(i);
           $('#tablaPPendientes').append('<tr>  <td><a  data-rel="external">' + row.Folio + '</a></td> <td>' + row.Descripcion + '</td> <td >' + row.Nombre + '</td> <th>10:00</th> </tr>');
        }
      }
     },errorHandler);
 },errorHandler,nullHandler);
    LoadlabelProviders2();
}

function LoadProveedoresFacturas(){
    

if (!window.openDatabase) {

return;
 }
 
 db = openDatabase(shortName, version, displayName,maxSize);
    db.transaction(function(transaction) {
   transaction.executeSql('Select Folio, P.Nombre, R.Descripcion From Cita C Inner Join Proveedor P On C.Proveedor = P.ProveedorId Inner Join Rampa R On C.Rampa = R.RampaId Where C.Estatus = 2;', [], function(transaction, result) {
      if (result != null && result.rows != null) {
          var tabla = document.getElementById("tablaPFacturas");
          tabla.innerHTML="";
        for (var i = 0; i < result.rows.length; i++) {
          var row = result.rows.item(i);
           $('#tablaPFacturas').append('<tr>  <td><a  data-rel="external">' + row.Folio + '</a></td> <td>' + row.Descripcion + '</td> <td >' + row.Nombre + '</td> <th>10:00</th> </tr>');
        }
      }
     },errorHandler);
 },errorHandler,nullHandler);
}

function LoadProveedoresSalida(){
    

if (!window.openDatabase) {

return;
 }
 
 db = openDatabase(shortName, version, displayName,maxSize);
    db.transaction(function(transaction) {
   transaction.executeSql('Select Folio, P.Nombre, R.Descripcion From Cita C Inner Join Proveedor P On C.Proveedor = P.ProveedorId Inner Join Rampa R On C.Rampa = R.RampaId Where C.Estatus = 3;', [], function(transaction, result) {
      if (result != null && result.rows != null) {
          var tabla = document.getElementById("tablaPSalida");
          tabla.innerHTML="";
        for (var i = 0; i < result.rows.length; i++) {
          var row = result.rows.item(i);
           $('#tablaPSalida').append('<tr>  <td><a  data-rel="external">' + row.Folio + '</a></td> <td>' + row.Descripcion + '</td> <td >' + row.Nombre + '</td> <th>10:00</th> </tr>');
        }
      }
     },errorHandler);
 },errorHandler,nullHandler);
}

//// FIN DE LAS FUNCIONES DE ESTATUS DEL DIA



////////////////FUNCION PRUEBA


function prueba(){
    

if (!window.openDatabase) {

return;
 }
 
 db = openDatabase(shortName, version, displayName,maxSize);
    db.transaction(function(transaction) {
   transaction.executeSql('Select Folio, P.Nombre, R.Descripcion From Cita C Inner Join Proveedor P On C.Proveedor = P.ProveedorId Inner Join Rampa R On C.Rampa = R.RampaId Where C.Estatus = 3;', [], function(transaction, result) {
      if (result != null && result.rows != null) {
          var tabla = document.getElementById("collapseidfill");
          tabla.innerHTML="";
        for (var i = 0; i < result.rows.length; i++) {
          var row = result.rows.item(i);
           $('#collapseidfill').append('<div data-role="collapsible" data-content-theme="b" class="ui-collapsible ui-collapsible-inset ui-corner-all ui-collapsible-themed-content"><h4 class="ui-collapsible-heading"><a href="#" class="ui-collapsible-heading-toggle ui-btn ui-fullsize ui-btn-icon-left ui-btn-active ui-btn-up-b" data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="span" data-icon="plus" data-iconpos="left" data-theme="b" data-mini="false"><span class="ui-btn-inner"><span class="ui-btn-text"><strong>Reporte: Citas de Hoy</strong><font color="red" bold=""> (2/4)</font><span class="ui-collapsible-heading-status"> click to collapse contents</span></span><span class="ui-icon ui-icon-shadow ui-icon-minus">&nbsp;</span></span></a></h4><div class="ui-collapsible-content ui-body-b" aria-hidden="false"><ul data-role="listview" class="ui-listview"><div data-role="collapsible" data-content-theme="b" class="ui-collapsible ui-collapsible-inset ui-corner-all ui-collapsible-themed-content ui-collapsible-collapsed"><h4 class="ui-collapsible-heading ui-collapsible-heading-collapsed ui-li-heading"><a href="#" class="ui-collapsible-heading-toggle ui-btn ui-fullsize ui-btn-icon-left ui-btn-up-b" data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="span" data-icon="plus" data-iconpos="left" data-theme="b" data-mini="false"><span class="ui-btn-inner"><span class="ui-btn-text"><strong>En Rampa</strong><font color="#58FAF4" bold=""> (1)</font><span class="ui-collapsible-heading-status"> click to expand contents</span></span><span class="ui-icon ui-icon-plus ui-icon-shadow">&nbsp;</span></span></a></h4><div class="ui-collapsible-content ui-body-b ui-collapsible-content-collapsed" aria-hidden="true"><div class="inset"><table data-role="table" id="table-column-toggle" data-mode="columntoggle2" class="ui-responsive table-stroke ui-table"><thead><tr><th data-priority="2"><font color="#58FAF4" bold="">Cita</font></th><th><font color="#58FAF4" bold="">Rampa</font></th><th data-priority="3"><font color="#58FAF4" bold="">Proveedor</font></th><th data-priority="1"><font color="#58FAF4" bold="">Hora</font></th></tr></thead><tbody id="tablaPPendientes"></tbody></table></div></div></div></ul><ul data-role="listview" class="ui-listview"><div data-role="collapsible" data-content-theme="b" class="ui-collapsible ui-collapsible-inset ui-corner-all ui-collapsible-themed-content ui-collapsible-collapsed"><h4 class="ui-collapsible-heading ui-collapsible-heading-collapsed ui-li-heading"><a href="#" class="ui-collapsible-heading-toggle ui-btn ui-fullsize ui-btn-icon-left ui-btn-up-b" data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="span" data-icon="plus" data-iconpos="left" data-theme="b" data-mini="false"><span class="ui-btn-inner"><span class="ui-btn-text"><strong>Entrada de Facturas</strong><span class="ui-collapsible-heading-status"> click to expand contents</span></span><span class="ui-icon ui-icon-plus ui-icon-shadow">&nbsp;</span></span></a></h4><div class="ui-collapsible-content ui-body-b ui-collapsible-content-collapsed" aria-hidden="true"><div class="inset"><table data-role="table" id="table-column-toggle" data-mode="columntoggle2" class="ui-responsive table-stroke ui-table"><thead><tr><th data-priority="2"><font color="#58FAF4" bold="">Cita</font></th><th><font color="#58FAF4" bold="">Rampa</font></th><th data-priority="3"><font color="#58FAF4" bold="">Proveedor</font></th><th data-priority="1"><font color="#58FAF4" bold="">Hora</font></th></tr></thead><tbody id="tablaPFacturas"></tbody></table></div></div></div></ul><ul data-role="listview" class="ui-listview"><div data-role="collapsible" data-content-theme="b" class="ui-collapsible ui-collapsible-inset ui-corner-all ui-collapsible-themed-content ui-collapsible-collapsed"><h4 class="ui-collapsible-heading ui-collapsible-heading-collapsed ui-li-heading"><a href="#" class="ui-collapsible-heading-toggle ui-btn ui-fullsize ui-btn-icon-left ui-btn-up-b" data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="span" data-icon="plus" data-iconpos="left" data-theme="b" data-mini="false"><span class="ui-btn-inner"><span class="ui-btn-text"><strong>Salida de Proveedor </strong><font color="red" bold=""> (2)</font><span class="ui-collapsible-heading-status"> click to expand contents</span></span><span class="ui-icon ui-icon-plus ui-icon-shadow">&nbsp;</span></span></a></h4><div class="ui-collapsible-content ui-body-b ui-collapsible-content-collapsed" aria-hidden="true"><div class="inset"><table data-role="table" id="table-column-toggle" data-mode="columntoggle2" class="ui-responsive table-stroke ui-table"><thead><tr><th data-priority="2"><font color="#58FAF4" bold="">Cita</font></th><th><font color="#58FAF4" bold="">Rampa</font></th><th data-priority="3"><font color="#58FAF4" bold="">Proveedor</font></th><th data-priority="1"><font color="#58FAF4" bold="">Hora</font></th></tr></thead><tbody id="tablaPSalida"></tbody></table></div></div></div></ul></div></div>');
            
           
           
           
        }
      }
     },errorHandler);
 },errorHandler,nullHandler);
}







