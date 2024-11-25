async function obterPosts(){
    try {
        let url = 'https://jsonplaceholder.typicode.com/posts';
        let response = await fetch(url);
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

obterPosts();