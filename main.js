const startTime=new Date();

function updatetime(){
    const displayTime = document.getElementById('time');
    const currentTime = new Date();
    const timeDiff = (currentTime-startTime)/1000;
    displayTime.innerHTML=timeDiff.toFixed(0);
}

setInterval(updatetime,1000);