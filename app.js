// Adding items to the table

function itemsAdd() {
    /*adding the <tbody> tag so that my information will appear in my table
    if ($("groceryTable tbody").length == 0) {
        $("groceryTable").append("<tbody></tbody>");
    }
    Adding information to my table*/

    $("#groceryTable tbody").append("<tr>" + 
    "<td>Penne Noodles</td>" + 
    "<td>Penne en Vodka Sauce</td>" +
    "<td>1 bag</td>" + 
    "</tr>");
    console.log(itemsAdd)
    $("#groceryTable tbody").append("<tr>" + 
    "<td>Vodka</td>" + 
    "<td>Penne en Vodcka Sauce</td>" +
    "<td>1 bottle</td>" + 
    "</tr>");

    $("#groceryTable tbody").append("<tr>" + 
    "<td>Can of Crushed Tomatoes</td>" + 
    "<td>Penne en Vodcka Sauce</td>" +
    "<td>1 can</td>" + 
    "</tr>");
}

$(document).ready(function () {
    itemsAdd();
});

//Adding a row by the user

function groceryitemUpdate() {
    if ($("#groceryitem").val() != null && $("#groceryitem").val() != '') {
        // Add item to Table
        itemAddToTable();
console.log(itemUpdate)
        // Clear form fields
        formClear();

        // Focus to item name field
        $("#groceryitem").focus();
    }
}
$(document).ready(function (){
    groceryitemUpdated();
});




