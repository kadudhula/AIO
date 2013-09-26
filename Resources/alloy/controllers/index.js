function Controller() {
    function Login() {}
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
    Login ? $.__views.btnLogin.addEventListener("click", Login) : __defers["$.__views.btnLogin!click!Login"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.loginWindow.open();
    __defers["$.__views.btnLogin!click!Login"] && $.__views.btnLogin.addEventListener("click", Login);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;