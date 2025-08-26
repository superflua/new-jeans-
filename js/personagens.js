function f_personagem(numero_personagem){

    fetch("http://localhost:3000/personagens")
      .then(response => {
        return response.json()
      }).then(usuariosJson => {
        console.log(usuariosJson);

        document.getElementById("conteudo-txt").innerHTML = " ";
        document.getElementById('conteudo-img').innerHTML = " "
  

        document.getElementById('conteudo-txt').innerHTML +=
                "<p id='nomePersona'>" +usuariosJson[numero_personagem].nome +
                "</p><p><b>Idade: </b></p>" +usuariosJson[numero_personagem].idade +
                "<p><b>Habilidades:</b></p>" + usuariosJson[numero_personagem].habilidades 

          document.getElementById('conteudo-img').innerHTML +=
          "<div>"+usuariosJson[numero_personagem].img +"</div>";

      });
  }