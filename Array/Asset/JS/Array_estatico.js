function revisao_Array(){
    console.log("ARRAYS")

    // ( ) parênteses
    // [ ] colchetes
    // { } chaves
    // Array é uma super variável que vai armazenar mais de um dado
    
    // índices       0         1         2        3        4
    let frutas = [ "Maçã", "Banana", "Laranja", "Uva", "Morango" ]
    console.log(frutas)
    
    // Podemos armazenar ários tipos de dados diferentes
    //                  0        1      2
    let sobreMim = ["Fernanda", 22, "Morango"]
    
    // Para imprimirmos no console um item específico do nosso array
    // console.log(nomeDaVariavel[indice])
    
    console.log(sobreMim[2])
    
    let series = ['Sobrenatural', "VandaVision","Pinguim","House of Dragon"];
    console.log(series);
    
    //.push - Para adicionar item no final da fila
    series.push();
    
    //.unshift() - Para adicionar no inicio da fila
    series.unshift();
    
    //inverter ordem
    series.reverse();
    
    // .sort() - Organiza os elementos em ordem crescente numerica
    series.sort();
    
    //.shift() - Remove o primeiro da lista
    series.shift();
    
    //.pop() - Remove o ULTIMO da lista
    series.pop();
    
    //.slice(cortar do valor a até, Y)
    series.slice(1,2);    
}

//Banco de dados 

//Array_simples
let info_produtos = ['Do 0 ao 1 milhão', 'A biblia do PHP', "Ventilando conhecimento", 'Engenharia de Software', 'Banco de dados'];

//JSON

// -- array de objetos

let animes = {
    "mangá":
        [
            {
                "id":1,
                "nome":'Naruto',
                "ano":1998
            },
            {
                "id":1,
                "nome":'Naruto',
                "ano":1998
            },
            {
                "id":1,
                "nome":'Naruto',
                "ano":1998
            },
            {
                "id":1,
                "nome":'Naruto',
                "ano":1998
            }
        ],
    "anime": [
        {
            'id': 1,
            'nome': 'Dan Dan Dan',
            'ano':2024
        }
    ]
}

// -- array de objeto unico

let db_animes = {
    "animes": [
      {
        "nome": "Naruto",
        "ano_lancamento": 2002,
        "genero": "Ação"
      },
      {
        "nome": "Re:Zero",
        "ano_lancamento": 2016,
        "genero": "Isekai"
      },
      {
        "nome": "House of the Dragon",
        "ano_lancamento": 2022,
        "genero": "Fantasia"
      }
    ],
    "Livros": [
      {
        "nome": "O Alquimista",
        "autor": "Paulo Coelho",
        "ano_publicacao": 1988
      }
    ],
    "Filmes": [
      {
        "nome": "Velozes e Furiosos",
        "ano_lancamento": 2001,
        "autores": ["Gary Scott Thompson"],
        "clientes": [
          { "nome": "Marcos", "idade": 30, "cidade": "São Paulo" },
          { "nome": "Débora", "idade": 25, "cidade": "Rio de Janeiro" },
          { "nome": "Carlo", "idade": 35, "cidade": "Curitiba" }
        ]
      },
      {
        "nome": "Anabelle",
        "ano_lancamento": 2014,
        "autores": ["Gary Dauberman"],
        "clientes": [
          { "nome": "ZERYK", "idade": 30, "cidade": "São Paulo" },
          { "nome": "Goku", "idade": 25, "cidade": "Rio de Janeiro" },
          { "nome": "Victor", "idade": 35, "cidade": "Curitiba" }
        ]
      },
      {
        "nome": "Dragon Ball",
        "ano_lancamento": 1986,
        "autores": ["Akira Toriyama"],
        "clientes": [
          { "nome": "Matheus", "idade": 30, "cidade": "São Paulo" },
          { "nome": "Karol", "idade": 25, "cidade": "Rio de Janeiro" },
          { "nome": "JURYS", "idade": 35, "cidade": "Curitiba" }
        ]
      }
    ]
  };
  
const pessoa = {
  nome:"Marcos",
  endereco:"Açailândia"
}

const fruta = {
  nome
}

function Objeto_ForEach() {  }

let array = [1, 2, 3, 4, 5];

function Array_ForEach(){
    console.log("-----FOR EACH----------")
    db_animes.Filmes.forEach(dados_animes => {
        console.log("Filmes:",dados_animes.nome);
        dados_animes.clientes.forEach(dados_clientes => {
            console.log("-Nome",dados_clientes.nome);
            console.log("-Idade",dados_clientes.idade);
            console.log("-Cidade",dados_clientes.cidade);
            console.log("")
        });
        console.log("")
    });
}

function Array_For(){
    console.log("-----FOR UNI/MULT DIMENSÕES----------");
    console.log("");

    /*console.log("------Animes-----");
    for (let i = 0; i < db_animes.animes.length; i++) {
        console.log('Nome:',db_animes.animes[i].nome);
        console.log('Ano de Lancamento:',db_animes.animes[i].ano_lancamento);
        console.log('Genero:',db_animes.animes[i].genero);
        console.log("");
    }*/

    /*console.log("------Livros-----");
    for (let i = 0; i < db_animes.Livros.length; i++) {
        let livros = db_animes.Livros[i];
        console.log('Nome:',livros.nome);
        console.log('Autor:',livros.autor);
        console.log('Ano de Publicação:',livros.ano_publicacao);
        console.log("");
    }*/
    
    console.log("------FILMES-----");
    for (let i = 0; i < db_animes.Filmes.length; i++) {
        let filmes = db_animes.Filmes[i];
        console.log("Nome:", filmes.nome);
        
        for (let x = 0; x < filmes.autores.length; x++) {
            console.log("Autores:", filmes.autores[x]);
        }

        console.log("Ano de Lançamento:", filmes.ano_lancamento);
        //console.log("Clientes:", filmes.clientes);

        console.log("  ------CLIENTES-----");
        for (let c = 0; c < filmes.clientes.length; c++) {
            console.log('   -Nome do cliente:',filmes.clientes[c].nome);
            console.log('   -idade:',filmes.clientes[c].idade);
            console.log('   -cidade:',filmes.clientes[c].cidade);
            console.log("");
        }
    }
}

