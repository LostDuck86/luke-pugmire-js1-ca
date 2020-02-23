const baseUrl = "https://rickandmortyapi.com/api/character/";

function handleResponse(response) {
  return response.json();
}
function handleJson(json) {
  const results = json.results;
  console.dir(results);

  const resultsContainer = document.querySelector(".row.results");

  let html = "";

  results.forEach(function(results) {
    let type = "Unknown";

    if (results.type) {
      type = results.type;
    }

    html += `<div class="col-sm-6 col-md-4 col-lg-3">                
        <div class="card">    
            <img class="image" src="${results.image}" alt="Character Name">
            <div class="details">
                <h4 class="name">${results.name}</h4>
                <p>Type: ${type}</p>    
                <p>Episode count: ${results.episode.length}</p>                                  
                <a class="btn btn-primary" href="details.html?id=${results.id}">Details</a>
            </div>
        </div>
    </div>`;
  });
  resultsContainer.innerHTML = html;
}
function handleError(error) {
  document.location.href = "error.html";
}

fetch(baseUrl)
  .then(handleResponse)
  .then(handleJson)
  .catch(handleError);
