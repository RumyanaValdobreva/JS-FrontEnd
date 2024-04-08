function getInfo() {
    const url = 'http://localhost:3030/jsonstore/bus/businfo'
    const stopIdElement = document.getElementById('stopId');
    const stopNameElement = document.getElementById('stopName');
    const busElement = document.getElementById('buses');

    const stopId = stopIdElement.value;
    fetch(`${url}/${stopId}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            stopNameElement.textContent = data.name

            for (const bus in data.buses) {
                const liElement = document.createElement('li');
                liElement.textContent = `Bus ${bus} arrives in ${data.buses[bus]} minutes`;
                busElement.appendChild(liElement);
            }
        })
        .catch(err => {
            stopNameElement.textContent = 'Error'
        });
};