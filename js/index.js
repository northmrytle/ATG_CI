var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // `load`, `deviceready`, `offline`, and `online`.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.getElementById('scan').addEventListener('click', this.scan, false);
//        document.getElementById('settings').addEventListener('click', this.settings, false);
//        document.getElementById('settings_close').addEventListener('click', this.settings_close, false);
        document.getElementById('btnNext').addEventListener('click', this.openWebApp, false);
    },
    
    // deviceready Event Handler
    //
    // The scope of `this` is the event. In order to call the `receivedEvent`
    // function, we must explicity call `app.receivedEvent(...);`
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    
    openWebApp: function(){
        var scanText = document.getElementById("scantext").value;
        var webAppUrl = "http://192.168.2.235/ATG_CI/Checkin.aspx?scan=" + scanText;
        var ref = window.open(webAppUrl, '_self', 'location=yes');

        ref.addEventListener('loadstart', function() { alert('start: ' + event.url); });
        ref.addEventListener('loadstop', function() { alert('stop: ' + event.url); });
        ref.addEventListener('exit', function() { alert(event.type); });
         
//        ref.addEventListener('loadstop', function(event) {        
//            if (event.url.match("mobile/close")) {
//                ref.close();}        
    },
            
//    settings: function() {
//        document.getElementById("light").setAttribute('style', 'display:block');
//        document.getElementById("fade").setAttribute('style', 'display:block');
//                
//        var webAppUrl = window.applicationPreferences.get(
//                "webAppUrl", 
//                function(value) {alert("Value is " + value);}, 
//                function(error) {alert("Error! " + JSON.stringify(error));}
//                )
//    },
//
//    settings_close: function(){
//        
//        var webAppUrl = document.getElementById("webAppUrl").value;
//        
//        window.applicationPreferences.set("webAppUrl", webAppUrl, 
//                function() {alert("Successfully saved!");},
//                function(error) {alert("Error! " + JSON.stringify(error));}
//                );
//               
//        document.getElementById("light").setAttribute('style', 'display:none');
//        document.getElementById("fade").setAttribute('style', 'display:none');
//        
//    },
      
    scan: function() {
        console.log('scanning');

        var scanner = cordova.require("cordova/plugin/BarcodeScanner");

        scanner.scan(function(result) {

//            alert("We got a barcode\n" + 
//            "Result: " + result.text + "\n" + 
//            "Format: " + result.format + "\n" + 
//            "Cancelled: " + result.cancelled);  

//            document.getElementById("info").innerHTML = result.text;
//            document.getElementById("scan").value = "1GNFK13509R163698";

            var webAppUrl = "http://192.168.2.235/ATG_CI/Checkin.aspx?scan=" + result.text;
            var ref = window.open(webAppUrl, '_blank', 'location=yes');
            ref.addEventListener('loadstop', function(event) {        
                if (event.url.match("mobile/close")) {
                    ref.close();
                }
            });
            
        }, function(error) {
            console.log("Scanning failed: ", error);
        });
    }

};
