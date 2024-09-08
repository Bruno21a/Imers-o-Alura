

function pesquisar() {

    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value
    
    if(campoPesquisa == ""){
        section.innerHTML = "Escreva o nome de um ídolo ou alguma letra que possua em seu nome."
        return
    }

    let resultados = "";


    for (let dado of dados) {
       if( dado.titulo.includes(campoPesquisa) || dado.descricao.includes(campoPesquisa)){
        resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a>
            </h2>
            <p class="descricao-meta">${dado.descricao}</p>
            <a href=${dado.link} target="_blank">Mais informações</a>
        </div>
        `;
       }
        
    }

    section.innerHTML = resultados;
}