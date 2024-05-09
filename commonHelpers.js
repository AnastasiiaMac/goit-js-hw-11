import{i as c,S as d}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const u=document.querySelector("form"),p=document.querySelector(".gallery");let a;u.addEventListener("submit",l=>{l.preventDefault(),p.innerHTML="";const o=l.target.elements.search_input.value.trim();if(o==="")return c.warning({title:"Caution",titleColor:"white",message:"All form fields must be filled in",messageColor:"white",position:"topCenter",backgroundColor:"red"});const i=`https://pixabay.com/api/?${new URLSearchParams({key:"43761083-735c77d8194f3d0bda00bacf0",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"})}`;fetch(i).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{a=e,console.log(a);const t=a.hits;if(a.total===0)c.error({message:"Sorry, there are no images matching your search query. Please, try again!",messageColor:"white",backgroundColor:"red",position:"topRight"});else{const s=t.reduce((f,r)=>f+=`<li class="gallery-item">
  <a class="gallery-link" href="${r.largeImageURL}">
        <div class="full-image">
            <img
              class="gallery-image"
              src="${r.webformatURL}"
              alt="${r.tags}"
            />
            <ul  class="image-button">
              <li>
                <p>Likes</p>
                <p>${r.likes}</p>
              </li>
              <li>
                <p>Views</p>
                <p>${r.views}</p>
              </li>
              <li>
                <p>Comments</p>
                <p>${r.comments}</p>
              </li>
              <li>
                <p>Downloads</p>
                <p>${r.downloads}</p>
              </li>
            </ul>
        </div>
  </a>
</li>`,"");p.insertAdjacentHTML("beforeend",s)}new d(".gallery a",{captionsData:"alt",captionDelay:250})}).catch(e=>console.log(e)).finally(()=>{u.reset()})});
//# sourceMappingURL=commonHelpers.js.map
