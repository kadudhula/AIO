

FBLogin();

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
				
				UserDetails = JSON.parse(e.result);
				alert(UserDetails);
					Titanium.App.Properties.setString("userID", UserDetails.username);
					SaveUserFromFB(UserDetails);
			} else {
				Ti.API.info("requestWithGraphPath " + e.error);
			}
		});
	  	
	  } 
 function SaveUserFromFB(user)
     {
     	alert("in save user");
     	GetCurrentPostion();
     	var userDetails={};
     	userDetails.UserID=user.id;
     	userDetails.UserName=user.username;
     	userDetails.Image=user.picture.data.url;
     	userDetails.Address=user.hometown;
     	userDetails.C_Latitude= Position. latitude;
     	userDetails.C_Logitude=Position. longitude;
     	userDetails.LoginType="FB";
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
     
     function GetCurrentPostion()
     {
     	
     	Titanium.Geolocation.getCurrentPosition(function(e)
       {
        if (!e.success || e.error)
       {
            alert('error in getCurrentPosition = ' + JSON.stringify(e.error));
            return;
        }
        var Position=[];
        Position. longitude = e.coords.longitude;
        Position. latitude = e.coords.latitude;
      });
     }
 