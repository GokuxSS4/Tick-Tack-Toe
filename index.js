document.addEventListener('DOMContentLoaded',()=>{

    const tickTackTableDiv = document.getElementById("tick_tack_table");
    const resultDiv = document.getElementById("result");
    const tickTackArray = [undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined,undefined];
    let isTick = true;

    tickTackTableDiv.addEventListener('click',(e)=>{
        const cell = e.target;
        const index = cell.getAttribute("index");
        if(tickTackArray[index])return;
        if (isTick){
            cell.textContent = "0";
            isTick = false;
            tickTackArray[index] = "0"
            isWin();
        }
        else{
            cell.textContent = "X";
            isTick = true;
            tickTackArray[index] = "X"
            isWin();
        }
    });

    function isWin(){
        const possibility = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
        for (let i =0 ; i< possibility.length;i++){
            if(tickTackArray[possibility[i][0]] && tickTackArray[possibility[i][0]]==tickTackArray[possibility[i][1]] && tickTackArray[possibility[i][0]]==tickTackArray[possibility[i][2]]){
                const player = tickTackArray[possibility[i][0]] == "X"? "X":"0";
                resultDiv.textContent = `${player} Won`;
            }
        }
    }
});