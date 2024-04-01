function search() {
   const townsElement = document.getElementById('towns');
   const searchText = document.getElementById('searchText').value;
   const result = document.getElementById('result');
   let matchCount = 0;  
   const towns = Array.from(townsElement.children);
   
   for (const town of towns) {
      if (town.textContent.toLowerCase().includes(searchText.toLowerCase())) {
         town.style.textDecoration = 'underline';
         town.style.fontWeight = 'bold';
         matchCount += 1;
      }
   } 

   result.textContent = `${matchCount} matches found`
}
