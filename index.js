let giphyData = []
const getGiphy = async() => {
    const response = await fetch("https://api.giphy.com/v1/gifs/search?api_key=EmfahFq3be2ahWhdr3ym2T9A2ro2hXoL&q=akatsuki&limit=12&offset=0&rating=g&lang=en")
    const data = await response.json();
    giphyData = data.data;
    await viewData(giphyData);
    console.log(data);
}

const viewData = () => {
    let gif = "";
    giphyData.map(element => {
      gif += `
          <div class="card col-md-3">
              <div style="width: 100%;">
                  <img src="${element.images.preview_gif.url}" class="card-img-top" alt="...">
              </div>
              <hr>
              <div>
                  <p><h6 class="card-title">Name : <b>${element.title}</b></h6>
                  <p><h6 class="card-title">ID : <b>${element.id}</b></h6>
                  <p><h6 class="card-title">Time : <b>${element.import_datetime}</b></h6>
              </div>
          </div>
          <br>
      `;        
    })
    let giphy = document.getElementById("viewData").innerHTML = gif;
}

getGiphy("");