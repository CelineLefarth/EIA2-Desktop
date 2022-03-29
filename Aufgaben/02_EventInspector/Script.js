var EventInspector;
(function (EventInspector) {
    window.addEventListener("load", handleLoad);
    function handleLoad() {
        document.addEventListener("mousemove", setinfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.querySelector("button").addEventListener("click", sendInfo);
    }
    function setinfoBox(_event) {
        let x = _event.clientX;
        let y = _event.clientY;
        let destination = _event.target + "";
        document.querySelector("span").style.left = (x + 10) + "px";
        document.querySelector("span").style.top = (y + 15) + "px";
        document.querySelector("span").innerHTML = "X-Position: " + x + "<br>" + "Y-Position: " + y + "<br>" + destination;
    }
    function logInfo(_event) {
        console.log("Event: ", _event);
        console.log("Event Type: ", _event.type);
        console.log("Event Target: ", _event.target);
        console.log("Current Target: ", _event.currentTarget);
    }
    function sendInfo(_event) {
        let customEvent = new CustomEvent("Custom Event Button", { bubbles: true, detail: { Text: "This is a custom event button" } });
        _event.target.dispatchEvent(customEvent);
        console.log(customEvent);
    }
})(EventInspector || (EventInspector = {}));
//# sourceMappingURL=Script.js.map