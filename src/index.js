class Heroi{
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    switch (this.tipo.toLowerCase()) {
      case 'mago':
        ataque = 'magia';
        break;
      case 'guerreiro':
        ataque = 'espada';
        break;
      case 'monge':
        ataque = 'artes marciais';
        break;
      case 'ninja':
        ataque = 'shuriken';
        break;
      default:
        ataque = 'ataque desconhecido';
        break;
    }

    console.log(`o ${this.type} ${this.nome} atacou usando ${atack}`);  }
}

const mago = new Heroi('Harry', 20, 'mago');
mago.atacar();

const guerreiro = new Heroi('Ragnar', 30, 'guerreiro');
guerreiro.atacar();

const monge = new Heroi('Dalai', 45, 'monge');
monge.atacar();

const ninja = new Heroi('Hatori', 35, 'ninja');
ninja.atacar();

