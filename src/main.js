import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const searchForm = document.querySelector("form");
const gallery = document.querySelector(".gallery");
let imgs;
searchForm.addEventListener("submit", event => {
    event.preventDefault()
    gallery.innerHTML = ""
    const searchData = event.target.elements.search_input.value.trim();
    if (searchData === "") {
        return iziToast.warning({
            title: 'Caution',
            titleColor: 'white',
            message: 'All form fields must be filled in',
            messageColor: 'white',
            position: 'topCenter',
            backgroundColor: 'red',
        });  
    }
    const searchParams = new URLSearchParams(
            {
            key: '43761083-735c77d8194f3d0bda00bacf0',
            q: searchData,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: "true"
                
        })
    const url = `https://pixabay.com/api/?${searchParams}`
    fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(response.status)
            }
            return response.json()
        })
        .then((images) => {
            imgs = images
            console.log(imgs)
            const arrayOfImages = imgs.hits
            if (imgs.total === 0) {
                iziToast.error({
                    message: 'Sorry, there are no images matching your search query. Please, try again!',
                    messageColor: "white",
                    backgroundColor: "red",
                    position: "topRight"
                });
            } else {
                const markup = arrayOfImages.reduce((html, image) => {
                    return (html += `<li class="gallery-item">
  <a class="gallery-link" href="${image.largeImageURL}">
        <div class="full-image">
            <img
              class="gallery-image"
              src="${image.webformatURL}"
              alt="${image.tags}"
            />
            <ul  class="image-button">
              <li>
                <p>Likes</p>
                <p>${image.likes}</p>
              </li>
              <li>
                <p>Views</p>
                <p>${image.views}</p>
              </li>
              <li>
                <p>Comments</p>
                <p>${image.comments}</p>
              </li>
              <li>
                <p>Downloads</p>
                <p>${image.downloads}</p>
              </li>
            </ul>
        </div>
  </a>
</li>`)
                }, "");
                gallery.insertAdjacentHTML("beforeend", markup);
            }
            var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
})
        })
        .catch((error) => console.log(error))
        .finally(() => {
        searchForm.reset()
    })
})

