function solution() {
    const baseUrl = 'http://localhost:3030/jsonstore/advanced/articles/list';
    const detailsUrl = 'http://localhost:3030/jsonstore/advanced/articles/details/';
    const mainSection = document.getElementById('main');
    mainSection.innerHTML = ''

    async function loadArticles() {
        try {
            const articlesRes = await fetch(baseUrl)
            if (!articlesRes.ok) {
                throw new Error(`HTTP error! status: ${articlesRes.status}`);
            }

            const articles = await articlesRes.json()

            for (const article of articles) {
                const accordionElement = document.createElement('div');
                accordionElement.className = 'accordion'

                accordionElement.innerHTML = `
                    <div class="head">
                        <span>${article.title}</span>
                        <button class="button" id="${article['_id']}">More</button>
                    </div>
                    <div class="extra">
                        <p>Scalable Vector Graphics .....</p>
                    </div>
                `

                mainSection.appendChild(accordionElement)

                const accordionButtonElement = accordionElement.querySelector('button');
                accordionButtonElement.addEventListener('click', async () => {
                    try {
                        const detailsRes = await fetch(detailsUrl + article['_id'])
                        if (!detailsRes.ok) {
                            throw new Error(`HTTP error! status: ${detailsRes.status}`);
                        }
                        
                        const detailsArticle = await detailsRes.json()
                        
                        const extraContentElement = accordionElement.querySelector('.extra p')
                        extraContentElement.textContent = detailsArticle.content

                        if (accordionButtonElement.textContent === 'More') {
                            extraContentElement.parentElement.style.display = 'block'
                            accordionButtonElement.textContent = 'Less'
                        } else if (accordionButtonElement.textContent === 'Less') {
                            extraContentElement.parentElement.style.display = 'none'
                            accordionButtonElement.textContent = 'More'
                        }
                    } catch (error) {
                        console.error('Error loading article details:', error);
                    }
                })
            }
        } catch (error) {
            console.error('Error loading articles:', error);
        }
    }

    loadArticles()
}

solution()
