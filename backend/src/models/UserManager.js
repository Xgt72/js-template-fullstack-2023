const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "user" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (firstname, lastname, email, hashedPassword, role) values (?, ?, ?, ?, ?)`,
      [
        user.firstname,
        user.lastname,
        user.email,
        user.role,
        user.hashedPassword,
      ]
    );
  }

  update(user) {
    return this.database.query(
      `UPDATE ${this.table} SET firstname = ?, lastname = ?, email = ?, hashedPassword = ?, role = ? WHERE id = ?`,
      [user.firstname, user.lastname, user.email, user.role, user.id]
    );
  }

  findAll() {
    return this.database.query(
      `SELECT firstname, lastname, email, role FROM ${this.table} `
    );
  }

  findByEmail(mail) {
    return this.database.query(`SELECT * FROM  ${this.table} WHERE mail=?`, [
      mail,
    ]);
  }
}

module.exports = UserManager;
