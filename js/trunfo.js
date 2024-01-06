let naruto = {
	nome: 'Naruto',
	imagem: 'assets/naruto.jpg',
	atributos: {
		taijutsu: 60,
		ninjutsu: 70,
		chakra: 100,
	},
};

let sasuke = {
	nome: 'Sasuke',
	imagem: 'assets/sasuke.jpg',
	atributos: {
		taijutsu: 80,
		ninjutsu: 80,
		chakra: 80,
	},
};

let sakura = {
	nome: 'Sakura',
	imagem: 'assets/sakura.jpg',
	atributos: {
		taijutsu: 60,
		ninjutsu: 90,
		chakra: 60,
	},
};

let kakashi = {
	nome: 'Kakashi',
	imagem: 'assets/kakashi.jpg',
	atributos: {
		taijutsu: 90,
		ninjutsu: 90,
		chakra: 50,
	},
};

let gaara = {
	nome: 'Gaara',
	imagem: 'assets/gaara.jpg',
	atributos: {
		taijutsu: 80,
		ninjutsu: 85,
		chakra: 100,
	},
};

let neji = {
	nome: 'Neji',
	imagem: 'assets/neji.jpg',
	atributos: {
		taijutsu: 85,
		ninjutsu: 80,
		chakra: 80,
	},
};

let tsunade = {
	nome: 'Tsunade',
	imagem: 'assets/tsunade.jpg',
	atributos: {
		taijutsu: 90,
		ninjutsu: 100,
		chakra: 100,
	},
};

let jiraya = {
	nome: 'Jiraya',
	imagem: 'assets/jiraya.jpg',
	atributos: {
		taijutsu: 95,
		ninjutsu: 95,
		chakra: 95,
	},
};

let orochimaru = {
	nome: 'Orochimaru',
	imagem: 'assets/orochimaru.jpg',
	atributos: {
		taijutsu: 90,
		ninjutsu: 100,
		chakra: 95,
	},
};

let hiruzen = {
	nome: 'Hiruzen',
	imagem: 'assets/hiruzen.jpg',
	atributos: {
		taijutsu: 100,
		ninjutsu: 95,
		chakra: 85,
	},
};

let rockLee = {
	nome: 'Rock Lee',
	imagem: 'assets/rockLee.jpg',
	atributos: {
		taijutsu: 95,
		ninjutsu: 20,
		chakra: 10,
	},
};

let mightGuy = {
	nome: 'Might Guy',
	imagem: 'assets/mightGuy.jpg',
	atributos: {
		taijutsu: 100,
		ninjutsu: 40,
		chakra: 20,
	},
};

let superTrunfo;
let cartaMaquina;
let cartaJogador;
let ninja = [naruto, sasuke, sakura, kakashi, gaara, neji, tsunade, jiraya, orochimaru, hiruzen, rockLee, mightGuy];

let pontosJogador = 0;
let pontosMaquina = 0;

atualizaPlacar();
atualizaQuantidadesDeCartas();

function atualizaQuantidadesDeCartas() {
	let divQuantidadeCartas = document.getElementById('quantidade-cartas');
	let html = 'Quantidade de cartas no jogo: ' + ninja.length;
	divQuantidadeCartas.innerHTML = html;
}

function atualizaPlacar() {
	let divPlacar = document.getElementById('placar');
	let html = 'Jogador ' + pontosJogador + '/' + pontosMaquina + ' Máquina';
	divPlacar.innerHTML = html;
}

function sortearCarta() {
	let numeroDaCartaMaquina = parseInt(Math.random() * ninja.length);
	cartaMaquina = ninja[numeroDaCartaMaquina];
	ninja.splice(numeroDaCartaMaquina, 1);

	let numeroDaCartaJogador = parseInt(Math.random() * ninja.length);
	cartaJogador = ninja[numeroDaCartaJogador];
	ninja.splice(numeroDaCartaJogador, 1);

	document.getElementById('btnSortear').disabled = true;
	document.getElementById('btnJogar').disabled = false;

	exibeCartaJogador();
}

function exibeCartaJogador() {
	let divCartaJogador = document.getElementById('carta-jogador');
	let moldura = '<img src="assets/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
	divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
	let nome = `<p class='carta-subtitle'>${cartaJogador.nome}</p>`;
	let opcoesTexto = '';

	for (let atributo in cartaJogador.atributos) {
		opcoesTexto += '<input type="radio" name="atributo" value="" + atributo + "">' + atributo + ' ' + cartaJogador.atributos[atributo] + '<br>';
	}
	let html = '<div id="opcoes" class="carta-status">';
	divCartaJogador.innerHTML = moldura + nome + html + opcoesTexto + '</div>';
}

function obtemAtributoSelecionado() {
	let radioAtributo = document.getElementsByName('atributo');
	for (let i = 0; i < radioAtributo.length; i++) {
		if (radioAtributo[i].checked) {
			return radioAtributo[i].value;
		}
	}
}

function jogar() {
	let divResultado = document.getElementById('resultado');
	let atributoSelecionado = obtemAtributoSelecionado();

	if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
		htmlResultado = '<p class="resultado-final">Você Venceu!!:)</p>';
		pontosJogador++;
	} else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
		htmlResultado = '<p class="resultado-final">Você Perdeu!!:(</p>';
		pontosMaquina++;
	} else {
		htmlResultado = '<p class="resultado-final">Empatou!!:(</p>';
	} if (ninja.length == 0) {
		alert('Fim de Jogo');
		if (pontosJogador > pontosMaquina) {
			htmlResultado = '<p class="resultado-final">Você Venceu!!:)</p>';
		} else if (pontosJogador < pontosMaquina) {
			htmlResultado = '<p class="resultado-final">Você Perdeu!!:)</p>';
		} else {
			htmlResultado = '<p class="resultado-final">Empatou!!:(</p>';
		}

	} else {
		document.getElementById('btnProximaRodada').disabled = false;
	}
	divResultado.innerHTML = htmlResultado;

	document.getElementById('btnJogar').disabled = true;

	exibeCartaMaquina();
	atualizaPlacar();
	atualizaQuantidadesDeCartas();
}

function proximaRodada() {
	let divCartas = document.getElementById('cartas');

	divCartas.innerHTML = '<div id="carta-jogador" class="carta"></div> <div id="carta-maquina" class="class"></div>';

	document.getElementById('btnSortear').disabled = false;
	document.getElementById('btnJogar').disabled = true;
	document.getElementById('btnProximaRodada').disabled = true;

	let divResultado = document.getElementById('resultado');
	divResultado.innerHTML = '';
}

function exibeCartaMaquina() {
	let divCartaMaquina = document.getElementById('carta-maquina');
	let moldura = '<img src="assets/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
	divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
	let nome = `<p class='carta-subtitle'>${cartaMaquina.nome}</p>`;
	let opcoesTexto = '';
	for (let atributo in cartaJogador.atributos) {
		opcoesTexto += '<p type="text" name="atributo" value="" + atributo + "">' + atributo + ' ' + cartaMaquina.atributos[atributo] + '</p>';
	}
	let html = '<div id="opcoes" class="carta-status">';
	divCartaMaquina.innerHTML = moldura + nome + html + opcoesTexto + '</div>';
}