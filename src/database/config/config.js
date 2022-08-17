module.exports = {
  "development": {
    "username": "root",
    "password": null,
    "database": "apetitos_db",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "port":"3307"   // Pon el puerto  que tenes configurado
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
