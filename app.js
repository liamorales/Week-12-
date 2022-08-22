//Selectors
const newItem = document.querySelector(".new-Item");
const addButton =document.querySelector(".add-button");
const deleteButton = document.querySelector(".deleteButton");
const $itemInformation = $("#Grocery-list")

//Event Listeners
const $itemInput = $("#item-input")
const newElement =$("#new-item")

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



 



