namespace EventInspector {
    window.addEventListener("load", handleLoad);

    function handleLoad(): void {
        document.addEventListener("mousemove", setinfoBox);
        document.addEventListener("click", logInfo);
        document.addEventListener("keyup", logInfo);
        document.querySelector("button").addEventListener("click", sendInfo);
    }

    function setinfoBox(_event: MouseEvent): void {
        let x: number = _event.clientX;
        let y: number = _event.clientY;
        let destination: string = _event.target + "";

        document.querySelector("span").style.left = (x + 10) + "px";
        document.querySelector("span").style.top = (y + 15) + "px";
        document.querySelector("span").innerHTML = "X-Position: " + x + "<br>" + "Y-Position: " + y + "<br>" + destination;
    }

    function logInfo(_event: Event): void {
        console.log("Event: ", _event);
        console.log("Event Type: ", _event.type);
        console.log("Event Target: ", _event.target);
        console.log("Current Target: ", _event.currentTarget);
    }

    function sendInfo(_event: Event): void {
        let customEvent: CustomEvent = new CustomEvent("Custom Event Button", {bubbles: true, detail: {Text: "This is a custom event button"}});
        _event.target.dispatchEvent(customEvent);
        console.log(customEvent);
    }
}