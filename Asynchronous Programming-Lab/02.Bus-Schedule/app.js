function solve() {
    const url = 'http://localhost:3030/jsonstore/bus/schedule/'
    const infoElement = document.querySelector('.info')
    const departButtonElement = document.getElementById('depart')
    const arriveButtonElement = document.getElementById('arrive')
    let stopId = 'depot'
    let nextStop = ''

    function depart() {
        fetch(url + stopId)
            .then(response => response.json())
            .then(data => {
                console.log(data)

                infoElement.textContent = `Next stop ${data.name}`

                nextStop = data.name
                stopId = data.next

                departButtonElement.disabled = true
                arriveButtonElement.disabled = false
            })
            .catch((error) => {
                infoElement.textContent = "Error"

                departButtonElement.disabled = true
                arriveButtonElement.disabled = true
            })
    }

    async function arrive() {
        infoElement.textContent = `Arriving at ${nextStop}`
        
        departButtonElement.disabled = false
        arriveButtonElement.disabled = true
    }

    return {
        depart,
        arrive
    };
}

let result = solve();