let leapYear=parseInt(window.prompt("Enter a year:"))
if (leapYear%4==0){
    if(leapYear%100==0){
        document.write("Leap year")
        if(leapYear%400==0){
            document.write("Leap year")
        }else{
            document.write("Not Leap year")
        }    
    }else{
        document.write("Not leap year")
    }
}else{
    document.write("Not leap year")
}

   