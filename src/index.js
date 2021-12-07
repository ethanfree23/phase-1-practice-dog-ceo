
const breeds = []

document.addEventListener('DOMContentLoaded', () => {
    fetchImages();
    fetchBreeds();
})
 function fetchImages() {
     const imageURL ="https://dog.ceo/api/breeds/image/random/4";
     fetch(imageURL)
     .then(resp => resp.json())
     .then(data => {
        data.message.forEach(url => {
            const img = document.createElement("img");
            img.src=url
            document.querySelector("#dog-image-container").appendChild(img)
        })
     })
 }
 function fetchBreeds() {
     const breedUrl = 'https://dog.ceo/api/breeds/list/all'
     fetch(breedUrl)
     .then(resp => resp.json())
     .then(data => {
         console.log(data)
         Object.keys(data.message).forEach(breed => {
             const ul = document.querySelector("#dog-breeds")
             const li = document.createElement("li")
             li.textContent = breed;
             li.addEventListener("click", function() {
                li.style.color = 'yellow'
             })
             ul.appendChild(li)
         })
     })
 }

 function filter(breeds) {
     let breedDropDown = document.querySelector('#breed-dropdown')
     breedDropDown.addEventListener('change', function (event){
        let ul = document.querySelector('dog-breeds')
        if(event.value !== ""){
            ul.innerHTML = ""
            let newBreeds = breeds.filter(breed => {
                breed.startsWith(event.target.value)
                newBreeds.forEach(breed => {
                    const li = document.createElement('li')
                    li.innerText = breed;
                    ul.append(li)
                })
            })
        }
     })
 }