var myForm = document.getElementById("myForm");
var myInput = document.getElementById("myInput");
var myItem = document.getElementById("myItem");


// When the form is submitted
myForm.addEventListener("submit", function (event) {

    event.preventDefault();

    createItem(myInput.value);

});


// Function to create a shopping item
function createItem(inputItems) {

    var items =
        `<li>
            ${inputItems}
            <button class="delete" onclick="deleteElement(this)">
                Delete
            </button>
        </li>`;

    myItem.insertAdjacentHTML("beforeend", items);

    myInput.value = "";

    myInput.focus();
}


// Function to delete an item
function deleteElement(elementToDelete) {

    elementToDelete.parentElement.remove();

}