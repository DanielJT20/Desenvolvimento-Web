const params = new URLSearchParams(window.location.search);
const id = params.get("id")


const pega_json = async (caminho) => {
    const resposta = await fetch(caminho);
    const dados = await resposta.json();
    return dados;
}
const montaPagina = (dados) =>{
    const body = document.body;

    const nome = document.createElement("h1");
    nome.innerHTML = dados.nome;
    body.appendChild(nome);

    const imagem = document.createElement("img");
    imagem.src = dados.imagem;
    body.appendChild(imagem);

    const descri = document.createElement("p");
    descri.innerHTML = dados.detalhes;
    body.appendChild(descri);

 

};
pega_json(`https://botafogo-atletas.mange.li/2024-1/${id}`).then( (r) => montaPagina(r)
)



