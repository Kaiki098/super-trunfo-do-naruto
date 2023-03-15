var naruto ={
    nome:"Naruto",
    imagem: "https://f.i.uol.com.br/fotografia/2021/02/18/1613659263602e7c7f84084_1613659263_3x2_md.jpg",
    atributos:{
      taijutsu:60,
      ninjutsu:70,
      chakra:100
     } 
  }
  
  var sasuke={
    nome:"Sasuke",
    imagem: "https://animanganaruto77.files.wordpress.com/2009/08/sasukeuchiha.jpg?w=584",
    atributos:{
      taijutsu:80,
      ninjutsu:80,
      chakra:80
    }
  }
  
  var sakura ={
    nome:"Sakura",
    imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjB9Z_foFDxIX7qsIvXEzO3qKe1tvxyjV1mg&usqp=CAU",
    atributos:{
      taijutsu:60,
      ninjutsu:90,
      chakra:60
    }
  } 
  
  var kakashi ={
    nome:"Kakashi",
    imagem: "https://img.quizur.com/f/img5cd4d050481100.63727352.jpeg?lastEdited=1557450857",
    atributos:{
      taijutsu:90,
      ninjutsu:90,
      chakra:50
    }
  }
  
  var gaara ={
    nome:"Gaara",
    imagem: "https://kanto.legiaodosherois.com.br/w760-h398-gnw-cfill-q80/wp-content/uploads/2020/09/legiao_w8vr9bf7zBIa.png.jpeg",
    atributos:{
      taijutsu:80,
      ninjutsu:85,
      chakra:100
    }
  }
   
  var neji ={
    nome:"Neji",
    imagem: "https://i.redd.it/nr5brf71qsh51.png",
    atributos:{
      taijutsu:85,
      ninjutsu:80,
      chakra:80
    }
  }
  
  var tsunade ={
    nome:"Tsunade",
    imagem: "http://pm1.narvii.com/6800/d407cb1afdb31a36c7c31fb36da6c01c813eae0bv2_00.jpg",
    atributos:{
      taijutsu:90,
      ninjutsu:100,
      chakra:100
    }
  }
  
  var jiraya ={
    nome:"Jiraya", 
    imagem: "https://www.einerd.com.br/wp-content/uploads/2019/10/Jiraiya-Naruto-capa.png",
    atributos:{
      taijutsu:95,
      ninjutsu:95,
      chakra:95
    }
  }
  
  var orochimaru ={
    nome:"Orochimaru",
    imagem: "https://www.comboinfinito.com.br/principal/wp-content/uploads/2018/09/orochimaru-boruto.jpg",
    atributos:{
      taijutsu:90,
      ninjutsu:100,
      chakra:95
    }
  }
  
  var hiruzen ={
    nome:"Hiruzen",
    imagem: "https://i1.wp.com/www.breaktudo.com/wp-content/uploads/2019/11/sarutobi-de-naruto.jpg?fit=583%2C460&ssl=1",
    atributos:{
      taijutsu:100,
      ninjutsu:95,
      chakra:85
    }
  }
  
  var rockLee ={
    nome:"Rock Lee",
    imagem: "https://pm1.narvii.com/6324/db612cedb6a3a1fdc0527a52711c2bf722de2f79_hq.jpg",
    atributos:{
      taijutsu:95,
      ninjutsu:20,
      chakra:10
    }
  }
  
  var mightGuy ={
    nome:"Might Guy",
    imagem: "https://criticalhits.com.br/wp-content/uploads/2019/02/Might-Guy.jpg",
    atributos:{
      taijutsu:100,
      ninjutsu:40,
      chakra:20
    }
  }
  var superTrunfo
  var cartaMaquina
  var cartaJogador
  var ninja = [naruto, sasuke, sakura, kakashi, gaara, neji, tsunade, jiraya, orochimaru, hiruzen, rockLee, mightGuy]
   
  var pontosJogador = 0
  var pontosMaquina = 0
  
  atualizaPlacar()
  atualizaQuantidadesDeCartas()
  
  function atualizaQuantidadesDeCartas(){
    var divQuantidadeCartas = document.getElementById('quantidade-cartas')
    var html = "Quantidade de cartas no jogo: " + ninja.length
    
    divQuantidadeCartas.innerHTML = html
  }
  
  function atualizaPlacar(){
    var divPlacar = document.getElementById('placar')
    var html = "Jogador " + pontosJogador + "/" + pontosMaquina + " Máquina"
    divPlacar.innerHTML = html
  }
  
  function sortearCarta(){
    var numeroDaCartaMaquina = parseInt(Math.random() * ninja.length)
    cartaMaquina = ninja[numeroDaCartaMaquina]
    ninja.splice(numeroDaCartaMaquina, 1)
    
    var numeroDaCartaJogador = parseInt(Math.random() * ninja.length) 
    cartaJogador = ninja[numeroDaCartaJogador]
    ninja.splice(numeroDaCartaJogador, 1)
    
    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
    
      exibeCartaJogador()
  }
  
  function exibeCartaJogador(){
      var divCartaJogador = document.getElementById("carta-jogador")
      var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
      divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`
      var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`
      var opcoesTexto = ""
   
      for (var atributo in cartaJogador.atributos){
          opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaJogador.atributos[atributo] + "<br>"
    }
    var html = '<div id="opcoes" class="carta-status">'
    divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
  }
  
  function obtemAtributoSelecionado(){
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0;i < radioAtributo.length; i++){
      if (radioAtributo[i].checked){
        return radioAtributo[i].value
      }
    }
  }
  
  function jogar(){
    var divResultado = document.getElementById("resultado")
    var atributoSelecionado = obtemAtributoSelecionado()
    
    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
      htmlResultado = '<p class="resultado-final">Você Venceu!!:)</p>'
      pontosJogador++
  }else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]){
      htmlResultado = '<p class="resultado-final">Você Perdeu!!:(</p>'
      pontosMaquina++
    }else {
      htmlResultado = '<p class="resultado-final">Empatou!!:(</p>'
    }if (ninja.length == 0){
      alert('Fim de Jogo')
      if (pontosJogador > pontosMaquina){
        htmlResultado = '<p class="resultado-final">Você Venceu!!:)</p>'
      }else if (pontosJogador < pontosMaquina){
        htmlResultado = '<p class="resultado-final">Você Perdeu!!:)</p>'
      }else {
        htmlResultado = '<p class="resultado-final">Empatou!!:(</p>'
      }
      
    } else{                   document.getElementById('btnProximaRodada').disabled = false
    }
    divResultado.innerHTML = htmlResultado
    
    document.getElementById('btnJogar').disabled = true
    
    exibeCartaMaquina()
    atualizaPlacar()
    atualizaQuantidadesDeCartas()
  }
  
  function proximaRodada(){
    var divCartas = document.getElementById('cartas')
    
    divCartas.innerHTML = `<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="class"></div>`
    
    document.getElementById('btnSortear').disabled = false
    document.getElementById('btnJogar').disabled = true
    document.getElementById('btnProximaRodada').disabled = true
    
    var divResultado = document.getElementById('resultado')
    divResultado.innerHTML = ""
  }
  
  function exibeCartaMaquina(){
    var divCartaMaquina = document.getElementById("carta-maquina")
    var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
    divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`
    var opcoesTexto = ""
    for (var atributo in cartaJogador.atributos){
      opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + " " + cartaMaquina.atributos[atributo] + "</p>"
    }
    var html = '<div id="opcoes" class="carta-status">'
    divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>'
  }