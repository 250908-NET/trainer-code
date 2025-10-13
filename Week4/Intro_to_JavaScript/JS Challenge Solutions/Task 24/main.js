async function getPosts() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
    );
    const posts = await response.json();

    const postElts = [];

    posts.slice(0, 5).forEach((post) => {
        const postElt = document.createElement("div");
        const postTitleElt = document.createElement("h2");
        const postBodyElt = document.createElement("p");
        postTitleElt.textContent = post.title;
        postBodyElt.textContent = post.body;
        postElt.append(postTitleElt, postBodyElt);

        postElts.push(postElt);
    });

    document.body.append(...postElts);
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#loadBtn").addEventListener("click", getPosts);
});
