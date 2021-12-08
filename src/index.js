
document.addEventListener('DOMContentLoaded',function(){
    fetchImages();
    fetchBreeds();
})

function fetchImages(){
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
    .then(response => response.json())
    .then(data => {
        data.message.forEach(url => {
        const img = document.createElement("img");
        img.src = url
        document.querySelector("#dog-image-container").appendChild(img)
    })
})
}

function fetchBreeds(){
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(data => {
        Object.keys(data.message).forEach(breed => {
            const li = document.createElement("li")
            const ul = document.getElementById("dog-breeds")
            li.textContent = breed;
        })
        ul.appendChild(li)
    })
}


// document.addEventListener('DOMContentLoaded', function (){
//     fetchImages();
//     fetchBreeds();
// })


// function fetchImages() {
//     const imgURL = "https://dog.ceo/api/breeds/image/random/4"
//     fetch(imgURL)
//     .then(resp => resp.json())
//     .then(data => {
//         data.message.forEach(url => {
//         const img = document.createElement("img")
//         img.src = url
//         document.querySelector("#dog-image-container").appendChild(img)
//     })
// })
// }

// function fetchBreeds() {
//     const breedUrl = 'https://dog.ceo/api/breeds/list/all'
//     fetch(breedUrl)
//     .then(resp => resp.json())
//     .then(data => {
//         Object.keys(data.message).forEach(breed => {
//             // const ul = document.querySelector("#dog-breeds")
//             const ul = document.getElementById("dog-breeds")
//             const li = document.createElement("li")
//             li.textContent = breed;
//             // li.addEventListener("click", function(){
//             //     li.style.color = "white";
//             // })
//             ul.appendChild(li)
//         })
//     })
// }

// document.addEventListener("DOMContentLoaded", function(){
//     fetchImages();
//     fetchBreeds();
// })

// function fetchImages() {
//     const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
//     fetch(imgUrl)
//     .then(response => response.json())
//     .then(data => {
//         data.message.forEach(url => {
//             const img = document.createElement("img");
//             img.src=url
//             document.querySelector("#dog-image-container").appendChild(img);
//         })
//     })
// }
// function fetchBreeds() {
//     const breedUrl = 'https://dog.ceo/api/breeds/list/all'
//     fetch(breedUrl)
//     .then(response => response.json())
//     .then(data => {
//         Object.keys(data.message).forEach(breed => { //we use object.keys(with an object as parameter) object.keys returns an array of the keys of the object that you pass in to object.keys. in other words, object.keys returns an array, so we are essentialyl saying to forEach an array.
//             const ul = document.querySelector("#dog-breeds")
//             const li = document.createElement('li')
//             li.textContent = breed;
//             li.addEventListener("click", function (){
//                 li.style.color = "white";
//             })
//             ul.appendChild(li);
//         })
//     })
// }

// function fetchBreeds() {
//     const breedURL = "https://dog.ceo/api/breeds/list/all"
//     fetch(breedURL)
//     .then(resp => resp.json())
//     .then(data => {
//         Object.keys(data.message).forEach(breed => {
//             const ul = document.querySelector("#dog-breeds")
//             const li = document.createElement("li")
//             li.textContent = breed;
//             li.addEventListener("click", function(){
//                 li.style.color = "white"
//             })
//             ul.appendChild(li)
//         })
//     })
// }


// document.addEventListener("DOMContentLoaded", function(){
//     fetchImages();
//     fetchBreeds();
// })

// function fetchImages() {
//     const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
//     fetch(imgUrl)
//     .then(resp => resp.json())
//     .then(data => {
//         data.message.forEach(url => {
//             const img = document.createElement("img")
//             img.src=url
//             document.querySelector("#dog-image-container").appendChild(img)
//         })
//     })
// }
// function fetchBreeds() {
//     const breedURL = "https://dog.ceo/api/breeds/list/all"
//     fetch(breedURL)
//     .then(resp => resp.json())
//     .then(data => {
//         Object.keys(data.message).forEach(breed => {
//             const ul = document.querySelector("#dog-breeds")
//             const li = document.createElement("li")
//             li.textContent = breed;
//             li.addEventListener("click", function(){
//                 li.style.color = "white"
//             })
//             ul.appendChild(li)
//         })
//     })
// }




// const breeds = []

// document.addEventListener('DOMContentLoaded', () => {
//     fetchImages();
//     fetchBreeds();
// })
//  function fetchImages() {
//      const imageURL ="https://dog.ceo/api/breeds/image/random/4";
//      fetch(imageURL)
//      .then(resp => resp.json())
//      .then(data => {
//         data.message.forEach(url => {
//             const img = document.createElement("img");
//             img.src=url
//             document.querySelector("#dog-image-container").appendChild(img)
//         })
//      })
//  }
//  function fetchBreeds() {
//      const breedUrl = 'https://dog.ceo/api/breeds/list/all'
//      fetch(breedUrl)
//      .then(resp => resp.json())
//      .then(data => {
//          console.log(data)
//          Object.keys(data.message).forEach(breed => {
//              const ul = document.querySelector("#dog-breeds")
//              const li = document.createElement("li")
//              li.textContent = breed;
//              li.addEventListener("click", function() {
//                 li.style.color = 'yellow'
//              })
//              ul.appendChild(li)
//          })
//      })
//  }

//  function filter(breeds) {
//      let breedDropDown = document.querySelector('#breed-dropdown')
//      breedDropDown.addEventListener('change', function (event){
//         let ul = document.querySelector('dog-breeds')
//         if(event.value !== ""){
//             ul.innerHTML = ""
//             let newBreeds = breeds.filter(breed => {
//                 breed.startsWith(event.target.value)
//                 newBreeds.forEach(breed => {
//                     const li = document.createElement('li')
//                     li.innerText = breed;
//                     ul.append(li)
//                 })
//             })
//         }
//      })
//  }