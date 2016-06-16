/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var qualquer = ['nome', 1, (2+2), true ];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function rtrn (arg) {
  return arg;
};

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/


/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/

function two (arg1, arg2) {
    return arg1[arg2];
};

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var numb = [1, 'a', '2', true, 1+1];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

> two(numb, 0); // 1
> two(numb, 1); // 'a'
> two(numb, 2); // '2'
> two(numb, 3); // true
> two(numb, 4); // 2

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book (x) {

    var livros = {
        livro1: {
            quantidadePaginas: 0,
            autor: 'Eu Mes',
            editora: 'Babadook'
        },
        livro2: {
            quantidadePaginas: 0,
            autor: 'Messy',
            editora: 'Badbad'
        },
        livro3: {
            quantidadePaginas: 0,
            autor: 'Eu',
            editora: 'dook'
        }
    };

    livroUM = livros.livro1;
    livroDOIS = livros.livro2;
    livroTRES = livros.livro3;

    return (x === undefined ? livros : x);
};

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
> book()
{ livro1: { quantidadePaginas: 0, autor: 'Eu Mes', editora: 'Babadook' },
  livro2: { quantidadePaginas: 0, autor: 'Messy', editora: 'Badbad' },
  livro3: { quantidadePaginas: 0, autor: 'Eu', editora: 'dook' } }


/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
// ?

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
// ?

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
// ?
