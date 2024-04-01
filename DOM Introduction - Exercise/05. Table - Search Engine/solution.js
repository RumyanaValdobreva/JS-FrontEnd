function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const tableRows = document.querySelectorAll('.container tbody tr');
      const searchFieldElement = document.querySelector('#searchField');
      const searchField = searchFieldElement.value;

      for (const tableRow of tableRows) {
         const tableData = tableRow.querySelectorAll('td');
         let isSeelected = false;

         tableRow.className = '';

         for (const tdElement of tableData) {
            if (tdElement.textContent.includes(searchField)) {
               isSeelected = true;
               break;
            }
         }

         if (isSeelected) {
            tableRow.className = 'select';
         }

      }
      
      searchFieldElement.value = '';
   }
}