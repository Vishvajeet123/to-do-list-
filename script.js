

const item = document.querySelector("#item");

const toDobox= document.querySelector("#to-do-box");


item.addEventListener("keyup",
function(event)
{
    if (event.key=="Enter")
    {
        addtodo(this.value);
         
        this.value="";
    }

}
)

const addtodo =(item)=>
{
    const listitem = document.createElement("li");
    listitem.innerHTML=`
    ${item}
    <input type="checkbox" name="" id="checkbox">

    <i class="fa-solid fa-xmark"></i>

    `;
        
listitem.addEventListener("click",
   function()
{
    this.classListc.toggle("done");
}
)

listitem.querySelector("i").addEventListener("click",

        function()
        {
            listitem.remove();
        }

)
 
 
    toDobox.appendChild(listitem);
}