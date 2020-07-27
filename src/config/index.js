const config = {
    SERVER_PORT: process.env.PORT || 3000,
    DDBB: {
        USER: 'root',
        PASSWORD: '',
        HOST: '127.0.0.1',
        PORT: '3306',
        NAME: 'delilahdb',
    },
    JWT: {
        PRIVATE_KEY: 'secret',
        EXPIRES_TIME: 10
    }
}
module.exports = config