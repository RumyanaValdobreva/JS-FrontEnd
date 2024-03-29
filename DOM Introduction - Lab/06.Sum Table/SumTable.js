function sumTable() {
    const tableDataCost = document.querySelectorAll('tr td:last-child:not(#sum)');
    const tableDataSum = document.getElementById('sum');

    tableDataSum.textContent = Array
        .from(tableDataCost)
        .reduce((sum, element) => sum + Number(element.textContent), 0);

}