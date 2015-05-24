  var db;
        var shortName = 'DemoCdis1';
        var version = '1.0';
        var displayName = 'DemoCdis1';
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



            db.transaction(function (tx) {
                tx.executeSql('CREATE TABLE IF NOT EXISTS TipoProveedor(TipoProveedorId INTEGER NOT NULL PRIMARY KEY, Descripcion TEXT NOT NULL)', [], nullHandler, errorHandler);
            }, errorHandler, successCallBack);

            db.transaction(function (tx) {
                tx.executeSql('CREATE TABLE IF NOT EXISTS Departamento(DepartamentoId INTEGER NOT NULL PRIMARY KEY, Descripcion INTEGER NOT NULL)', [], nullHandler, errorHandler);
            }, errorHandler, successCallBack);
            //----
            db.transaction(function (tx) {
                tx.executeSql('CREATE TABLE IF NOT EXISTS Bodega(BodegaId INTEGER NOT NULL PRIMARY KEY, Descripcion INTEGER NOT NULL)', [], nullHandler, errorHandler);
            }, errorHandler, successCallBack);

            db.transaction(function (tx) {
                tx.executeSql('CREATE TABLE IF NOT EXISTS Rampa(RampaId INTEGER NOT NULL PRIMARY KEY, Descripcion INTEGER NOT NULL)', [], nullHandler, errorHandler);
            }, errorHandler, successCallBack);
            //--------
            db.transaction(function (tx) {
                tx.executeSql('CREATE TABLE IF NOT EXISTS EstatusCita(EstatusId INTEGER NOT NULL PRIMARY KEY, Descripcion TEXT NOT NULL )', [], nullHandler, errorHandler);
            }, errorHandler, successCallBack);

            db.transaction(function (tx) {
                tx.executeSql('CREATE TABLE IF NOT EXISTS EstatusFactura(EstatusId INTEGER NOT NULL PRIMARY KEY, Descripcion TEXT NOT NULL )', [], nullHandler, errorHandler);
            }, errorHandler, successCallBack);
            //----------
            db.transaction(function (tx) {
                tx.executeSql('CREATE TABLE IF NOT EXISTS Usuario(UsuarioId INTEGER NOT NULL PRIMARY KEY, Usuario TEXT NOT NULL , Contrasena TEXT NOT NULL, Nombre TEXT NOT NULL, Bodega INTEGER NOT NULL, Estatus Integer NOT NULL, FOREIGN KEY(Bodega) REFERENCES Bodega(BodegaId))', [], nullHandler, errorHandler);
            }, errorHandler, successCallBack);

            db.transaction(function (tx) {
                tx.executeSql('CREATE TABLE IF NOT EXISTS Proveedor(ProveedorId INTEGER NOT NULL PRIMARY KEY, Tipo_de_Proveedor INTEGER NOT NULL, Nombre TEXT NOT NULL, FOREIGN KEY(Tipo_de_Proveedor) REFERENCES TipoProveedor(TipoProveedorId))', [], nullHandler, errorHandler);
            }, errorHandler, successCallBack);
            //---------
            db.transaction(function (tx) {
                tx.executeSql('CREATE TABLE IF NOT EXISTS Cita(CitaId INTEGER NOT NULL PRIMARY KEY, Folio TEXT NOT NULL, Proveedor INTEGER, Rampa INTEGER, Estatus INTEGER, Bodega INTEGER NOT NULL, Departamento INTEGER NOT NULL, FOREIGN KEY(Proveedor) REFERENCES Proveedor(ProveedorId), FOREIGN KEY(Rampa) REFERENCES Rampa(RampaId),  FOREIGN KEY(ESTATUS) REFERENCES EstatusCita(EstatusId), FOREIGN KEY(Bodega) REFERENCES Bodega(BodegaId), FOREIGN KEY(Departamento) REFERENCES Departamento(DepartamentoId))', [], nullHandler, errorHandler);
            }, errorHandler, successCallBack);

            db.transaction(function (tx) {
                tx.executeSql('CREATE TABLE IF NOT EXISTS Factura(FacturaId INTEGER NOT NULL PRIMARY KEY, Nombre TEXT NOT NULL, Cita INTEGER NOT NULL, TPMS INTEGER, ESTATUS INTEGER, FOREIGN KEY(Cita) REFERENCES Cita(CitaId),  FOREIGN KEY(ESTATUS) REFERENCES EstatusFactura(EstatusId))', [], nullHandler, errorHandler);
            }, errorHandler, successCallBack);

            db.transaction(function (tx) {
                tx.executeSql('CREATE TABLE IF NOT EXISTS Producto(Productoid INTEGER NOT NULL PRIMARY KEY, Factura INTEGER NOT NULL, Nombre TEXT NOT NULL, Cantidad INTEGER NOT NULL, Imagen TEXT, ESTATUS INTEGER, FOREIGN KEY(Factura) REFERENCES Factura(FacturaId))', [], nullHandler, errorHandler);
            }, errorHandler, successCallBack);
            //tx.executeSql('INSERT INTO Producto(Factura,Nombre,Cantidad,Imagen,ESTATUS) VALUES(3,"Sofa",2,"productos/lamp.png",1)', [],nullHandler,errorHandler);

           // db.transaction(function(tx){
            //tx.executeSql('UPDATE Factura set ESTATUS=0', [],nullHandler,errorHandler);
             //},errorHandler,successCallBack);
            //tx.executeSql('INSERT INTO Producto(Factura,Nombre,Cantidad,Imagen,ESTATUS) VALUES(4,"Lampara",2,"productos/lamp.png",1)', [],nullHandler,errorHandler);
            //tx.executeSql('INSERT INTO Producto(Factura,Nombre,Cantidad,Imagen,ESTATUS) VALUES(5,"Lampara",2,"productos/lamp.png",1)', [],nullHandler,errorHandler);
            //tx.executeSql('INSERT INTO Producto(Factura,Nombre,Cantidad,Imagen,ESTATUS) VALUES(6,"Lampara",2,"productos/lamp.png",1)', [],nullHandler,errorHandler);
    //DeleteRegister();
          //InsertRegister();


        }

        function InsertRegister() {

            db = openDatabase(shortName, version, displayName, maxSize);

            db.transaction(function (tx) {
                tx.executeSql('INSERT INTO TipoProveedor(Descripcion) VALUES("Indefinido")', [], nullHandler, errorHandler);
                tx.executeSql('INSERT INTO Departamento(Descripcion) VALUES(1)', [], nullHandler, errorHandler);
                tx.executeSql('INSERT INTO Bodega(Descripcion) VALUES(1)', [], nullHandler, errorHandler);
                tx.executeSql('INSERT INTO Rampa(Descripcion) VALUES(1)', [], nullHandler, errorHandler);
                tx.executeSql('INSERT INTO EstatusCita(Descripcion) VALUES(1)', [], nullHandler, errorHandler);
                tx.executeSql('INSERT INTO EstatusFactura(EstatusId,Descripcion) VALUES(0,"Proceso")', [], nullHandler, errorHandler);
                tx.executeSql('INSERT INTO Usuario(Usuario, Contrasena, Nombre, Bodega, Estatus) VALUES("Angel","12","Angel Diaz Rios",1,0)', [], nullHandler, errorHandler);
                tx.executeSql('INSERT INTO Proveedor(Tipo_de_Proveedor,Nombre) VALUES(1,"Samsung")', [], nullHandler, errorHandler);
                tx.executeSql('INSERT INTO Cita(Folio,Proveedor,Rampa,Estatus,Bodega,Departamento) VALUES("12873065",1,1,1,1,1)', [], nullHandler, errorHandler);
                tx.executeSql('INSERT INTO Factura(Cita,Nombre,TPMS,ESTATUS) VALUES(1,"F00001",0,1)', [], nullHandler, errorHandler);
                tx.executeSql('INSERT INTO Producto(Factura,Nombre,Cantidad,Imagen,ESTATUS) VALUES(1,"Television LED",10,"productos/tel.png",1)', [], nullHandler, errorHandler);

                tx.executeSql('INSERT INTO TipoProveedor(Descripcion) VALUES("Interno")', [], nullHandler, errorHandler);
                tx.executeSql('INSERT INTO Departamento(Descripcion) VALUES(2)', [], nullHandler, errorHandler);
                tx.executeSql('INSERT INTO Bodega(Descripcion) VALUES(2)', [], nullHandler, errorHandler);
                tx.executeSql('INSERT INTO Rampa(Descripcion) VALUES(2)', [], nullHandler, errorHandler);
                tx.executeSql('INSERT INTO EstatusCita(Descripcion) VALUES(2)', [], nullHandler, errorHandler);
                //  tx.executeSql('INSERT INTO EstatusFactura(Descripcion) VALUES("En Rampa")', [],nullHandler,errorHandler);
                tx.executeSql('INSERT INTO Usuario(Usuario, Contrasena, Nombre, Bodega, Estatus) VALUES("Pablo","pab","Pablo Barrera Fraga",2,0)', [], nullHandler, errorHandler);
                tx.executeSql('INSERT INTO Proveedor(Tipo_de_Proveedor,Nombre) VALUES(2,"Koblex")', [], nullHandler, errorHandler);
                tx.executeSql('INSERT INTO Cita(Folio,Proveedor,Rampa,Estatus,Bodega,Departamento) VALUES("82763828",2,2,2,2,2)', [], nullHandler, errorHandler);
                tx.executeSql('INSERT INTO Factura(Cita,Nombre,TPMS,ESTATUS) VALUES(2,"F00002",12,0)', [], nullHandler, errorHandler);
                tx.executeSql('INSERT INTO Producto(Factura,Nombre,Cantidad,Imagen,ESTATUS) VALUES(2,"Sofa",2,"productos/sofa.png",1)', [], nullHandler, errorHandler);

                tx.executeSql('INSERT INTO TipoProveedor(Descripcion) VALUES("Externo")', [], nullHandler, errorHandler);
                tx.executeSql('INSERT INTO Departamento(Descripcion) VALUES(3)', [], nullHandler, errorHandler);
                tx.executeSql('INSERT INTO Bodega(Descripcion) VALUES(3)', [], nullHandler, errorHandler);
                tx.executeSql('INSERT INTO Rampa(Descripcion) VALUES(3)', [], nullHandler, errorHandler);
                tx.executeSql('INSERT INTO EstatusCita(Descripcion) VALUES(3)', [], nullHandler, errorHandler);
                tx.executeSql('INSERT INTO EstatusFactura(EstatusId,Descripcion) VALUES(1,"Salida")', [], nullHandler, errorHandler);
                tx.executeSql('INSERT INTO Usuario(Usuario, Contrasena, Nombre, Bodega, Estatus) VALUES("Hernan","her","Hernan Jasso Gonzalez",3,0)', [], nullHandler, errorHandler);
                tx.executeSql('INSERT INTO Proveedor(Tipo_de_Proveedor,Nombre) VALUES(3,"LG")', [], nullHandler, errorHandler);
                tx.executeSql('INSERT INTO Cita(Folio,Proveedor,Rampa,Estatus,Bodega,Departamento) VALUES("5012345678900",3,3,3,3,3)', [], nullHandler, errorHandler);
                tx.executeSql('INSERT INTO Factura(Cita,Nombre,TPMS,ESTATUS) VALUES(3,"F00003",4,1)', [], nullHandler, errorHandler);
                tx.executeSql('INSERT INTO Factura(Cita,Nombre,TPMS,ESTATUS) VALUES(3,"F00023",2,1)', [], nullHandler, errorHandler);
                tx.executeSql('INSERT INTO Factura(Cita,Nombre,TPMS,ESTATUS) VALUES(3,"F00033",3,0)', [], nullHandler, errorHandler);
                tx.executeSql('INSERT INTO Factura(Cita,Nombre,TPMS,ESTATUS) VALUES(3,"F00053",6,0)', [], nullHandler, errorHandler);
                tx.executeSql('INSERT INTO Producto(Factura,Nombre,Cantidad,Imagen,ESTATUS) VALUES(3,"Lampara",2,"productos/lamp.png",1)', [], nullHandler, errorHandler);
                tx.executeSql('INSERT INTO Producto(Factura,Nombre,Cantidad,Imagen,ESTATUS) VALUES(4,"Sofa",2,"productos/lamp.png",1)', [], nullHandler, errorHandler);
                tx.executeSql('INSERT INTO Producto(Factura,Nombre,Cantidad,Imagen,ESTATUS) VALUES(5,"Plancha",2,"productos/lamp.png",1)', [], nullHandler, errorHandler);
                tx.executeSql('INSERT INTO Producto(Factura,Nombre,Cantidad,Imagen,ESTATUS) VALUES(6,"Lampara",2,"productos/lamp.png",1)', [], nullHandler, errorHandler);

                tx.executeSql('INSERT INTO Factura(Cita,Nombre,TPMS,ESTATUS) VALUES(2,"F00063",15,1)', [],nullHandler,errorHandler);



             tx.executeSql('INSERT INTO Producto(Factura,Nombre,Cantidad,Imagen,ESTATUS) VALUES(3,"Lampara",2,"productos/lamp.png",1)', [],nullHandler,errorHandler); 
             tx.executeSql('INSERT INTO Producto(Factura,Nombre,Cantidad,Imagen,ESTATUS) VALUES(3,"Sillon",1,"productos/sofa.png",1)', [],nullHandler,errorHandler);

             tx.executeSql('INSERT INTO Producto(Factura,Nombre,Cantidad,Imagen,ESTATUS) VALUES(2,"Plancha",5,"productos/plancha.png",1)', [],nullHandler,errorHandler);
             tx.executeSql('INSERT INTO Producto(Factura,Nombre,Cantidad,Imagen,ESTATUS) VALUES(2,"Microohondas",7,"productos/micro.png",1)', [],nullHandler,errorHandler);

             tx.executeSql('INSERT INTO Producto(Factura,Nombre,Cantidad,Imagen,ESTATUS) VALUES(4,"Comedor",1,"productos/comedor.png",1)', [],nullHandler,errorHandler);
             tx.executeSql('INSERT INTO Producto(Factura,Nombre,Cantidad,Imagen,ESTATUS) VALUES(5,"Cama",1,"productos/cama.png",1)', [],nullHandler,errorHandler);
             tx.executeSql('INSERT INTO Producto(Factura,Nombre,Cantidad,Imagen,ESTATUS) VALUES(6,"Moto",1,"productos/moto.png",1)', [],nullHandler,errorHandler);
    
             tx.executeSql('INSERT INTO Producto(Factura,Nombre,Cantidad,Imagen,ESTATUS) VALUES(7,"Juguetero",1,"productos/mueble.png",1)', [],nullHandler,errorHandler);
             tx.executeSql('INSERT INTO Producto(Factura,Nombre,Cantidad,Imagen,ESTATUS) VALUES(7,"Vajilla",3,"productos/vajilla.png",1)', [],nullHandler,errorHandler);

            }, errorHandler, successCallBack);
        }

        function DeleteRegister() {

            db = openDatabase(shortName, version, displayName, maxSize);

            db.transaction(function (tx) {
                tx.executeSql('Delete FROM Producto', [], nullHandler, errorHandler);
                tx.executeSql('Delete FROM Factura', [], nullHandler, errorHandler);
                tx.executeSql('Delete FROM Cita', [], nullHandler, errorHandler);
                tx.executeSql('Delete FROM Proveedor', [], nullHandler, errorHandler);
                tx.executeSql('Delete FROM Usuario', [], nullHandler, errorHandler);
                tx.executeSql('Delete FROM EstatusFactura', [], nullHandler, errorHandler);
                tx.executeSql('Delete FROM EstatusCita', [], nullHandler, errorHandler);
                tx.executeSql('Delete FROM Rampa', [], nullHandler, errorHandler);
                tx.executeSql('Delete FROM Bodega', [], nullHandler, errorHandler);
                tx.executeSql('Delete FROM Departamento', [], nullHandler, errorHandler);
                tx.executeSql('Delete FROM TipoProveedor', [], nullHandler, errorHandler);
            }, errorHandler, successCallBack);
        }

        function AddUser() {

            db = openDatabase(shortName, version, displayName, maxSize);

            db.transaction(function (tx) {
                tx.executeSql('INSERT INTO Usuario(Usuario, Contrasena, Nombre, Bodega) VALUES(?,?,?,?)', [$('#txtuse').val(), $('#txtpas').val(), $('#txtnom').val(), $('#cbobod').val()], nullHandler, errorHandler);
            }, errorHandler, successCallBack);
        }


        function dropdatabaseDemoCdis() {
            db = openDatabase(shortName, version, displayName, maxSize);

            db.transaction(function (tx) {
                tx.executeSql('DROP DATABASE DemoCdis', [], nullHandler, errorHandler);

            }, errorHandler, successCallBack);

        }

        function droptable() {
            db = openDatabase(shortName, version, displayName, maxSize);

            db.transaction(function (tx) {
                tx.executeSql('DROP TABLE Usuario', [], nullHandler, errorHandler);

            }, errorHandler, successCallBack);

        }

        function LoadComboUser() {


            if (!window.openDatabase) {

                return;
            }

            db = openDatabase(shortName, version, displayName, maxSize);

            db.transaction(function (transaction) {
                transaction.executeSql('SELECT BodegaId,Descripcion FROM Bodega;', [], function (transaction, result) {
                    if (result != null && result.rows != null) {
                        for (var i = 0; i < result.rows.length; i++) {
                            var row = result.rows.item(i);
                            $('#cbobod').append('<option value="' + row.BodegaId + '">' + row.Descripcion + '</option>');
                        }
                    }

                }, errorHandler);
            }, errorHandler, nullHandler);


        }

        function LoadListviewUser() {


            if (!window.openDatabase) {

                return;   //Usuario(Usuario, Contrasena
            }

            db = openDatabase(shortName, version, displayName, maxSize);

            db.transaction(function (transaction) {
                transaction.executeSql('SELECT Nombre FROM Usuario;', [], function (transaction, result) {
                    if (result != null && result.rows != null) {
                        for (var i = 0; i < result.rows.length; i++) {
                            var row = result.rows.item(i);
                            $('#listUsers').append('<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="arrow-r" data-iconpos="right" data-theme="b" class="ui-btn ui-btn-up-b ui-btn-icon-right ui-li-has-arrow ui-li ui-first-child"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><a href="#" class="ui-link-inherit">' + row.Nombre + '</a></div><span class="ui-icon ui-icon-arrow-r ui-icon-shadow">&nbsp;</span></div></li>');
                        }  //      <li><a href="#">tempor incididunt.</a><div class="ui-li-count">6/9</div></li>
                    }  //$('#contentListView').append('<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="false" data-iconpos="right" data-theme="b" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-btn-up-b"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><i class="icon-spinner icon-spin icon-large"></i>'+ row.Nombre +'</div></div></li>');

                }, errorHandler);
            }, errorHandler, nullHandler);


        }

        function LoadComboBill() {


            if (!window.openDatabase) {

                return;
            }

            db = openDatabase(shortName, version, displayName, maxSize);

            db.transaction(function (transaction) {
                transaction.executeSql('SELECT EstatusId,Descripcion FROM EstatusFactura;', [], function (transaction, result) {
                    if (result != null && result.rows != null) {
                        for (var i = 0; i < result.rows.length; i++) {
                            var row = result.rows.item(i);
                            $('#cboest').append('<option value="' + row.EstatusId + '">' + row.Descripcion + '</option>');
                        }
                    }

                }, errorHandler);
            }, errorHandler, nullHandler);

        }

        function LoadComboappointment() {


            if (!window.openDatabase) {

                return;
            }

            db = openDatabase(shortName, version, displayName, maxSize);

            db.transaction(function (transaction) {
                transaction.executeSql('SELECT CitaId,Folio FROM Cita;', [], function (transaction, result) {
                    if (result != null && result.rows != null) {
                        for (var i = 0; i < result.rows.length; i++) {
                            var row = result.rows.item(i);
                            $('#cbocit').append('<option value="' + row.CitaId + '">' + row.Folio + '</option>');
                        }
                    }

                }, errorHandler);
            }, errorHandler, nullHandler);

        }

        function AddBill() {

            db = openDatabase(shortName, version, displayName, maxSize);

            db.transaction(function (tx) {
                tx.executeSql('INSERT INTO Factura(Nombre,Cita,TPMS,Estatus) VALUES(?,?,?,?)', [$('#txtfac').val(), $('#cbocit').val(), $('#txttpm').val(), $('#cboest').val()], nullHandler, errorHandler);
            }, errorHandler, successCallBack);

        }

        function LoadListviewBill() {



            if (!window.openDatabase) {

                return;
            }

            db = openDatabase(shortName, version, displayName, maxSize);

            db.transaction(function (transaction) {
                transaction.executeSql('SELECT Nombre FROM Factura;', [], function (transaction, result) {
                    if (result != null && result.rows != null) {
                        for (var i = 0; i < result.rows.length; i++) {
                            var row = result.rows.item(i);
                            $('#listviewbill').append('<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="false" data-iconpos="right" data-theme="b" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-btn-up-b"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><i class="icon-spinner icon-spin icon-large"></i>' + row.Nombre + '</div></div></li>');
                        }
                    }

                }, errorHandler);
            }, errorHandler, nullHandler);

        }

        function LoadListviewProviders() {

            if (!window.openDatabase) {

                return;
            }

            db = openDatabase(shortName, version, displayName, maxSize);

            db.transaction(function (transaction) {
                transaction.executeSql('SELECT Nombre FROM Proveedor;', [], function (transaction, result) {
                    if (result != null && result.rows != null) {
                        for (var i = 0; i < result.rows.length; i++) {
                            var row = result.rows.item(i);
                            $('#listviewproviders').append('<li data-corners="false" data-shadow="false" data-iconshadow="true" data-wrapperels="div" data-icon="false" data-iconpos="right" data-theme="b" class="ui-btn ui-btn-icon-right ui-li-has-arrow ui-li ui-btn-up-b"><div class="ui-btn-inner ui-li"><div class="ui-btn-text"><i class="icon-spinner icon-spin icon-large"></i>' + row.Nombre + '</div></div></li>');
                        }
                    }

                }, errorHandler);
            }, errorHandler, nullHandler);

        }

        function LoadComboProviders() {


            if (!window.openDatabase) {

                return;
            }

            db = openDatabase(shortName, version, displayName, maxSize);

            db.transaction(function (transaction) {
                transaction.executeSql('SELECT TipoProveedorId,Descripcion FROM TipoProveedor;', [], function (transaction, result) {
                    if (result != null && result.rows != null) {
                        for (var i = 0; i < result.rows.length; i++) {
                            var row = result.rows.item(i);
                            $('#cbotip').append('<option value="' + row.TipoProveedorId + '">' + row.Descripcion + '</option>');
                        }
                    }

                }, errorHandler);
            }, errorHandler, nullHandler);

        }

        function AddProviders() {

            db = openDatabase(shortName, version, displayName, maxSize);

            db.transaction(function (tx) {
                tx.executeSql('INSERT INTO Proveedor(Tipo_de_Proveedor,Nombre) VALUES(?,?)', [$('#cbotip').val(), $('#txtnom').val()], nullHandler, errorHandler);
            }, errorHandler, successCallBack);

        }


        function CheckUser() {


            if (!window.openDatabase) {

                return;   //Usuario(Usuario, Contrasena
            }

            db = openDatabase(shortName, version, displayName, maxSize);

            db.transaction(function (transaction) {
                transaction.executeSql('SELECT Nombre FROM Usuario Where Usuario = ? and Contrasena = ?;', [$('#txtnom').val(), $('#txtpas').val()], function (transaction, result) {
                    if (result != null && result.rows != null) {

                        var row = result.rows.item(0);


                        transaction.executeSql('UPDATE Usuario SET Estatus = 0;', [], function (transaction, result) {
                        }, errorHandler);


                        updateUser();



                    }

                }, errorHandler);
            }, errorHandler, nullHandler);


        }


        function updateUser() {


            if (!window.openDatabase) {

                return;
            }

            db = openDatabase(shortName, version, displayName, maxSize);

            db.transaction(function (transaction) {


                transaction.executeSql('UPDATE Usuario SET Estatus = 1 Where Usuario = ? and Contrasena = ?;', [$('#txtnom').val(), $('#txtpas').val()], function (transaction, result) {
                }, errorHandler);

                openwindows();


            }, errorHandler, nullHandler);

        }


        function showName() {

            if (!window.openDatabase) {

                return;
            }

            db = openDatabase(shortName, version, displayName, maxSize);

            db.transaction(function (transaction) {

                transaction.executeSql('SELECT u.Nombre,b.Descripcion FROM Usuario u INNER JOIN Bodega b ON b.BodegaId=u.Bodega AND u.Estatus = 1', [], function (transaction, result) {
                    if (result.rows.length != 0) {

                        var row = result.rows.item(0);

                        document.getElementById("bodega").value = "Bodega: " + row.Descripcion + "      " + row.Nombre;
                        document.getElementById("bodega").style.color = "yellow";

                    }

                }, errorHandler);
            }, errorHandler, nullHandler);


        }

        function openwindows() {
            window.location.href = 'menuPrincipal.html';
        }


        function LoadFillProviders() {


            if (!window.openDatabase) {

                return;
            }

            db = openDatabase(shortName, version, displayName, maxSize);

            db.transaction(function (transaction) {
                transaction.executeSql('SELECT ProveedorId,Nombre FROM Proveedor;', [], function (transaction, result) {
                    if (result != null && result.rows != null) {
                        for (var i = 0; i < result.rows.length; i++) {
                            var row = result.rows.item(i);
                            $('#cboprov').append('<option value="' + row.ProveedorId + '">' + row.Nombre + '</option>');
                        }
                    }

                }, errorHandler);
            }, errorHandler, nullHandler);

        }


        function LoadFillRam() {


            if (!window.openDatabase) {

                return;
            }

            db = openDatabase(shortName, version, displayName, maxSize);

            db.transaction(function (transaction) {
                transaction.executeSql('SELECT RampaId,Descripcion FROM Rampa;', [], function (transaction, result) {
                    if (result != null && result.rows != null) {
                        for (var i = 0; i < result.rows.length; i++) {
                            var row = result.rows.item(i);
                            $('#cboram').append('<option value="' + row.RampaId + '">' + row.Descripcion + '</option>');
                        }
                    }

                }, errorHandler);
            }, errorHandler, nullHandler);

        }



        function insertcita() {

            if (!window.openDatabase) {

                return;
            }

            db = openDatabase(shortName, version, displayName, maxSize);

            db.transaction(function (transaction) {

                transaction.executeSql('SELECT u.Nombre,b.BodegaId FROM Usuario u INNER JOIN Bodega b ON b.BodegaId=u.Bodega AND u.Estatus = 1', [], function (transaction, result) {
                    if (result != null && result.rows != null) {

                        var row = result.rows.item(0);
                        //  tx.executeSql('INSERT INTO Cita(Folio,Proveedor,Rampa,Estatus,Bodega,Departamento) VALUES(?,?,?,?,?,?)', [$('#txRecibeFolio').val(), $('#cboprov').val(), $('#cboram').val(),1, row.BodegaId,1],nullHandler,errorHandler);

                        transaction.executeSql('INSERT INTO Cita(Folio,Proveedor,Rampa,Estatus,Bodega,Departamento) VALUES(?,?,?,?,?,?)', [$('#txRecibeFolio').val(), $('#cboprov').val(), $('#cboram').val(), 1, row.BodegaId, 1], function (transaction, result) {
                        }, errorHandler);



                    }

                }, errorHandler);
            }, errorHandler, nullHandler);

        }


        function openMenu() {
            window.location.href = 'menuPrincipal.html';
        }


        function LoadFacturas() {


            if (!window.openDatabase) {

                return;
            }
          var tabla = document.getElementById("tablaFacturasCita");
          tabla.innerHTML="";
          //var confirm =document.getElementById("Confirmar");
          //style.display = "none";
           //document.getElementById("Confirmar").style.display = "none";
            //$('#table-column-toggle').html('');
            db = openDatabase(shortName, version, displayName, maxSize);
            db.transaction(function (transaction) {
                transaction.executeSql('SELECT DISTINCT p.Factura as CveFactura, f.ESTATUS, f.Nombre, f.TPMS, e.Descripcion FROM Factura f INNER JOIN EstatusFactura e ON f.ESTATUS = e.EstatusId INNER JOIN Cita c ON f.Cita = c.CitaId INNER JOIN Producto p ON f.FacturaId = p.Factura WHERE c.Folio = ?;', [$('#txRecibeFolio').val()], function (transaction, result) {
                    //transaction.executeSql('SELECT f.ESTATUS, f.Nombre, f.TPMS, e.Descripcion FROM Factura f INNER JOIN EstatusFactura e ON f.ESTATUS = e.EstatusId INNER JOIN Cita c ON f.Cita = c.CitaId WHERE c.Folio = ?;', [$('#txRecibeFolio').val()], function(transaction, result) {

                    if (result != null && result.rows != null) {
                        for (var i = 0; i < result.rows.length; i++) {
                            var row = result.rows.item(i);
                            if (row.ESTATUS == 0) {
                                //$('#tablaFacturasCita').append('<tr> <td><input type="checkbox" name="checkbox-t-2a" id="checkbox-t-2a" data-theme="b" data-cacheval="false"></th> <td><a  data-rel="external">' + row.Nombre + '</a></td> <td id="Desc" >' + row.Descripcion + '</td> <td>' + row.ESTATUS + '</td> </tr>');        
                                //$('#tablaFacturasCita').append('<tr> <td><input type="checkbox" name="checkbox-t-2a" id="checkbox-t-2a" data-theme="b" data-cacheval="false"></th> <td><a  data-rel="external">' + row.Nombre + '</a></td> <td>'+row.Descripcion+'</td> <td>' + row.TPMS + '</td> </tr>');        
                                $('#tablaFacturasCita').append('<tr><td><input type="checkbox" name="checkbox-t-2a" id="checkbox-t-2a" data-theme="b" data-cacheval="false"></td><td><a href="#popupTomaFoto" onClick=bringDataTable(' + row.CveFactura + ') data-rel = "popup" class="ui-link-inherit" style="text-decoration:none;color:white">' + row.Nombre + '</a></td><td> <a href="#popupTomaFoto" onClick=bringDataTable(' + row.CveFactura + ') data-rel = "popup" class="ui-link-inherit" style="text-decoration:none;color:white">' + row.Descripcion + '</a></td><td><a href="#popupTomaFoto" onClick=bringDataTable(' + row.CveFactura + ') data-rel = "popup" class="ui-link-inherit" style="text-decoration:none;color:white">' + row.TPMS + '</a></td></tr>');
                                //$('#tablaFacturasCita').append('<tr><td><input type="checkbox" name="checkbox-t-2a" id="checkbox-t-2a" data-theme="b" data-cacheval="false"></td><td><a href="#popupTomaFoto" onClick=bringData('+ row.CveFactura +') data-rel = "popup" class="ui-link-inherit" style="text-decoration:none;color:white">-</a>'+row.Nombre+'</td><td> <a href="#popupTomaFoto" onClick=bringData('+ row.CveFactura +') data-rel = "popup" class="ui-link-inherit" style="text-decoration:none;color:white">-</a>'+row.Descripcion+'</td><td><a href="#popupTomaFoto" onClick=bringData('+ row.CveFactura +') data-rel = "popup" class="ui-link-inherit" style="text-decoration:none;color:white">-</a>'+row.TPMS+'</td></tr>');                
                                // document.getElementById("Confirmar").style.display = "block";
                            }
                            else {
                                //$('#tablaFacturasCita').append('<tr><td></th> <td><a  data-rel="external">' + row.Nombre + '</a></td> <td>' + row.Descripcion + '</td> <td >' + row.TPMS + '</td> </tr>');      
                                $('#tablaFacturasCita').append('<tr> <td></th><td><a href="#popupTomaFoto" onClick=bringDataTable(' + row.CveFactura + ') data-rel = "popup" class="ui-link-inherit" style="text-decoration:none;color:white">' + row.Nombre + '</a></td><td> <a href="#popupTomaFoto" onClick=bringDataTable(' + row.CveFactura + ') data-rel = "popup" class="ui-link-inherit" style="text-decoration:none;color:white">' + row.Descripcion + '</a></td><td><a href="#popupTomaFoto" onClick=bringDataTable(' + row.CveFactura + ') data-rel = "popup" class="ui-link-inherit" style="text-decoration:none;color:white">' + row.TPMS + '</a></td></tr>');
                            }
                            $("#table-column-toggle").table("refresh");
                        }
                    }
                }, errorHandler);
            }, errorHandler, nullHandler);
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
        //Esta función es la que funciona sin el PopUp
        function es() {
            $('#table-column-toggle tr').each(function (index) {
                var Check, Nombres, Desc;
                $(this).find('td').each(function (index2) {

                    //condicion = $(this).find('input[name="checkbox-t-2a"]').is(":checked");
                    // children = $(this).find('td').eq(2);
                    //var str;
                    //children = $(this).text();
                    //var $td = $(this).eq(2);
                    //str = $.trim($td.html()).substring(0, 20);
                    //  $td.text(str);
                    // alert(condicion + children);
                    // if(condicion == true)
                    //{
                    // alert("true" + children);
                    //}
                    // mytext = $(this).find('input').val();
                    //$(this).attr('checked' == true)

                    //alert(children);
                    //&& children == "Proceso"
                    //5012345678900
                    //children = $("tr td")[2].innerHTML;
                    //'eq(2)'
                    //.html().trim()
                    switch (index2) {
                        case 0: Check = $(this).find('input[name="checkbox-t-2a"]').is(":checked");
                            //break;
                        case 1: Nombres = $(this).text();
                            break;
                        case 2: Desc = $(this).text();
                            break;
                    }
                })
                alert(Check);
                if (Check == true && Desc == "Proceso") {
                    alert(Nombres);
                    //UpdateStatusFactura(Nombres);
                }

            })
        }


        function UpdateStatusFactura(Nombres) {
            var actualizado = false;
            if (!window.openDatabase) {

                return;
            }

            db = openDatabase(shortName, version, displayName, maxSize);
            if (actualizado == false) {
                db.transaction(function (transaction) {
                    transaction.executeSql('UPDATE Factura SET ESTATUS = 1 WHERE Nombre =?;', [Nombres], function (transaction, result) {
                        actualizado = true;
                        //alert("Actualizado");
                    }, errorHandler);
                }, errorHandler, nullHandler);
            }
            // alert(Nombres);
            //LoadFacturas();
        }

        function UpdateStatusFactura2(Nombres2) {
            var actualizado2 = false;
            if (!window.openDatabase) {

                return;
            }

            db = openDatabase(shortName, version, displayName, maxSize);
            if (actualizado2 == false) {
                db.transaction(function (transaction) {
                    transaction.executeSql('UPDATE Factura SET ESTATUS = 1 WHERE Nombre =?;', [Nombres2], function (transaction, result) {
                        actualizado2 = true;
                        //alert("Actualizado");
                    }, errorHandler);
                }, errorHandler, nullHandler);
            }
            // alert(Nombres2);
            //LoadFacturas();
        }


        function bringData(id) {
            db.transaction(function (tx) {
                tx.executeSql('SELECT * FROM Producto WHERE Factura=?', [id], function (tx, results) {
                    var len = results.rows.length

                    for (var i = 0; i < len; i++) {
                        var prod = document.getElementById("IdProducto");
                        var nom = document.getElementById("Nombre");
                        var cant = document.getElementById("Cantidad");
                        var fac = document.getElementById("IdFactura");

                        prod.value = 'IdProducto: ' + results.rows.item(i).Productoid;
                        nom.value = 'Nombre: ' + results.rows.item(i).Nombre;
                        cant.value = 'Cantidad: ' + results.rows.item(i).Cantidad;
                        fac.value = 'IdFactura: ' + results.rows.item(i).Factura;

                    }
                });
            });
        }


        //Esta función es la que funciona con el PopUp
        function e() {
            var Check;
            var Nombress, Descs, Codes;
            var count = 0;
            var permiso = false;
            $('#table-column-toggle tr').each(function (index) {

                $(this).find('td').each(function (index2) {

                    switch (index2) {
                        //case 0: Check =  $(this).find('input[name="checkbox-t-2a"]').is(":checked");  
                        //break;  
                        case 0: Check = $(this).find('input[name="checkbox-t-2a"]').is(":checked");
                            break;
                    }
                    if (Check == true) {

                        $(this).find('a').each(function (index3) {
                            count = count + 1;

                            if (count == 1) {
                                Nombress = $(this).text();
                                //alert(Nombress);           
                            }
                            else if (count == 2) {
                                Descs = $(this).text();
                                // alert(Descs);

                            }
                            else if (count == 3) {
                                Codes = $(this).text();
                                //alert(Codes);

                            }

                        })
                        if (count == 3) {
                            count = 0;
                            //alert(Nombress);
                            if (permiso == false) {
                                UpdateStatusFactura(Nombress);
                                permiso = true;
                            }
                            else if (permiso == true) {
                                UpdateStatusFactura2(Nombress);
                                permiso = false;
                            }


                        }

                    }
                })
            })
            return true;
        }

        function BuscaIdCita(){

  if (!window.openDatabase) {
  return;
 }
 db = openDatabase(shortName, version, displayName,maxSize);

  db.transaction(function(transaction) {
   transaction.executeSql('SELECT CitaId As Cve FROM Cita Where Folio=?;', [$('#txRecibeFolio').val()], function(transaction, result) {


     if (result != null && result.rows != null) {
        for (var i = 0; i < result.rows.length; i++) {
          var row = result.rows.item(i);
          LoadFacturas(row.Cve);
          
          } 
      }
     },errorHandler);
 },errorHandler,nullHandler);

}





function bringDataTable(Cve){

  if (!window.openDatabase) {
  return;
 }
 db = openDatabase(shortName, version, displayName,maxSize);

    $("#tablepopup tbody tr").remove(); 

  db.transaction(function(transaction) {
   transaction.executeSql('SELECT * FROM Producto Where Factura=?;', [Cve], function(transaction, result) {


     if (result != null && result.rows != null) {
        for (var i = 0; i < result.rows.length; i++) {
          var row = result.rows.item(i);
    
          $('#tablepopup').append('<tr><th>'+row.Productoid+'</th><th>'+row.Nombre+'</th><th>'+row.Cantidad+'</th><th>'+row.Factura+'</th><th> <input type="button" name="btnFoto" id="btnFoto" value="Toma Fotografía"></th></tr>');
          } 
      }
     },errorHandler);
 },errorHandler,nullHandler);

}