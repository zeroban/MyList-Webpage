const base_url = "https://api.jikan.moe/v4/anime";


async function fetchdata() {

    //Will pull in the search value from the user and call it within the fetch function
    const query = document.getElementById("search_query").value;
    const response = await fetch(`${base_url}?q=${query}&sfw=true`);

    //will  throw error if response is not 200
    if (!response.ok) {
        throw new Error("Could not fetch resource AHHHHHHHHHHHHHH");
    }

    //puts the data from the json into a variable
    const data = await response.json();
    console.log(data);

    // Clear previous search results
    document.getElementById("search_results").innerHTML = ""; //clears out the results
    document.getElementById("api_URL").innerHTML = ""; //clears out the previous api call

    //This try will pull in the URL of the API its pulling data from
    try {
        console.log("I am the first try");

        document.getElementById("api_URL").insertAdjacentHTML(
            "beforeend",
            `<p>Link to API request page:</p>
                <a href="${base_url}?q=${query}&sfw=true" class="APIurl">
                <div class="URLS">
                <p> ${base_url}?q=${query}&sfw=true</p>
                </div>
                `
        );
    } catch (e) {
        console.log("I broke in the first try: ".e);
    }

    const maxResults = 18;
    let i = 1;
    // second try will go through each item and pull in the URL image and hyper link them
    try {
        data.data.forEach((item) => {
            // filter limit client side
            if (i > maxResults) {
                throw BreakException;
            }

            document.getElementById("search_results").insertAdjacentHTML(
                "beforeend",
                `

                <div class="container p-5  " >
            <div class="row ">
                <div class="card p-1 " style="width: 16rem; ">
                    <img loading="lazy" class="card-img-top" src="${item.images.jpg.image_url}" alt="${item.title}" />
                    <div class="card-body">
        
        
                        <h5 class="card-title">${item.title}</h5>
        
        
                        <div class="class constiner text-center">
        
                            <ul>
                                <li>This anime was given a score of ${item.score} our of 10. </li>
                                <li>${item.status}. Aired: ${item.aired.string} </li>
                                <li>Rated: ${item.rating} </li>
                                <li>The number of episodes: ${item.episodes} </li>
                            </ul>
        
                        </div>
        
                    </div>
                </div>
            </div>
        </div>
                
                
                `
            );

            i++;
        });
    } catch (errors) {
        console.log("I broke in the last try: ", errors);
    }

    console.log("I am at the end");
}


btn1.addEventListener("click", fetchdata);
