document.getElementById("cookbook button").onclick = function() {
    document.getElementById("test").style.color = "red";
    console.log("This probably gonna prints out")
    document.getElemenyById("test").style.textSize = "100px";
    console.log("Almost there")
    document.getElementById("go away").remove();
    console.log("The text don't go away? It means you fucked up")
}
