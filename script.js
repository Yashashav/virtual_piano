// function checkKeyPress(event) {
//     let keysPiano = ["A", "S", "D","F","G","H","J"]
//     if (keysPiano.includes(event.key)) {
//         console.log("The {0} key is pressed.".format(event.key))
//     }
//     else {
//         console.log("Please press the keys shown on the keyboard")
//     }
// }

document.addEventListener("keypress", function(event) {
    let keysPiano = ["A", "S", "D","F","G","H", "a", "s", "d","f","g","h", "W", "E", "T","Y","U", "w", "e", "t","y","u"]
    if (keysPiano.includes(event.key)) {
        let audio = new Audio("music/" + event.key.toUpperCase() + ".mp3")
        audio.play()
        console.log(audio.src)
        console.log(event.key.toUpperCase())
    }

});