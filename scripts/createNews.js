const base_url = "https://61924d4daeab5c0017105f1a.mockapi.io/credo/v1";

const createForm = document.getElementById("createForm");
const author = document.getElementById("author");
const title = document.getElementById("newsTitle");
const avatar= document.getElementById("avatarLink");
const url = document.getElementById("newsUrl");

const submitNews = async () => {
    let body = {
        author: author.value.trim(),
        title: title.value.trim(),
        avatar: avatar.value.trim(),
        url: url.value.trim(),
    }

    try{
        let response = await fetch(`${base_url}/news`,
        {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            },
        });
        let jsonRes = await response.json();
        console.log(jsonRes);
        alert("news created successfully")
        window.location.replace("../index.html");
    }catch(error){
        alert(error);
    }

}

createForm.addEventListener("submit", 
function(e){
    e.preventDefault();
    submitNews();
})



