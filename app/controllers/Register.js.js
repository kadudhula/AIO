



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
    
   function GetUserDetails()
	  {
	  	facebook.requestWithGraphPath('me', {
			'fields' : 'id,name,picture,hometown,username',
		}, 'GET', function(e) {
			
			if (e.success) {
				var User =[];
				User.Details = JSON.parse(e.result);
					Titanium.App.Properties.setString("userID", User.Details.username);
			} else {
				Ti.API.info("requestWithGraphPath " + e.error);
			}
		});
	  	
	  } 
 function SaveUserFromFB(user)
     {
     	var userDetails={};
		  var xhr = Titanium.Network.createHTTPClient();
			xhr.open('POST', url);
			xhr.onload = function() {
				xhr.setRequestHeader("content-type", "application/json");
				var data = JSON.parse(this.responseText);
			};
			xhr.onerror = function(e) {
				Ti.API.error(e.error);
				alert(e.error);
			};
			xhr.send(JSON.stringify(userDetails));	
     }
     
     function Saveuser()
     {
     	var userDetails={};
     	 var xhr = Titanium.Network.createHTTPClient();
			xhr.open('POST', url);
			xhr.onload = function() {
				xhr.setRequestHeader("content-type", "application/json");
				var data = JSON.parse(this.responseText);
			};
			xhr.onerror = function(e) {
				Ti.API.error(e.error);
				alert(e.error);
			};
			xhr.send(JSON.stringify(userDetails));	
     	
     }
 