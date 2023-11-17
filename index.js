
document.addEventListener('DOMContentLoaded', function() {
   updateTotalPrice();
});
function adjustQuantity(itemId, action) {
   var quantityElement = document.getElementById(itemId + '-quantity');
   var currentQuantity = parseInt(quantityElement.innerHTML);

   if (action === 'increment') {
       quantityElement.innerHTML = currentQuantity + 1;
   } else if (action === 'decrement' && currentQuantity > 1) {
       quantityElement.innerHTML = currentQuantity - 1;
   }
   updateTotalPrice();
} 
function deleteItem(itemId) {
   var item = document.getElementById(itemId);
   item.parentNode.removeChild(item);

   updateTotalPrice();
}
async function updateTotalPrice() {
   var totalElement = document.getElementById('total-price');
   var totalPrice = 0;

   // Iterate through each cart item and update the total price
   var cartItems = document.getElementsByClassName('cart-item');
   for (var i = 0; i < cartItems.length; i++) {
       var quantity = parseInt(cartItems[i].getElementsByClassName('quantity')[0].innerHTML);
       var price = parseFloat(cartItems[i].getElementsByClassName('item-price')[0].innerHTML.replace('$', ''));
       totalPrice += quantity * price;
   }

   // Update the total price element
   totalElement.innerHTML = 'Total: $' + totalPrice.toFixed(2);
}
function toggleLike(itemId) {
var likeButton = document.getElementById('likeButton-' + itemId);
var heartIcon = likeButton.querySelector('svg');

if (heartIcon.style.fill === 'blue') {
// If the heart is already blue, change it to the default color
heartIcon.style.fill = '';
} else {
// If the heart is not blue, change it to blue
heartIcon.style.fill = 'blue';
}

// Add your existing logic for liking the item here
}
