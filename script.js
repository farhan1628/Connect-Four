let turn = 0;
let array = [];
function changecolor(well){
    
    if(turn%2 == 0){
        if(!array.includes(well)){
            let bell = well + 7;
            let bottomrow = [36,37,38,39,40,41,42];
            if(bottomrow.includes(well)){
                document.getElementById(well).style.backgroundColor = "yellow";
                turn = turn + 1;
                array.push(well);
                win(well);
                
            }
            else{
                if(document.getElementById(bell).style.backgroundColor == "yellow" || document.getElementById(bell).style.backgroundColor == "red"){
                    document.getElementById(well).style.backgroundColor = "yellow";
                    turn = turn + 1;
                    array.push(well);
                    win(well);
                }
            }

            
            
            
        }
        
        
    }

    else{
        if(!array.includes(well)){
            let bell = well + 7;
            let bottomrow = [36,37,38,39,40,41,42];
            if(bottomrow.includes(well)){
                document.getElementById(well).style.backgroundColor = "red";
                turn = turn + 1;
                array.push(well);
                win(well);
                
            }
            else{
                if(document.getElementById(bell).style.backgroundColor == "yellow" || document.getElementById(bell).style.backgroundColor == "red"){
                    document.getElementById(well).style.backgroundColor = "red";
                    turn = turn + 1;
                    array.push(well);
                    win(well);
                }
            }

            
            
            
        }
        
    }
    
}


function clearboard(){
    document.querySelectorAll(".key").forEach(key => {
        key.style.backgroundColor = "white";
        array = [];
        turn = 0;
    });
    
}

function draw(){
    let currentdraw = document.getElementById("draw1").innerHTML;
    let numbercurrentdraw = Number(currentdraw);
    let newdraw = eval(numbercurrentdraw + 1);
    document.getElementById("draw1").innerHTML = newdraw;
    document.getElementById("draw2").innerHTML = newdraw;    
    
}



function win(well) {
    let color = document.getElementById(well).style.backgroundColor

    let dirs = [1, 7, 6, 8]; // right, down, diag1, diag2

    for (let d of dirs) {
        let count = 1;

        for (let i = 1; i < 4; i++) {
            if (document.getElementById(well + d*i)?.style.backgroundColor === color) count++;
            
            else break;
        }

        for (let i = 1; i < 4; i++) {
            if (document.getElementById(well - d*i)?.style.backgroundColor === color) count++;
            else break;
        }

        if (count >= 4) {
            gameend(color);
            return;
        }
    }
    changecolor(well)
}

function gameend(color){
    if(color === "yellow"){
        console.log("yellow");
        let win1 = document.getElementById("wins1").innerHTML;
        let numberwin1 = Number(win1);
        let newwin1 = eval(numberwin1 + 1);
        document.getElementById("wins1").innerHTML = newwin1;
        let losses2 = document.getElementById("losses2").innerHTML;
        let numberlosses2 = Number(losses2);
        let newlosses2 = eval(numberlosses2 + 1);
        document.getElementById("losses2").innerHTML = newlosses2; 
        document.getElementById("winningh1").style.color = "yellow";
        document.getElementById("winningcolor").innerHTML = "Yellow";
        document.getElementById("winnerbox").style.visibility = "visible";
        // document.getElementById("winnerbox").style.marginLeft = "-1170px";
        // document.getElementById("winnerbox").style.marginTop = "100px";
        // document.getElementById("winnerbox").style.backgroundColor = "white";
        // document.getElementById("winnerbox").style.borderRadius = "13px";
        // document.getElementById("winnerbox").style.width = "530px";
        // document.getElementById("winnerbox").style.height = "300px";
    }
    else{
        console.log("red");
        let win2 = document.getElementById("wins2").innerHTML;
        let numberwin2 = Number(win2);
        let newwin2 = eval(numberwin2 + 1);
        document.getElementById("wins2").innerHTML = newwin2;
        let losses1 = document.getElementById("losses1").innerHTML;
        let numberlosses1 = Number(losses1);
        let newlosses1 = eval(numberlosses1 + 1);
        document.getElementById("losses1").innerHTML = newlosses1;
        document.getElementById("winningh1").style.color = "red";  
        document.getElementById("winningcolor").innerHTML = "Red";
        document.getElementById("winnerbox").style.visibility = "visible";
    }
}

function hide(){
    document.getElementById("winnerbox").style.display = "none";
}