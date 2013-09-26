module.exports = [ {
    isClass: true,
    priority: 10000.0002,
    key: "container",
    style: {
        backgroundColor: "white"
    }
}, {
    isId: true,
    priority: 100000.0003,
    key: "txtUsername",
    style: {
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#336699",
        top: "100",
        left: "10",
        width: "300",
        height: "60",
        hintText: "Mobile No"
    }
}, {
    isId: true,
    priority: 100000.0004,
    key: "txtPassword",
    style: {
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#336699",
        top: "180",
        left: "10",
        width: "300",
        height: "60",
        hintText: "Password"
    }
} ];