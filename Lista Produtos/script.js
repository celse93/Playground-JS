
const produtos = [  {nome:"Laptop", categoria:"Tech", preco:"1000"},
                    {nome:"Phone", categoria:"Tech", preco:"500"},
                    {nome:"TV", categoria:"Tech", preco:"500"}]

for(i=0; i<produtos.length; i++) {

    let tabela = document.getElementById('produtoLista');
    let produtosTabelaLinha = document.createElement ('tr');
    
    let produtosTabelaDadosNome = document.createElement ('td');
    produtosTabelaDadosNome.innerHTML = produtos [i].nome;
    produtosTabelaLinha.appendChild(produtosTabelaDadosNome);
    tabela.appendChild(produtosTabelaLinha);

    let produtosTabelaDadosCategoria = document.createElement ('td');
    produtosTabelaDadosCategoria.innerHTML = produtos [i].categoria;
    produtosTabelaLinha.appendChild(produtosTabelaDadosCategoria);
    tabela.appendChild(produtosTabelaLinha);

    let produtosTabelaDadosPreco = document.createElement ('td');
    produtosTabelaDadosPreco.innerHTML = produtos [i].preco;
    produtosTabelaLinha.appendChild(produtosTabelaDadosPreco);
    tabela.appendChild(produtosTabelaLinha);




}
