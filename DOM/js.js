const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');
let isEditMode = false;
let currentEditIndex  =-1;  // item-ka hadda la edit-gareynayo

// Function to display items from localStorage
function displayItem() {
    const items = JSON.parse(localStorage.getItem('items')) || [];
    itemList.innerHTML = '';  

    items.forEach((item, index) => {
        const itemElement = document.createElement('li');
        itemElement.innerHTML = `${item} 
            <button class="edit-mode btn-link text-red"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="remove-item btn-link text-red"><i class="fa-solid fa-trash"></i></button>`;

        itemList.appendChild(itemElement);

        // Event listener for remove button
        const removeItemBtn = itemElement.querySelector('.remove-item');
        removeItemBtn.addEventListener('click', () => {
            removeTask(item);
            itemElement.remove();
        });

        // Event listener for edit button
        const editItemBtn = itemElement.querySelector('.edit-mode');
        editItemBtn.addEventListener('click', () => {
            isEditMode = true;
            currentEditIndex = index;  // Save the index of the item being edited
            itemInput.value = item;  
            
            const addButton = itemForm.querySelector('button');
            addButton.textContent = 'Update Item';
            addButton.style.backgroundColor = 'green';


        });
    });
}

// Add or update item in localStorage
function addItem(item) {
    const items = JSON.parse(localStorage.getItem('items')) || [];

    if (isEditMode && currentEditIndex !== -1) {

        // Update the existing item if in edit mode
        items[currentEditIndex] = item;
        localStorage.setItem('items', JSON.stringify(items));
        
        isEditMode = false;  // Reset edit mode
        currentEditIndex = -1;  // Reset current edit index
          const addButton = itemForm.querySelector('button');
            addButton.textContent = 'Add Item';
            addButton.style.backgroundColor = 'black';
    } else {
        // Add a new item if not in edit mode
        items.push(item);
        localStorage.setItem('items', JSON.stringify(items));
    }

    displayItem();  // Refresh the item list
}

// Remove item from localStorage
function removeTask(item) {
    let items = JSON.parse(localStorage.getItem('items')) || [];
    items = items.filter((task) => task !== item);
    localStorage.setItem('items', JSON.stringify(items));
}

// Event listener for form submission (Add or Edit item)
itemForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const item = itemInput.value.trim();

    if (item !== '') {
        addItem(item);
        itemInput.value = '';  // Clear input after adding or editing
    }
});

// Clear all items from localStorage
clearBtn.addEventListener('click', () => {
    localStorage.removeItem('items');
    displayItem();
});

// Initial display of items from localStorage
window.addEventListener('DOMContentLoaded', () => {
    displayItem();
});
