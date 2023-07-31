import { createDbConnection } from "./db.js";

const db = createDbConnection();

const insertRow = () => {
    const [name, color, weight] = process.argv.slice(2);
    db.run(
        `INSERT INTO sharks (name, color, weight) VALUES (?, ?, ?)`,
        [name, color, weight],
        function (err) {
            if (err) {
                throw new Error(err.message)
            }
            console.log(`Inserted a row with the ID: ${this.lastID}`);
        }
    );
}

insertRow();