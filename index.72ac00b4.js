window.addEventListener("DOMContentLoaded",()=>{document.querySelector(".demo-free").addEventListener("click",u=>{let e;((e=document.createElement("div")).className="modal",e.innerHTML=`<div class="modal-dialog">
        <div class="modal-content">
            <div data-close class="modal-close"><i class="fa-solid fa-xmark"></i></div>
            <form action="#">
                <div class="modal-title">\u{412}\u{43E}\u{439}\u{442}\u{438} \u{432} \u{441}\u{438}\u{441}\u{442}\u{435}\u{43C}\u{443}</div>
                <input required placeholder="Email/\u{422}\u{435}\u{43B}\u{435}\u{444}\u{43E}\u{43D}" name="email" type="email" class="modal-input">
                <input required placeholder="\u{41F}\u{430}\u{440}\u{43E}\u{43B}\u{44C}" name="password" type="password" class="modal-input">
                <input id="remember" type="checkbox" class="modal-checkbox">
                <label class="modal-label" for="remember">\u{417}\u{430}\u{43F}\u{43E}\u{43C}\u{43D}\u{438}\u{442}\u{44C} \u{43F}\u{430}\u{440}\u{43E}\u{43B}\u{44C}</label>
                <div class="modal-reset"><a href="#" class="modal-reset__link">\u{412}\u{43E}\u{441}\u{441}\u{442}\u{430}\u{43D}\u{43E}\u{432}\u{438}\u{442}\u{44C}</a></div>
                <button class="btn modal-btn btn-dark ">\u{412}\u{43E}\u{439}\u{442}\u{438}</button>
                <button class="btn modal-btn ">\u{417}\u{430}\u{440}\u{435}\u{433}\u{435}\u{441}\u{442}\u{440}\u{438}\u{440}\u{43E}\u{432}\u{430}\u{442}\u{44C}\u{441}\u{44F}</button>
            </form>
        </div>
        </div>`,document.body.append(e),e.classList.add("show"),e).addEventListener("click",u=>{let e=u.target;(e.classList.contains("modal")||e.classList.contains("modal-close")||e.classList.contains("fa-xmark"))&&document.querySelector(".modal").remove()})})});
//# sourceMappingURL=index.72ac00b4.js.map
