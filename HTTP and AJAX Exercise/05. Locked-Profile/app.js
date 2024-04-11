async function lockedProfile() {
    const baseUrl = 'http://localhost:3030/jsonstore/advanced/profiles';

    try {
        const profileRes = await fetch(baseUrl)
        if (!profileRes.ok) {
            throw new Error(`HTTP error! status: ${profileRes.status}`);
        }

        const profiles = await profileRes.json()
        const mainElement = document.getElementById('main')
        mainElement.innerHTML = ''

        let counter = 1

        for (const [profileID, profileInfo] of Object.entries(profiles)) {
            const divProfile = document.createElement('div')
            divProfile.className = 'profile'

            const profileHTML = `
                <img src="./iconProfile2.png" class="userIcon" />
                <label>Lock</label>
                <input type="radio" name="user${counter}Locked" value="lock" checked>
                <label>Unlock</label>
                <input type="radio" name="user${counter}Locked" value="unlock"><br>
                <hr>
                <label>Username</label>
                <input type="text" name="user${counter}Username" value="${profileInfo.username}" disabled readonly />
                <div class="user${counter}HiddenFields">
                    <hr>
                    <label>Email:</label>
                    <input type="email" name="user${counter}Email" value="${profileInfo.email}" disabled readonly />
                    <label>Age:</label>
                    <input type="email" name="user${counter}Age" value="${profileInfo.age}" disabled readonly />
                </div>
                
                <button>Show more</button>
            `

            divProfile.innerHTML = profileHTML
            divProfile.querySelector('div').style.display = 'none'
            mainElement.appendChild(divProfile)

            const showMoreButton = divProfile.querySelector('button')
            showMoreButton.addEventListener('click', moreInfo)

            function moreInfo(event) {
                const lockRadioButton = divProfile.querySelector('input[type="radio"]')
                
                if (showMoreButton.textContent === 'Show more' && !lockRadioButton.checked) {
                    divProfile.querySelector('div').style.display = 'block'
                    showMoreButton.textContent = 'Hide it'
                } else if (showMoreButton.textContent === 'Hide it' && !lockRadioButton.checked) {
                    divProfile.querySelector('div').style.display = 'none'
                    showMoreButton.textContent = 'Show more'
                }
            }

            counter += 1
        }
    } catch (error) {
        console.error('Error fetching and displaying profiles:', error);
    }
}
