
    function updateClock(){
        
        const now = new date();
        const hours = now.getHours().toString().padStart(2,0);
        const minutes = now.getMinutes().toString().padStart(2,0);
        const seconds = now.getSeconds().toString().padStart(2,0);

        const timeString= `${hours}:${minutes}:${seconds}`;
        document.getElementsById('clock').textContent=timeString;















    }
    updateClock();
    // Makes the clok to update automatically
    setInterval(updateClock,1000);



























