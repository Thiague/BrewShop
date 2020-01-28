# BrewShop sua loja online de cervejas

O App BrewShop é uma loja virtual de cervejas desenvolvida com as seguintes tecnologias:

react

redux

redux-saga

styled-components

immer

toastify

O BrewShop consiste numa aplicação que te permite adicionar e remover cervejas em seu carrinho de compras com uma interface simples e intuitiva, que inclusive te indica se o seu produto favorito tem o estoque suficiente para sua bebilança.

- Download do projeto

Para download do projeto você pode clonar esse repositório git ou fazer o download em arquivo ZIP e depois extrair. O próximo passo para execução da aplicação é a instalação das dependências.

- Instalação das dependências

Antes de inicializar a aplicação é necessário instalar as dependencias do projeto. Essa instalação pode ser feita de forma simples, por meio do acesso ao diretorio do projeto e da execução do comando que instala as dependencias do projeto da seguinte forma:

- Acesso ao diretorio do projeto

cd brewShop

- instalação das dependencias

npm install ou yarn install

- Inicialização da aplicação

A aplicação funciona com uma fake api desenvolvida com json-server, onde temos os dados estáticos dos produtos dessa forma após a instalação das dependências execute o seguinte comando na pasta raiz da aplicação:

json-server server.json -p 3333

Acima o comando json-server executa nosso arquivo server.json com nossa fake api o proximo argumento -p é o direcionamento para porta que no caso acima é a 3333. A porta padrão do json-server é a 3000, que também é a porta padrão do react, dessa forma sugerimos que execute o comando acima com a porta 3333, ou qualquer outra porta que não seja a 3000 e que não esteja ocupado por outro serviço em sua maquina.

Por fim para iniciar a aplicação e comprar suas brejas utilize os seguintes código na linha de comando:

npm start or yarn start

Dai pra frente é com você!

Valeu!
