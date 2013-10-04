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
    function FBLoginCheck() {
        var xhr = Titanium.Network.createHTTPClient();
        xhr.open("GET", url);
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
    function GetUserDetails() {
        facebook.requestWithGraphPath("me", {
            fields: "id"
        }, "GET", function(e) {
            if (e.success) {
                UserDetails = JSON.parse(e.result);
                Titanium.App.Properties.setString("userID", UserDetails.id);
                FBLoginCheck(User.Details.id);
            } else Ti.API.info("requestWithGraphPath " + e.error);
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.loginWindow = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "loginWindow"
    });
    $.__views.loginWindow && $.addTopLevelView($.__views.loginWindow);
    $.__views.loginView = Ti.UI.createView({
        id: "loginView"
    });
    $.__views.loginWindow.add($.__views.loginView);
    $.__views.txtUserName = Ti.UI.createTextField({
        id: "txtUserName"
    });
    $.__views.loginView.add($.__views.txtUserName);
    $.__views.txtPassword = Ti.UI.createTextField({
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#336699",
        top: "180",
        left: "10",
        width: "300",
        height: "60",
        hintText: "Password",
        id: "txtPassword"
    });
    $.__views.loginView.add($.__views.txtPassword);
    $.__views.btnLogin = Ti.UI.createButton({
        title: "Login",
        id: "btnLogin"
    });
    $.__views.loginView.add($.__views.btnLogin);
    FBLogin ? $.__views.btnLogin.addEventListener("click", FBLogin) : __defers["$.__views.btnLogin!click!FBLogin"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.loginWindow.open();
    Alloy.createController("Register").getView().open();
    __defers["$.__views.btnLogin!click!FBLogin"] && $.__views.btnLogin.addEventListener("click", FBLogin);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;