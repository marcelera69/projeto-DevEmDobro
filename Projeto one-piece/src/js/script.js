const botoes = document.querySelectorAll('.botao');
         const personagens = document.querySelectorAll('.personagem')

         botoes.forEach((botao, index) =>{
            botao.addEventListener("click", () => {
                
                const personagemSelecionado = document.querySelector(".personagem.selecionado")
                personagens[index].classList.add("selecionado")
                personagemSelecionado.classList.remove("selecionado")

                const botaoSelecionado = document.querySelector(".botao.selecionado")
                botaoSelecionado.classList.remove("selecionado")
                botao.classList.add("selecionado")
            });
         });





