function picture(sw) {
if (sw === 0){ 
pict = "1.jpg";

    document.getElementById('change').style.zoom="3";
        document.getElementById('body').style.backgroundColor="black";

}
else if(sw === 1){
pict="2.jpg"
}
    else if(sw===2){
    pict="3.jpg";
    }
    else if(sw===3){
    pict="4.jpg"
    }
    else if(sw === 4){
    
    pict="baje.jpg"
    }
    
    else if(sw === 5){
    
    pict="dreamHigh.jpg"
    }
    
    else if(sw === 6){
    
    pict="millionare.jpg"
    }
    else{
    pict="princessHour.jpg"
    }
    document.getElementById("change").src=pict;
}


var a=document.getElementById('code').innerHTML;
function check(){
    if(a===""){
    alert('enter something');
    }
    else{
    
    }

    
    
}