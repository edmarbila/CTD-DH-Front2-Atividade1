//Participantes: Marcelo Roberto, Rodrigo Escobar, Edmar Bila, Dário Olah e Lucas Ferreira Nogueira

(window.onload = function() {
    var body = document.body
    var app = document.querySelector(".l-app");
    var botao = document.querySelector(".l-sidebar__btn");
    var sidebar = document.querySelector(".l-sidebar");
    var controle = 0;
    let page = document.querySelector("#bg__profile");
    let sobremim = document.querySelector("#sobre-mim");
    let contatos = document.querySelector("#contatos");
    
    //1. **(20pts)** Esta sessão deverá ser apresentada sempre que houver o click no **botão Menu**: `<button class="l-sidebar__btn"type="button">Menu</button>`.
    //1.1. Quando houver o click do usuário, a sidebar deverá ser apresentada: `<div class="l-sidebar">`
    
    botao.addEventListener("click", function(evento){
        // **botão Menu**: `<button class="l-sidebar__btn"type="button">Menu</button>.
         botao.classList.add("l-sidebar__btn");
         console.log(botao);
    })


    botao.addEventListener("click", function(evento){
        // sidebar.classList.add("l-sidebar--open");
         sidebar.classList.add("l-sidebar--open");
         console.log(botao);
    })
        // sidebar.classList.add("l-sidebar--close");
    sidebar.addEventListener("click", function(evento){
        sidebar.classList.remove("l-sidebar--open");
        sidebar.classList.add("l-sidebar--close");
        sidebar.classList.remove("l-sidebar--close");
        console.log(sidebar);
    });

    //2. **(20pts)** O usuário poderá usar o teclado para abrir ou fechar a sidebar. No caso, as tecla `Space`.
    
    body.addEventListener("keypress" , function(evento){ 

            if (evento.code == 'Space'){
                if (controle == 0) {
                    sidebar.classList.add("l-sidebar--open");
                    controle = 1;
                } else {
                    sidebar.classList.remove("l-sidebar--open");
                    sidebar.classList.add("l-sidebar--close");
                    sidebar.classList.remove("l-sidebar--close");
                    controle = 0;
                }
            }
        });

    
    // 3. **(20pts)** O usuário poderá usar o mouse para abrir ou fechar a sidebar. No caso, um duplo click em qualquer local do site irá abrir ou fechar a sidebar.

    app.addEventListener("dblclick" , function(evento){            
                if (controle == 0) {
                    sidebar.classList.add("l-sidebar--open");
                    controle = 1;
                } else {
                    sidebar.classList.remove("l-sidebar--open");
                    sidebar.classList.add("l-sidebar--close");
                    sidebar.classList.remove("l-sidebar--close");
                    controle = 0;
                }
      // 
        });

        // 4. **(20pts)** Um boxe de texto irá acompanhar o cursor do mouse.
        var cursor = document.querySelector(".cursor");

        //capturar a posição do mouse na tela
        document.addEventListener("mousemove", function(evento){
            let xPos = evento.pageX + 15;
            let yPos = evento.pageY + 15;
            
            cursor.style.left = xPos + "px";
            cursor.style.top = yPos + "px";
        
        });
        
        // 4.1. O texto deverá mudar quando o cursor do mouse sobrepor qualquer uma das sessão do site:

        // - Receberá o texto `Bem vindo`.   
        // - Receberá o texto `Sobre mim`.
        // - Receberá o texto `Contatos`.
        page.addEventListener("mouseover", function(evento){
                cursor.innerHTML = "Bem vindo";
        });

        sobremim.addEventListener("mouseover", function(evento){
            cursor.innerHTML = "Sobre Mim";
        });

        contatos.addEventListener("mousemove", function(evento){
            cursor.innerHTML = "Contatos";
        });
});