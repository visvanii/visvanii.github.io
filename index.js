let counter = 0
const updateCount = () => {
    counter = document.getElementById("list").getElementsByTagName("li").length;
    document.getElementById("count").innerHTML = counter;

}

const addTask = () => {
    let item = document.getElementById("task").value;
    if (item){
        let li = document.createElement("li");
        li.innerHTML = item;
        document.getElementById("list").appendChild(li)
        document.getElementById("task").value = '';
        updateCount()
        li.addEventListener("click",()=>{
            li.parentNode.removeChild(li);
            updateCount();
        })
    }
}

document.getElementById('submitted').addEventListener("click", addTask);


updateCount();