// 時間のカウント用
let h = 0;
let m = 0;
let s = 0;
let ms = 0;

// setintarbal,clearintarbal用
let timelog = 0;

// 有効化・無効化用
let startbutton = document.getElementById('start');
let stopbutton  = document.getElementById('stop');
let resetbutton = document.getElementById('reset');

function StartTimer(){
  console.log("start");
  timelog = setInterval(CountTime,100);
  
  startbutton.disabled = true;
  stopbutton.disabled  = false;
  resetbutton.disabled = false;
}

function StopTimer(){
  clearInterval(timelog);
  
  startbutton.disabled = false;
  stopbutton.disabled  = true;
  resetbutton.disabled = false;
  
}

function ResetTimer(){
  h  = 0;
  m  = 0;
  s  = 0;
  ms = 0;
  clearInterval(timelog);
  
  NowTime = document.getElementById('timer');
  NowTime.innerHTML = h +": " + m + ": " + s + ": " + ms;
  
  startbutton.disabled = false;
  stopbutton.disabled  = true;
  resetbutton.disabled = true;
}




CountTime = function(){
  ms += 1
  if (ms == 10){
    ms = 0;
    s += 1; 
  }
  if (s == 60){
    s = 0;
    m += 1;
  }
  if (m == 60){
    m = 0;
    h += 1;
  }
  NowTime = document.getElementById('timer');
  NowTime.innerHTML = h+": " + m + ": " + s + ": " + ms;
}