//load catagories
const loadCatagories = () =>{
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
  .then((res => res.json()))
  .then((data) => displayCatagories(data.categories))
  .catch((err) => console.error(err))

}

//displayCatagories

const displayCatagories = (data) =>{
  console.log(data)

}

loadCatagories();