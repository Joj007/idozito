let maxtime = 12
let time = maxtime
const intervalID = setInterval(myCallback, 1000);
let rot = 0
let rot2 = 150
let rot3 = 330
let rot4 = 220
let red = 0
let green = 255
let blue = 0
let isPaused = false
let nyomasokSzama = 0
let bolygok = [document.getElementById("kor"), document.getElementById("kor2")]
function myCallback() {
    if (!isPaused) {
        rot+=360/maxtime
        rot2+=360/maxtime*2
        rot3+=360/maxtime*0.3
        rot4+=360/maxtime*0.7
        document.getElementById("kor").style.rotate = `${rot}deg`
        document.getElementById("kor2").style.rotate = `${rot2}deg`
        document.getElementById("kor3").style.rotate = `${rot3}deg`
        document.getElementById("kor4").style.rotate = `${rot4}deg`
        time--
        red += 255/maxtime
        green -= 255/maxtime
        document.getElementById("potty").style.backgroundColor=`rgb(${red},${green},${blue})`
        document.getElementById("szoveg").value = `${Math.floor(time/60)}:${time%60>=10?time%60:'0'+time%60}`
        if(time<1){
            time = maxtime
            red = 0
            green = 255
            blue = 0
        } 
    }
}

function allit(){
    nyomasokSzama++
    if (isPaused) {
        isPaused = false
    }
    else{
        isPaused = true
    }
    if (nyomasokSzama > 20) {
        alert("A románokat verd ne a gombot")
        nyomasokSzama = 0
    }
}

function iras(){
    isPaused = true
}

function ujErtek(){
    let ertek = document.getElementById("szoveg").value
    let ertekTomb = ertek.split(':')
    if (ertekTomb.length == 1) {
        maxtime = ertek
    }
    else{
        maxtime = ertekTomb[0] * 60 + ertekTomb[1]*1
    }
    time = maxtime
    red = 0
    green = 255
    blue = 0
    rot = 0
    rot2 = 150
    rot3 = 330
    rot3 = 220
    isPaused = false
}