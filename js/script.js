
//getTimeString
 const getTimeString = (time) => {
  const days = parseInt(time / 86400)
  let remainingSeconds = time % 86400;
   const hours = parseInt(time / 3600);
    remainingSeconds = time % 3600;
   const minutes = parseInt(remainingSeconds / 60);
   remainingSeconds = time % 60;

   return `${days} days ${hours} hours ${minutes} minutes ${remainingSeconds} seconds ago`;
 };

 //btn-functionally

 const removeActiveClass = () =>{
  const buttons = document.getElementsByClassName("category-btn");
  console.log(buttons);
  for (const btn of buttons) {
    btn.classList.remove("active");
    
  }

 }



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
  const buttonContainer = document.createElement('div');
 buttonContainer.innerHTML = `
 <button id = "btn-${item.category_id}" onclick = "loadCategoryVideos(${item.category_id})" class = "btn category-btn"> ${item.category}</button>
 `;

  //add button
  categoryContainer.appendChild(buttonContainer);
})
}

const cardDemo = {
  category_id: "1001",
  video_id: "aaaa",
  thumbnail: "https://i.ibb.co/L1b6xSq/shape.jpg",
  title: "Shape of You",
  authors: [
    {
      profile_picture: "https://i.ibb.co/D9wWRM6/olivia.jpg",
      profile_name: "Olivia Mitchell",
      verified: "",
    },
  ],
  others: {
    views: "100K",
    posted_date: "16278",
  },
  description:
    "Dive into the rhythm of 'Shape of You,' a captivating track that blends pop sensibilities with vibrant beats. Created by Olivia Mitchell, this song has already gained 100K views since its release. With its infectious melody and heartfelt lyrics, 'Shape of You' is perfect for fans looking for an uplifting musical experience. Let the music take over as Olivia's vocal prowess and unique style create a memorable listening journey.",
};

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
  videosContainer.innerHTML = '' ;

  if (videos.length === 0){
    videosContainer.classList.remove("grid") ;
    videosContainer.innerHTML = `
    <div class = "min-h-[300px] flex flex-col justify-center items-center">
    <img src = '../images/Icon.png'/>
    <h2 class = "text-2xl text-center">NO CONTENT HARE</h2>
    </div>
    `
  }else{
   videosContainer.classList.add("grid");


  }
  
  videos.forEach((video) =>{
    console.log(video)
    //creat a card
    const card = document.createElement('div');
    card.classList = 'card card-compact';
    card.innerHTML = `
     <figure class="h-[200px] relative">
    <img
      src=${video.thumbnail}
      alt="Shoes" class = "h-full w-full object-cover" />

      ${
        video.others.posted_date?.length === 0
          ? ""
          : `<span class = "absolute right-2 bottom-2 text-sm bg-black rounded p-1 text-white "> ${getTimeString(
              video.others.posted_date
            )}</span>`
      }
      

    </figure>
    <div class="px-0 py-2 flex gap-2">
    <div>
    <img class = "w-10 h-10 rounded-full" src = "${
      video.authors[0].profile_picture
    } " />
    </div>
    <div>
    <h2 class="font-bold"> ${video.title} </h2>
    <div class= "flex items-center gap-2">
    <P class = "text-gray-400">${video.authors[0].profile_name}</P>
    ${
      video.authors[0].verified === true
        ? "<img class = 'w-5' src = '../images/icons8-verify-48.png'/>"
        : " "
    }

    </div>
    <P class = "text-gray-400">${video.others.views} Views</P>
    <button onclick ="loadVideosDatails('${video.video_id}')" class = "btn btn-sm bg-lime-400">Datails</button>
    
    
    </div>
    `;
    videosContainer.appendChild(card);

    
    ;


  })
}

//loadCategoryVideos()
const loadCategoryVideos = (id) =>{
  // alert(id)
  fetch(`https://openapi.programming-hero.com/api/phero-tube/category/${id}`)
  .then(res => res.json())
  .then(data =>{
    //sobaike active class remove koraw
    removeActiveClass();

    // id er class k active koraw
    const activeBtn = document.getElementById(`btn-${id}`);
    activeBtn.classList.add('active');
    displayVideos(data.category);
  } )
  .catch(err => console.error(err))
}

const loadVideosDatails = async (videoId) =>{
  // console.log(videoId);
  const url =`https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`;
  const res = await fetch(url);
  const data = await res.json();
  displayVideosDatails(data.video)
}

const displayVideosDatails = (video) =>{
  const videoDatails = document.getElementById("modal-content")

  document.getElementById("my_modal_5").showModal();

}
  

loadCatagories();
loadVideos();