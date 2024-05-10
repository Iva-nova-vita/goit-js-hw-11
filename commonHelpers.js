import{i as u,S as f}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}})();const m="43802191-554d301bd26f1aa24348b3f09";function h(i){let e=`https://pixabay.com/api/?${new URLSearchParams({key:m,q:i,orientation:"horizontal",safesearch:!0})}`;return fetch(e).then(o=>{if(!o.ok)throw new Error(o.statusText);return o.json()})}function n(i){u.show({message:i,color:"red",timeout:2e3,position:"topRight"})}function v(i){return i.reduce((s,e)=>s+=`<li class="card">
                <a href="${e.largeImageURL}">
                    <img class="card__img" src="${e.webformatURL}" alt="${e.tags}"/>

                    <div class="card__info">
                        <div class="card__likes">
                            <div class="title">likes</div>
                            <div class="number">${e.likes}</div>
                        </div>
                        <div class="card__views">
                            <div class="title">views</div>
                            <div class="number">${e.views}</div>
                        </div>
                        <div class="card__comments">
                            <div class="title">comments</div>
                            <div class="number">${e.comments}</div>
                        </div>
                        <div class="card__downloads">
                            <div class="title">downloads</div>
                            <div class="number">${e.downloads}</div>
                        </div>
                    </div>
                </a>
            </li>
        `,"")}const c=document.querySelector(".form"),l=document.querySelector(".cards"),d=document.querySelector(".loader");c.addEventListener("submit",i=>{i.preventDefault();const s=c.elements.search.value.trim();if(!s){n("Sorry, the query field can not be empty");return}l.innerHTML="",d.classList.remove("is-hidden"),h(s).then(e=>{if(!e.hits.length){n("Sorry, there are no images matching your search query. <br>Please try again!");return}const o=v(e.hits);l.insertAdjacentHTML("afterbegin",o),new f(".cards a",{captionsData:"alt"})}).catch(e=>console.log(e)).finally(()=>d.classList.add("is-hidden")),c.reset()});
//# sourceMappingURL=commonHelpers.js.map
