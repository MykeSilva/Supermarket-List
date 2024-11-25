
var items =[];

document.querySelector('input[type=submit]')
.addEventListener('click',()=>{
    alert('clicado');

    var nomeProduto = document.querySelector
    ('input[name=nome_produto]')

    var precoProduto = document.querySelector
    ('input[name=price]')

    alert(nomeProduto);
    alert(precoProduto);

    items.push({
        nome: nomeProduto.value,
        valor: precoProduto.value
    });

    /*
       <div class="lista-produto-single">
            <h3>RedBull</h3>
            <h3 class="price-produto"><span>R$7,45</span></h3>
        </div>
    */

    let listaProdutos = document.querySelector('.lista-produtos');
// VOU CRIAR UMA VARIÁVEL PARA SOMAR
    let soma = 0

    // DESSA FORMA EU POSSO CADASTRAR SEM DUPLICAR OS ITENS
    listaProdutos.innerHTML = "";
    /* ESTOU FAZENDO UM LOOP QUE EU CONSIGO RECUPERAR CADA VALOR */
    items.map(function(val){
        soma+=parseFloat(val.valor);
// FUNÇÃO PARA ADICIONAR CONTEÚDO 
        listaProdutos.innerHTML+= `
    <div class="lista-produto-single">
        <h3>`+val.nome+`</h3>
        <h3 class="price-produto"><span>`+val.valor+`</span></h3>
    </div>
        
        `;

    })
// É UMA FUNÇÃO DO JAVASCRIPT QUE DIZ QUE EU QUERO PEGAR 2 CASAS DECIMAIS DEPOIS
    soma = soma.toFixed(2)
// NA HORA QUE EU CADASTRAR UM PRODUTO, O CAMPO FICA VAZIO
    nomeProduto.value = "";
    precoProduto.value = "";

 
    alert(items[0].nome);

    let elementoSoma = document.querySelector('.soma-produto h1');
    elementoSoma.innerHTML = 'R$'+soma

});


// DEFININDO A EVENTO DE CLICK PARA LIMPAR TUDO
document.querySelector('button[name=limpar]')
.addEventListener('click',()=>{
    items = [];
  

    document.querySelector('.lista-produtos').innerHTML = "";
    document.querySelector('.soma-produto h1').innerHTML = "R$0,00";


})













