function solve() {
   const addProductButton = document.querySelectorAll('button.add-product');
   const textarea = document.querySelector('textarea');
   const checkoutButton = document.querySelector('button.checkout');
   let totalPrice = 0;
   let products = {};

   for (const buttonElement of addProductButton) {
      const productElement = buttonElement.parentElement.parentElement;

      buttonElement.addEventListener('click', () => {
         const productTitle = productElement.querySelector('.product-title').textContent;
         const price = Number(productElement.querySelector('.product-line-price').textContent);

         totalPrice += price;

         products[productTitle] = true;
      
         textarea.textContent += `Added ${productTitle} for ${price.toFixed(2)} to the cart.\n`;


      });
   }

   checkoutButton.addEventListener('click', (event) => {
      Array.from(addProductButton).forEach(buttonElement => buttonElement.setAttribute('disabled', 'disabled'));
      event.target.setAttribute('disabled', 'disabled');
      const shoppingList = Object.keys(products).join(', ');

      textarea.textContent += `You bought ${shoppingList} for ${totalPrice.toFixed(2)}.\n`;
   });
}