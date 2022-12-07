let url_string = window.location.href;

// convert to js representation of url 
let url = new URL(url_string);
const base_url = "https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1";

const get_id = () => {
    return url.searchParams.get("id");

}
const getSingleNews = async (id) => {
    try{ response =await fetch(`${base_url}/news/${id}`);
    const newsData = await response.json();
    displayNewsDetails(newsData);
       }catch (error){
    console.log(error);
       }
};


const displayNewsDetails = (data) => {

    let image = document.getElementById("img");

    let title = document.getElementById("title");
  
    let url = document.getElementById("url");
  
    let author = document.getElementById("author");
  
    title.innerHTML= data.title;
  
    author.innerText= `Published by ${data.author}`;
  
    url.innerText= data.url;
    
    image.src = data.avatar;
  
  };


window.onload = getSingleNews(get_id());