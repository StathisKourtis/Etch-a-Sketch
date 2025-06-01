const container = document.querySelector(".container")
let i = 0
let y = 0
let row = 16
let collum = 16
const box = []
const rowArr = []
let isDrawing = false
let toolPeakerNumberer = 0
let toolPeaker = [
    brush,
    eraser,
]

onpointerdown = () => {
    isDrawing = true
}
onpointerup = () => {
    isDrawing =false
}


function creareGrid(row , collum)
{

    for (i = 0; i < row ; i++)
        {
        rowArr[i] = document.createElement("div")
        rowArr[i].classList.add("row")
        container.appendChild(rowArr[i])
        rowArr[i].style.display = "flex"
       
    
        for (y = 0; y < collum; y++)
            {
            let element=box[y]
            element = document.createElement("div")
            element.classList.add("box")
            element.style.flex = "1 1 auto"
            element.style.aspectRatio = "1 / 1"
            // box[y].style.boxSizing = "border-box";
            element.addEventListener("mouseover", () => toolPeaker[toolPeakerNumberer](element));
            element.addEventListener("click", () => toolPeaker[toolPeakerNumberer](element));
            rowArr[i].appendChild(element)
            }
        }
}

function returnGrid()
{
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

function brush(a) {
    if (isDrawing){
        console.log(a)
        a.style.backgroundColor = document.getElementById("color").value;
        
        
    }
}
function eraser(a) {
     if (isDrawing){
        console.log(a)
        a.style.backgroundColor =" #e99cc0";
        
        
    }

}

creareGrid(20 ,20)
