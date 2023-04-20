var form = document.querySelector("#myForm");
form.addEventListener("submit",myFunc);

var arr = JSON.parse(localStorage.getItem("todo")) || [];

display(arr);

function myFunc(event){
    event.preventDefault();

    var name = document.querySelector("#name").value;
    var quantity = document.querySelector("#quantity").value;
    var priority = document.querySelector("#priority").value;

    var obj = {
        name:name,
        quantity:quantity,
        priority:priority,
    };

    arr.push(obj);
    localStorage.setItem("todo",JSON.stringify(arr));
    display(arr);
}

function display(arr){

    var tbody = document.querySelector("tbody");
    tbody.textContent = "";

    arr.map(function(ele,index){

        var row = document.createElement("tr");

        var td1 = document.createElement("td");
        td1.textContent = index + 1;

        var td2 = document.createElement("td");
        td2.textContent = ele.name;

        var td3 = document.createElement("td");
        td3.textContent = ele.quantity;

        var td4 = document.createElement("td");
        td4.textContent = ele.priority;

        var td5 = document.createElement("td");
        td5.textContent = "Delete Row";
        td5.style.backgroundColor = "red";
        td5.style.cursor = "pointer";
        td5.addEventListener("click",function(){
            deleteRow(index);
        })

        row.append(td1,td2,td3,td4,td5);
        tbody.append(row);
    });

    function deleteRow(ind){

        arr.splice(ind,1);
        localStorage.setItem("todo",JSON.stringify(arr));
        display(arr);

    }
}