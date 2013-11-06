module.exports = [ {
    isClass: true,
    priority: 10000.0008,
    key: "container",
    style: {}
}, {
    isId: true,
    priority: 100000.0009,
    key: "txtName",
    style: {
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#336699",
        top: "40",
        left: "10",
        width: "165",
        height: "60",
        hintText: "Name"
    }
}, {
    isId: true,
    priority: 100000.001,
    key: "txtMobileNo",
    style: {
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#336699",
        top: "40",
        left: "185",
        width: "165",
        height: "60",
        hintText: "Mobile No"
    }
}, {
    isId: true,
    priority: 100000.0011,
    key: "txtPassword",
    style: {
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        width: "165",
        height: "60",
        color: "#000",
        top: "90",
        left: "10",
        hintText: "Password"
    }
} ];