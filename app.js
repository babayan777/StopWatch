var ms = 0, s = 0, m = 0;
var timer;

var stopwatchEl = document.querySelector('.stopwatchElement');
var lapsContainer = document.querySelector('.laps');
var buttonContainer = document.querySelector('.controls');

function start(){
    if(!timer){
    timer = setInterval(run,10);
    buttonContainer.innerHTML = `
    <button class="stop" onclick="stop()">Stop</button>
    <button class="interval" onclick="interval()">Interval</button>
    `
    document.querySelector('.stop').classList.add('stopAn');
    document.querySelector('.interval').classList.add('intervalAn');
    }
}

function run(){
    stopwatchEl.textContent = (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms);
    ms++;
    if(ms == 100){
        ms = 0;
        s++;
    }
    if(s == 60){
        s = 0;
        m++;
    }
}

function stop(){
    clearInterval(timer);
    timer = false;
    if(document.querySelector('.stop').textContent == "Stop"){
        buttonContainer.innerHTML = `
        <button class="continue" onclick="Continue()">Continue</button>
        <button class="reset" onclick="reset()">Reset</button>
        `
    }
}


var n = 0;

function reset(){
    clearInterval(timer)
    timer = false;
    ms = 0;
    s = 0;
    m = 0;
    stopwatchEl.textContent = (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms);
    document.querySelector('.continue').classList.add('continueAn');
    document.querySelector('.reset').classList.add('resetAn');

    setTimeout(function(){ 
        buttonContainer.innerHTML = `
        <button class="start" onclick="start()">Start</button> `; }, 500);

    document.querySelector(".laps").innerHTML = "";
    n = 0;
}

function Continue(){
    if(!timer){
        timer = setInterval(run,10);
        buttonContainer.innerHTML = `
        <button class="stop" onclick="stop()">Stop</button>
        <button class="interval" onclick="interval()">Interval</button>
        `
        document.querySelector('.stop').style.opacity = '1';
        document.querySelector('.stop').style.transform = 'translate(0px)';

        document.querySelector('.interval').style.opacity = '1';
        document.querySelector('.interval').style.transform = 'translate(0px)';
     }
}

function getTimer(){
    return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s) + ":" + (ms < 10 ? "0" + ms : ms);
}


function interval(){
    n++;
        document.querySelector('.laps').innerHTML = `<span><h5>${n}</h5><p>Lap</p><h3>${getTimer()}</h3></span>` + document.querySelector('.laps').innerHTML;
}
