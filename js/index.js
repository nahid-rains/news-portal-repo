const loadData = () => {
    const url = `https://openapi.programming-hero.com/api/news/categories`
    fetch(url)
    .then(res => res.json())
    .then(data => setData(data.data.news_category))
}

const setData = (data) =>{
      const navId = document.getElementById('nav-id');
      for(const info of data){
    
const li = document.createElement('li');
      li.classList.add('nav-item');
      li.innerHTML = `
     
      <button class="border border-0 bg-white mt-4" onclick="fr('${info.category_id}')" ><a  class="nav-link"> ${info.category_name}</a></button>
   
     `;
     navId.appendChild(li);
 };

};
// onclick="fr('${info.category_id}')"
//raff  <a  class="nav-link"> ${info.category_name}</a>
// href="onclick=fr('${info.category_id}')"
const fr = (search) =>{
const url = `https://openapi.programming-hero.com/api/news/category/${search}`
 fetch(url)
 .then(res => res.json())
 .then(data => getNoe(data.data))
 console.log('hello')

 
}

const getNoe = (data) =>{
 const cardContainer = document.getElementById('card-contsiner');
 cardContainer.innerHTML = " ";
 for(const infotube of data){
     console.log(infotube)
     const makeDiv = document.createElement('div')
     makeDiv.classList.add('col')
     makeDiv.innerHTML = `
     <div class="card h-100">
     <img src="${infotube.image_url}" class="card-img-top" alt="...">
     <div class="card-body">
       <p>Details: ${infotube.details.slice(0,150)}</p>
       <div class=" d-flex"><h6 class="me-5">${infotube.author.name}</h6>
       <img style="height:20px" class="img-fluid rounded-circle" src="${infotube.author.img}">
       <h6 class="ms-5">${infotube.total_view} </h6>
       
     </div>
     `;
     cardContainer.appendChild(makeDiv)

 }

}
loadData();
