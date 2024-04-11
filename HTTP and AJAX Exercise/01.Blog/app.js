function attachEvents() {
    const postUrl = 'http://localhost:3030/jsonstore/blog/posts';
    const commentUrl = 'http://localhost:3030/jsonstore/blog//comments';
    document.getElementById('btnLoadPosts').addEventListener('click', loadPosts);
    document.getElementById('btnViewPost').addEventListener('click', viewPost);
    
    async function loadPosts() {
        try {
            const response = await fetch(postUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const posts = await response.json();
            
            const postsSelect = document.getElementById('posts');
            postsSelect.innerHTML = '';
            
            for (const key in posts) {
                const post = posts[key];
                const option = document.createElement('option');
                option.value = key;
                option.textContent = post.title;
                postsSelect.appendChild(option);
            }
        } catch (error) {
            console.error('Error loading posts:', error);
        }
    }
    
    async function viewPost() {
        const postsSelect = document.getElementById('posts');
        const postId = postsSelect.value;
        
        const postTitleElement = document.getElementById('post-title');
        const postBodyElement = document.getElementById('post-body');
        const postCommentsElement = document.getElementById('post-comments');
        
        postTitleElement.textContent = '';
        postBodyElement.textContent = '';
        postCommentsElement.innerHTML = '';
        
        try {
            const postResponse = await fetch(`${postUrl}/${postId}`);
            if (!postResponse.ok) {
                throw new Error(`HTTP error! status: ${postResponse.status}`);
            }
            const post = await postResponse.json();
            
            postTitleElement.textContent = post.title;
            postBodyElement.textContent = post.body;
            
            const commentsResponse = await fetch(commentUrl);
            if (!commentsResponse.ok) {
                throw new Error(`HTTP error! status: ${commentsResponse.status}`);
            }
            const comments = await commentsResponse.json();
            
            for (const key in comments) {
                const comment = comments[key];
                if (comment.postId === postId) {
                    const li = document.createElement('li');
                    li.textContent = comment.text;
                    postCommentsElement.appendChild(li);
                }
            }
        } catch (error) {
            console.error('Error viewing post:', error);
        }
    }
    
}

attachEvents();

