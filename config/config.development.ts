import db from "./dbdebug.json";
export const config = {
    database: {
        dialect: "postgres",
        host: db.host,
        port: 5533,
        username: db.user,
        password: db.pass,
        database: db.dbname,
        logging: false
    },
    jwtPrivateKey: "jwtPrivateKey"
};
