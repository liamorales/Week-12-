//Selectors
const newItem = document.querySelector(".new-Item");
const addButton =document.querySelector(".add-button");
const deleteButton = document.querySelector(".deleteButton");
const $itemInformation = $("#Grocery-list")

//Event Listeners
const $itemInput = $("#item-input")
var newElement =$("#new-item")

let editGroceryList = null;

function onnewElement(){
    $nameInput.val("")
    editItemId =null;
}


//functions

function renderGroceryList(){
    return $("<tr/>").append(
        $("<td/>").text(item.name),
        $("<td/>").append(
            $("<button/>").addClass("btn btn-danger me-2").text("Delete").on("click", () => onDeleteButtonClick(item.id)),
            $("<button>").addClass("btn btn-primary").text("Edit").on("click", () => onStartEditItem(item.id))
        )
    )
}

function onAddCreateNewItem (){
    $newItem.text("Edit " + item.name)
    $nameInput.val(item.name)
    editItemId=item.id;
}

function onSaveNewItem() {
    if (editItemId === null) {
        itemList.push({
            id: itemList[itemList.length -1].id +1,
            name: $nameInput.val()
        })
    }
    else {
        const item = itemList.find(item => item.id === editItemId);
        item.name=$nameInput.val();
    }
    renderItemList();
}

function onDeleteButtonClick(itemId){
    const indexToDelete=itemList.findIndex(item =>item.id ===itemId)
    itemList.splice(indexToDelete, 1);
    renderItemList();
}

var listItems = document.getElementsByClassName("newItem");
var i;
for (i=0; i< listItems.length; i++) {
    var span=document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className="close";
    span.appendChild(txt);
    listItems[i].appendChild(span);
}
 /*var close=document.getElementsById("deleteButton");
 var i;

 for (i=0; i <close.length; i++){
     close[i].onclick=function(){
         var div =this.parentElement;
         div.style.display="none";
     }
 }

 var list =document.querySelector('groceryForm');
 list.addEventListener('click', function(ev){
     if (ev.target.id ==='groceryForm' ){
         ev.target.classList.toggle('checked');
     }
 }, false);*/

 function newElement() {
    var newItem = document.createElement("<td>");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("You must write something!");
    } else {
      document.getElementById("myUL").appendChild(li);
    }
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
  }


