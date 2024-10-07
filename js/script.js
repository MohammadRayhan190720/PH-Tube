//load catagories
const loadCatagories = () =>{
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
  .then((res => res.json()))
  .then((data) => displayCatagories(data.categories))
  .catch((err) => console.error(err))

}

//displayCatagories

const displayCatagories = (categories) =>{

const categoryContainer = document.getElementById("category-container");

categories.forEach((item) =>{
  console.log(item)

  //creat a button
  const button = document.createElement('button');
  button.classList = 'btn';
  button.innerText = item.category;

  //add button
  categoryContainer.appendChild(button);
})
}

//load videos
const loadVideos = () =>{
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
  .then((res) => res.json())
  .then((data) => displayVideos(data.videos))
  .catch((err) => console.error(err))

}

//display videos
const displayVideos = (videos) =>{
  const videosContainer = document.getElementById("videos");
  
  videos.forEach((video) =>{
    console.log(video)
    

  })
}
  

loadCatagories();
loadVideos();