
    
    // Wait for device API libraries to load
    //
    var lastc ;

    function onLoad() {
        
        document.addEventListener("online", onOnline, false);
        document.addEventListener("deviceready", onDeviceReady, false);
        document.addEventListener("offline", onOffline, false);
    
    }

    // device APIs are available
    //
    function onDeviceReady() {
        
    }

    // Handle the online event
    //
    function onOnline() {
       document.getElementById("internet").style.fontWeight = "900";
       document.getElementById("internet").value = "Conexion = Conectado";
       document.getElementById("internet").style.color = "green";
    }
          
    // Handle the offline event
    //
    function onOffline() {
        document.getElementById("internet").style.fontWeight = "900";
       document.getElementById("internet").style.color = "red";
        document.getElementById("internet").value = "Conexion = Desconectado";
    }

