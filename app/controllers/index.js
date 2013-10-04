$.loginWindow.open();
  Alloy.createController("Register").getView().open();

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
		    	GetUserDetails();	
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
   
function FBLoginCheck(userID)
   {
   	 var xhr = Titanium.Network.createHTTPClient();
	xhr.open('GET', url);
	xhr.onload = function() {
		var user = JSON.parse(this.responseText);
		alert(user);
		return user;
	};
	xhr.onerror = function(e) {
		Ti.API.error(e.error);
		alert(e.error);
	};
	xhr.send();
   	 
   }
   
  function GetUserDetails()
  {
  	facebook.requestWithGraphPath('me', {
		'fields' : 'id',
	}, 'GET', function(e) {
		
		if (e.success) {
		
			UserDetails = JSON.parse(e.result);
				Titanium.App.Properties.setString("userID", UserDetails.id);
			FBLoginCheck(User.Details.id);
		} else {
			Ti.API.info("requestWithGraphPath " + e.error);
		}
	});
  	
  } 
   
  function GetCurrentPosition() 
         {
			Titanium.Geolocation.getCurrentPosition(function(e) {
				if (!e.success || e.error) {
		
					alert('error ' + JSON.stringify(e.error));
					return;
				}
				var longitude = e.coords.longitude;
				var latitude = e.coords.latitude;
				var altitude = e.coords.altitude;
				var heading = e.coords.heading;
				var accuracy = e.coords.accuracy;
		        var CurrentPosition =[];
		        CurrentPosition.longitude=longitude;
		        CurrentPosition.latitude=latitude;
	         });
         }
         
 
 