const container = document.querySelector(".container")
let i = 0
let y = 0
let row = 16
let collum = 16
const box = []
const rowArr = []
let isDrawing = false

onpointerdown = () => {
    isDrawing = true
}
onpointerup = () => {
    isDrawing =false
}


function creareGrid(row , collum){

    for (i = 0; i < row ; i++){
        rowArr[i] = document.createElement("div")
        rowArr[i].classList.add("row")
        container.appendChild(rowArr[i])
        rowArr[i].style.display = "flex"
       
    
        for (y = 1; y < collum; y++){
            box[y] = document.createElement("div")
            box[y].classList.add("box")
            box[y].style.flex = "1 1 auto"
            box[y].style.aspectRatio = "1 / 1"
            box[y].style.boxSizing = "border-box";
            box[y].addEventListener("mouseover", function() {
                if (isDrawing) {
                    this.style.backgroundColor = document.getElementById("color").value;

                }
            
})
            

            // box[y].style.flex = "1 1 auto"
            rowArr[i].appendChild(box[y])
            
        }   
    }
}
function returnGrid(){
    cleanGrid()
    row = document.getElementById("row").value
    collum = document.getElementById("collum").value
    creareGrid(row , collum)
}
function cleanGrid() {
   let boxRemove = document.querySelectorAll(".box")
   let rowRemove = document.querySelectorAll("row")

   boxRemove.forEach(box => {
    box.remove()
    
   });
   rowRemove.forEach(row => {
    row.remove
   });
}

function toggleDraw() {
    if (isDrawing) {
        isDrawing = false
    }
    else
    {
        isDrawing = true
    }
}
function colorPicker()
{
    let color = document.getElementById("color").value
}


creareGrid(20 ,20)