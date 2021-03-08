document.getElementById("test").onclick = function() {
    document.getElementById("test").style.color = "red";
    console.log("This probably gonna prints out");
    document.getElementById("test").style.textSize = "100px";
    console.log("Almost there");
    document.getElementById("go away").remove();
    console.log("The text don't go away? It means you fucked up");
    console.log("If this shows up, congrats, you're a master at JavaScript now");
}
