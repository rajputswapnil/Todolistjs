var elements = [];
window.onload = function(){
    if(JSON.parse(localStorage.getItem("todo-elements"))!=null)
        {
            elements = JSON.parse(localStorage.getItem("todo-elements"));
            console.log("elememts:", elements);
            display();
        }
};
function addElement(){
    if(document.querySelector(".addt").value.trim()!="")
    {
        elements.push(document.querySelector(".addt").value.trim());
        if(localStorage.getItem("todo-elements")==null)
        {
            localStorage.setItem("todo-elements",JSON.stringify(elements));
        }
        else
               localStorage.setItem("todo-elements",JSON.stringify(elements));

        console.log(localStorage.getItem("todo-elements"));
        display();
    }
}
function display(){
    document.querySelector(".list").innerHTML = "";
    for(var i=0 ;i< elements.length ;i++)
    document.querySelector(".list").innerHTML += "<center><div class='element'>" +elements[i]+ 
    "<img class='tick' src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPdrNL09nOpjjqaL2btv2RrLQFh-drL61VGsoO6AghWQxe_PDH&usqp=CAU' onclick='strike("+i+")'><img class='dustbin' src='https://icons.iconarchive.com/icons/papirus-team/papirus-status/512/user-trash-full-icon.png' onclick='del("+i+")'></div></center>";
}
function del(index){
    elements.splice(index, 1);
    if(localStorage.getItem("todo-elements")==null)
        {
            localStorage.setItem("todo-elements",JSON.stringify(elements));
        }
        else
               localStorage.setItem("todo-elements",JSON.stringify(elements));
    display();
}
function strike(index)
{
    if(elements[index].includes("<strike>")){
    elements[index] = elements[index].replace("<strike>","");
    elements[index] = elements[index].replace("</strike>","");
}
else elements[index] = "<strike>"+ elements[index] +"</strike>";
if(localStorage.getItem("todo-elements")==null)
        {
            localStorage.setItem("todo-elements",JSON.stringify(elements));
        }
        else
               localStorage.setItem("todo-elements",JSON.stringify(elements));
display();
}