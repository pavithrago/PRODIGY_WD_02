const btnstart=document.querySelector('.start');
const btnstop=document.querySelector('.stop');
const btnsreset=document.querySelector('.reset');


let hour=min=sec=ms=0,startTimer;//default value
btnstart.addEventListener('click',()=>{
    btnstart.classList.add('start-active');
    btnstop.classList.remove('stop-active');
 startTimer=setInterval(()=>{
    ms++;//ms+=1
    if(ms==100){
         sec++;
         ms=0;
    }
    if(sec==60){
        min++;
        sec=0;
   }
   if(min==60){
    hour++;
    min=0;
}
updateDisplay();

 },10)
});
btnstop.addEventListener('click',()=>{
 clearInterval(startTimer);
 btnstart.classList.remove('start-active');
 btnstop.classList.add('stop-active');
});
btnsreset.addEventListener('click',()=>{
    hour=min=sec=ms=0;
    clearInterval(startTimer);
    updateDisplay();
    btnstart.classList.remove('start-active');
    btnstop.classList.add('stop-active');
});
function updateDisplay(){
    //Formatted  display
    phour=hour<10?'0'+hour:hour;
    pmin=min<10?'0'+min:min;
    psec=sec<10?'0'+sec:sec;
    pms=ms<10?'0'+ms:ms;
//output
    document.querySelector('.hour').innerText=phour;
    document.querySelector('.min').innerText=pmin;
    document.querySelector('.sec').innerText=psec;
    document.querySelector('.ms').innerText=pms;


}