let bagItems;
let bagCount = document.querySelector('.bag-item-count');

onload();

function onload() {
    let bagItemsVal = localStorage.getItem("bagItems");
    bagItems = bagItemsVal ? JSON.parse(bagItemsVal) : [];
    loadItemsOnHomePage();
    displayBagCount();
}


function addToBag(itemId) {
    console.log(itemId);
    bagItems.push(itemId);
    localStorage.setItem("bagItems", JSON.stringify(bagItems));
    displayBagCount();
    // console.log(bagItems);
}

function displayBagCount() {
    if (bagItems.length > 0) {
        bagCount.innerText = bagItems.length;
        bagCount.style.visibility = "visible";
    } else {
        bagCount.style.visibility = "hidden";
    }
}

function loadItemsOnHomePage() {
    let itemsContainer = document.querySelector('.items-container');
    let contents = "";
    if (!itemsContainer) {
        return;
    } else {
        items.forEach((item) => {
            contents += `
            <div class="item-container">
            <img class="item-image" src="${item.image}" alt="item image">
            <div class="rating">
            ${item.rating.stars} ⭐ | ${item.rating.count}
            </div>
            <div class="company-name">${item.company}</div>
            <div class="item-name">${item.item_name}</div>
            <div class="price">
            <span class="current-price">Rs ${item.current_price}</span>
            <span class="original-price">Rs ${item.original_price}</span>
            <span class="discount">(${item.discount_percentage}% OFF)</span>
            </div>
            <button class="btn-add-bag" onclick="addToBag('${item.id}')">Add to Bag</button>
            </div>`;
        })
    }

    itemsContainer.innerHTML = contents;
}
