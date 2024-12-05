import { Database } from "../database/Database";
import { Personagem } from "../model/Personagem";

export class PersonagemService {
    static readonly TABLE = `personagem`
    
    static async create(obj: Personagem) {
        try {
            const result = await Database.runQuery(
              `INSERT INTO ${this.TABLE} (nome, idade, classe, descricao) VALUES (?, ?, ?, ?)`,
              [obj.nome, obj.idade, obj.classe, obj.descricao]
            );
        
            console.log('Resultado do insert:', result);
        
           obj.id = result
           return obj;
          } catch (error) {
            console.error('Erro ao salvar personagem:', error);
            throw error;
          }
    }

    static async update(obj: Personagem) {
        const query = `UPDATE ${this.TABLE} 
        set nome = ? ,   
        idade = ? ,  
        classe = ? ,  
        descricao =?  
        WHERE id = ?;`
        const result = await Database.runQuery(query, [
            obj.nome,            
            obj.idade, 
            obj.classe,           
            obj.descricao,            
            obj.id
        ])
        return result.rowsAffected > 0
}

    static async delete(id) {
        const query = `DELETE FROM ${this.TABLE} where id = ?;`
        const result = await Database.runQuery(query, [id])

        return result;
    }

    static async tryRemoveImage(id: number) {

    }

    static async findById(id: number) {
        const query = `SELECT * FROM ${this.TABLE} WHERE id = ?;`
        const result = await Database.runQuery(query, [id])

        if (result.rows.length != 1) {
            throw new Error('Personagem não existe')
        }

        const raw = result.rows.item(0)
        const obj = new Personagem(raw)

        return obj
    }

    static async findAll() {
        const allRows = await Database.getAll();
        return allRows.map(row => new Personagem(row))
    }

}