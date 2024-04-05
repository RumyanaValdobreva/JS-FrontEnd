function create(words) {
   const content = document.getElementById('content');

   const sections = words
      .map(word => {
         const divElement = document.createElement('div');
         const paragraphElement = document.createElement('p');

         paragraphElement.textContent = word;

         divElement.appendChild(paragraphElement);

         paragraphElement.style.display = 'none';

         divElement.addEventListener('click', () => {
            paragraphElement.style.display = 'block';
         });

         return divElement;
      });
   
   sections.forEach(element => content.appendChild(element));

   // content.append(...sections); --> judje doesn't support append()
}