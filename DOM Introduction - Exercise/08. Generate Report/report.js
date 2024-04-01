function generateReport() {
    const tableHeaderElements = document.querySelectorAll('table thead th');
    const tableRowElements = document.querySelectorAll('table tbody tr');
    const outputResult = document.getElementById('output');

    const mapping = Array
        .from(tableHeaderElements)
        .map(thElement => {
            const checkboxElement = thElement.querySelector('input[type=checkbox]');

            return {
                name: thElement.textContent.toLowerCase().trim(),
                active: checkboxElement.checked
            };
        });
    
    const resultData = Array
        .from(tableRowElements)
        .map(trElement => {
            const tableDataElements = trElement.querySelectorAll('td');

            const result = Array
                .from(tableDataElements)
                .reduce((data, tdElement, index) => {
                    if (!mapping[index].active) {
                        return data;
                    }
                    
                    const column = mapping[index].name;
                    data[column] = tdElement.textContent;

                    return data;
                }, {})
            
            return result;
        })
    
    outputResult.value = JSON.stringify(resultData, null, 2);
}

