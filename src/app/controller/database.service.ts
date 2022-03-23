import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(
    private platform: Platform,
    private sqlite: SQLite
  ) { }

  // Criar a base de dados
  public getDatabase() {
    return this.sqlite.create({
      name: 'castro_softerp_db.db',
      location: 'default'
    });
  }

  // Inicia a base de dados e cria as tabelas
  public createDatabase() {
    return this.getDatabase().then((database: SQLiteObject) => {
      this.createTableProduct(database);
    }).catch((error) => {
      console.log(error);
    });
  }

  // Cria a tabela de produto com os campos
  public createTableProduct(database: SQLiteObject) {
    database.executeSql(`
    CREATE TABLE IF NOT EXISTS produto (
      _Id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
      CODBARRA varchar(20),
      CATEGORIA integer,
      UNIDADE varchar(3),
      MARGEM real,
      PR_COMPRA real,
      PR_CUSTO
      PR_VENDA real,
      QTD_ATUAL real,
      QTD_MIN real,
      ATIVO varchar(1),
      EMPRESA integer,
      DT_CADASTRO text,
      FRACIONAR varchar(1),
      DESCRICAO varchar(100),
      ACTION varchar(1), -- I = Insert | U = Update
      SYNC varchar(1) -- S = Sincronizado | N = Nao Sincronizado
    )
    `, [])
      .then(() => {
        console.log('Table Product Created Success.');
      })
      .catch(e => {
        alert('error' + JSON.stringify(e));
      });
  }
}
