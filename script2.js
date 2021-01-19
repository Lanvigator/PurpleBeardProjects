let body = document.querySelector("body");

function grade() {

    let percentage = parseInt(document.getElementById("Result").value)

        console.log(percentage)
           

        if (percentage >= 70)
        {document.getElementById("Result").style.backgroundColor = "Blue";
        
    } else if (percentage >= 60 && percentage < 70)
    { 
    document.getElementById("Result").style.backgroundColor = "Yellow";
    
    } else if (percentage >= 50 && percentage < 60) 
    {
        document.getElementById("Result").style.backgroundColor = "Green";
    } else if (percentage < 50)
    {
        document.getElementById("Result").style.backgroundColor = "Red";
    }

}


