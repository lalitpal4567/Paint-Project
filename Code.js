let canvas = document.getElementById("myCanvas");
let context = canvas.getContext("2d");
let toolButtons = document.querySelectorAll(".icons");

canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

let isDrawing = false;
let selectedTool = "brush";
let prevMousex;
let prevMousey;

const mouse = {
    x: null,
    y: null
};


// canvas.addEventListener("click", function(event){
    //     mouse.x = event.x;
    //     mouse.y = event.y;
    // })
    
    function drawPencil(event)
    {
        if(!isDrawing)
        {
            return;
        }
        if(selectedTool === "penimage")
        {
            context.strokeStyle = "red";
            context.lineTo(event.offsetX, event.offsetY)
            // context.closePath(); // fantastic
            context.stroke();
        }
        else if(selectedTool === "ractangle")
        {
            context.strokeRect(event.offsetX, event.offsetY, prevMousex - event.offsetX, prevMousey - event.offsetY);
        }
    }
    function activePencil(event)
    {
        isDrawing = true;
        prevMousex = event.offsetX;
        prevMousey = event.offsetY;
        context.beginPath();
}
function deactivePencil(event)
{
    isDrawing = false;
}
canvas.addEventListener("mousedown", function(event){
    activePencil(event);
});
canvas.addEventListener("mousemove",function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    drawPencil(event);
});

canvas.addEventListener("mouseup", function(event){
    deactivePencil();
})

toolButtons.forEach((btn)=>[
    btn.addEventListener("click",()=>{
        selectedTool = btn.id;
    })
])