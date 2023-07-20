const AbstractManager = require("./AbstractManager");

class SportManager extends AbstractManager {
  constructor() {
    super({ table: "sport" });
  }

  insert(sport) {
    return this.database.query(
      `insert into ${this.table} (name, start, end , rate, description, image) values (?, ?, ?, ?, ?, ?)`,
      [
        sport.name,
        sport.start,
        sport.end,
        sport.rate,
        sport.description,
        sport.image,
      ]
    );
  }

  update(sport) {
    return this.database.query(
      `update ${this.table} set start = ?, end = ?, rate = ?,  where id = ?`,
      [sport.start, sport.end, sport.rate, sport.id]
    );
  }
}

module.exports = SportManager;
