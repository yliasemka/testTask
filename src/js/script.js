'use strict'

window.addEventListener('DOMContentLoaded', () =>{
    const btnFreeTry = document.querySelector('.demo-free')

    function createModal(){
        let modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `<div class="modal-dialog">
        <div class="modal-content">
            <div data-close class="modal-close"><i class="fa-solid fa-xmark"></i></div>
            <form action="#">
                <div class="modal-title">Войти в систему</div>
                <input required placeholder="Email/Телефон" name="email" type="email" class="modal-input">
                <input required placeholder="Пароль" name="password" type="password" class="modal-input">
                <input id="remember" type="checkbox" class="modal-checkbox">
                <label class="modal-label" for="remember">Запомнить пароль</label>
                <div class="modal-reset"><a href="#" class="modal-reset__link">Восстановить</a></div>
                <button class="btn modal-btn btn-dark ">Войти</button>
                <button class="btn modal-btn ">Зарегестрироваться</button>
            </form>
        </div>
        </div>`
        document.body.append(modal);
        modal.classList.add('show');
        return modal
    }

    function closeModal(){
        const modal = document.querySelector('.modal');
        modal.remove(); 
    }

    btnFreeTry.addEventListener('click', (event) =>{
        let modal = createModal();
        modal.addEventListener('click', (event) =>{
            const target = event.target; 
            if(target.classList.contains("modal") || target.classList.contains("modal-close") || target.classList.contains("fa-xmark")){
                closeModal();
            } 
        })
    })
})