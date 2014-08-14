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
        document.getElementById('settings').addEventListener('click', this.settings, false);
        document.getElementById('settings_close').addEventListener('click', this.settings_close, false);
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
    
    settings: function() {
        document.getElementById("light").setAttribute('style', 'display:block');
        document.getElementById("fade").setAttribute('style', 'display:block');
        
        alert("getting settings");
        
//        var webAppUrl = window.applicationPreferences.get(
//                "webAppUrl", 
//                function(value) {alert("Value is " + value);}, 
//                function(error) {alert("Error! " + JSON.stringify(error));}
//                )
    },

    settings_close: function(){
//        alert("settings_save");
        
        var webAppUrl = document.getElementById("webAppUrl").value;
        
        alert("saving " + webAppUrl);

//        window.applicationPreferences.set("webAppUrl", webAppUrl, 
//                function() {alert("Successfully saved!");},
//                function(error) {alert("Error! " + JSON.stringify(error));}
//                );
//               
//        document.getElementById("light").setAttribute('style', 'display:none');
//        document.getElementById("fade").setAttribute('style', 'display:none');
    },
        
    settings_save: function() {
    
        alert("settings_save");
        
//        var webAppUrl = document.getElementById("webappurl").value;
//        alert("saving " + webAppUrl);
        
//        window.applicationPreferences.set("webAppUrl", webAppUrl, 
//            function() {alert("Successfully saved!");},
//            function(error) {alert("Error! " + JSON.stringify(error));}
//            );
    },      
    
    scan: function() {
        console.log('scanning');

        var scanner = cordova.require("cordova/plugin/BarcodeScanner");

        scanner.scan(function(result) {

//            alert("We got a barcode\n" + 
//            "Result: " + result.text + "\n" + 
//            "Format: " + result.format + "\n" + 
//            "Cancelled: " + result.cancelled);  

            console.log("Scanner result: \n" +
                    "text: " + result.text + "\n" +
                    "format: " + result.format + "\n" +
                    "cancelled: " + result.cancelled + "\n");
            document.getElementById("info").innerHTML = result.text;

//            document.getElementById("scan").value = "1GNFK13509R163698";

            console.log(result);

//            var ref = window.open('http://www.google.com?q=' + result.text, '_blank', 'location=yes');
//            var ref = window.open('http://192.168.2.235/atg_ci/checkin.aspx?scan=' + result.text, '_blank', 'location=yes');

        }, function(error) {
            console.log("Scanning failed: ", error);
        });
    }

};
