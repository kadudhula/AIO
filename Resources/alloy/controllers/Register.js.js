function Controller() {
    function FBLogin() {
        var facebook = require("facebook");
        facebook.appid = "1410669699149378";
        facebook.permissions = [ "publish_stream", "read_stream" ];
        facebook.forceDialogAuth = true;
        facebook.addEventListener("login", function(e) {
            e.success ? GetUserDetails() : e.error ? alert(e.error) : e.cancelled && alert("Canceled");
        });
        if (facebook.loggedIn) {
            facebook.logout();
            facebook.authorize();
        } else {
            Ti.API.info("facebook.loggedIn clicked: ");
            facebook.authorize();
        }
    }
    function GetUserDetails() {
        facebook.requestWithGraphPath("me", {
            fields: "id,name,picture,hometown,username"
        }, "GET", function(e) {
            if (e.success) {
                UserDetails = JSON.parse(e.result);
                alert(UserDetails);
                Titanium.App.Properties.setString("userID", UserDetails.username);
                SaveUserFromFB(UserDetails);
            } else Ti.API.info("requestWithGraphPath " + e.error);
        });
    }
    function SaveUserFromFB() {
        alert("in save user");
        GetCurrentPostion();
        var userDetails = {};
        userDetails.UserName = UserDetails.username;
        var xhr = Titanium.Network.createHTTPClient();
        xhr.open("POST", url);
        xhr.onload = function() {
            xhr.setRequestHeader("content-type", "application/json");
            JSON.parse(this.responseText);
        };
        xhr.onerror = function(e) {
            Ti.API.error(e.error);
            alert(e.error);
        };
        xhr.send(JSON.stringify(userDetails));
    }
    function GetCurrentPostion() {
        Titanium.Geolocation.getCurrentPosition(function(e) {
            if (!e.success || e.error) {
                alert("error in getCurrentPosition = " + JSON.stringify(e.error));
                return;
            }
            var Position = [];
            Position.longitude = e.coords.longitude;
            Position.latitude = e.coords.latitude;
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "Register.js";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.Register.js = Ti.UI.createView({
        id: "Register.js"
    });
    $.__views.Register.js && $.addTopLevelView($.__views.Register.js);
    exports.destroy = function() {};
    _.extend($, $.__views);
    FBLogin();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;