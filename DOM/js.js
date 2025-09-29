const itemForm = document.getElementById('item-form');
const itemInput = document.getElementById('item-input');
const itemList = document.getElementById('item-list');
const clearBtn = document.getElementById('clear');

function displayItem(){
    const items = JSON.parse(localStorage.getItem('items')) || [];
    //marka horeba iska sii madhi haddey wax ku jiraan
    itemList.innerHTML = '';

    //now create the items adigoo item walba marka la marayo sidan sameynaya
    items.forEach((item) => {
        const itemElement = document.createElement('li');
        itemElement.innerHTML = `${item} <button class="remove-item btn-link text-red"><i class="fa-solid fa-trash"></i></button>`;
        itemList.appendChild(itemElement);

        //add event listener to remove item
        const removeItemBtn = itemElement.querySelector('.remove-item');
        removeItemBtn.addEventListener('click', () => {
            removeTask(item);
            itemElement.remove()

            
    });

    // edit itemlist
    })
}

function addItem(item) {    
    
    const items = JSON.parse(localStorage.getItem('items')) || [];
    items.push(item);
    localStorage.setItem('items', JSON.stringify(items));
    displayItem();
    
}


function removeTask(item) {
    let items = JSON.parse(localStorage.getItem('items')) || [];
    items = items.filter((task) => task !== item);
    localStorage.setItem('items', JSON.stringify(items));
}

itemForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const item = itemInput.value.trim();
    if(item !== ''){
        addItem(item);
        displayItem();
        itemInput.value = '';
    }
    
});

clearBtn.addEventListener('click', () => {
    localStorage.removeItem('items');
    displayItem();
});

window.addEventListener('DOMContentLoaded', () => {
    displayItem();
});