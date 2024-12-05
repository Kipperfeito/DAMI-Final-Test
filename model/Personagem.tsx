import * as Speech from "expo-speech";

export class Personagem {
    public id: number;
    public nome: string;
    public idade: number;
    public classe: string;
    public descricao: string;
    
    constructor(obj?: Partial<Personagem>){
        if (obj) {
            this.id         = obj.id
            this.nome       = obj.nome
            this.idade      = obj.idade
            this.classe    = obj.classe
            this.descricao = obj.descricao
        }
    }

toObjeto(){
    const personagem = {
        id       : this.id,
        nome     : this.nome,
        idade    : this.idade,
        classe  : this.classe,
        descricao: this.descricao
    }
    return personagem;
}

toString(){
    const atributos = Object.values(this).join(', ');
    return `Personagem [${atributos}]`;
}
}