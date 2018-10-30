function greet() {
    window.alert("Gerard");
}



function init() {
    document.getElementById("first").src = "flower1.png";


    //2
    document.getElementById("container").getElementsByTagName("img")[1].src = "flower2.png";
    document.getElementById("container").getElementsByTagName("img")[3].src = "flower2.png";


    //3
    document.getElementById("uniqe").innerHTML = "You are doing great!";


    //4
    let image = document.createElement("img");
    image.setAttribute("src","flower2.png");
    document.getElementById("new_element").appendChild(image);


    //5
    let spans = document.getElementById("rainbow").getElementsByTagName("span");
    let colors = ["red", "orange","yellow","green","blue","purple","pink"];

    for (var i = spans.length - 1; i >= 0; i--) {
        spans[i].style.color = colors[i];
    }


    //6
    var changeSrc = function (event) {
        if (event.target.src) {
            let filename = event.target.src.replace(/^.*[\\\/]/, '');
            if (filename == "flower1.png") {
                event.target.src = "flower2.png";
            } else {
                event.target.src = "flower1.png";
            }
        }


    };

    document.getElementById("event").addEventListener("mouseover", changeSrc);

}