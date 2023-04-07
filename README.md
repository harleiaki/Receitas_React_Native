

https://user-images.githubusercontent.com/96266332/230491835-4d3f16ba-42b7-4ea7-af90-d01796fa6a95.mp4



# Receitas_React_Native

- https://moti.fyi/installation
- https://react-native-async-storage.github.io/async-storage/docs/usage
- https://reactnavigation.org/docs/getting-started/
- https://docs.expo.dev/


## Para rodar:

- cd no local do arquivo:
- json-server --watch -d 180 --host 192.168.0.11 db.json    --- vai depender o seu ipv4 para saber é só dar um ipconfig e verificar/ essa é uma api com as receitas. IMPORTANTE DEIXAR O CMD ABERTO
- abrir outro terminal e fazer novamente o cd no local do arquivo com o comando:
- npx expo start

## App.js
controle de rotas das telas.

## src components: 
- foodlist: gradiente das imagens da tela home do app e estilização de texto
- ingredients: estilização da parte de ingredientes da api de receitas
- instructions: estilização da parte de instruções da api de receitas
- logo: estilização de texto animado do home
- video: estilização do botão de play 

## src pages:
- detail: estilização da pagina de receitas e icones de coração e compartilhamento
- favorites: estilização da página de receitas
- home: estilização da home input e logo
- search: pagina de pesquisa 

## src routes:
- tabbar
- stackbar

## src services:
- conexão com api

## src utils:
- armazenamento de dados
