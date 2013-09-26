$.loginWindow.open();
  

function Login()
{
    var userName=$.txtUserName.value;
	var password=$.txtPassword.value.trim();
    url="";
    var xhr = Titanium.Network.createHTTPClient();
	xhr.open('GET', url);
	xhr.onload = function() {
		var json = JSON.parse(this.responseText);
		alert(json);
		// Alloy.createController("CustomerLookup").getView().open();
 	CloseWindow();
	};
	xhr.onerror = function(e) {
		Ti.API.error(e.error);
		alert(e.error);
	};
	xhr.send();
}

function FBLogin()
{
var facebook = require('facebook');
facebook.appid = "1410669699149378";
facebook.permissions = ['publish_stream', 'read_stream'];
facebook.forceDialogAuth = true;
facebook.addEventListener('login', function(e) {
    if (e.success) {
    } else if (e.error) {
        alert(e.error);
    } else if (e.cancelled) {
        alert("Canceled");
    }
});

if (!facebook.loggedIn) {
		Ti.API.info('facebook.loggedIn clicked: ' );
	facebook.authorize();
} else {
	facebook.logout();
	facebook.authorize();
}
}
