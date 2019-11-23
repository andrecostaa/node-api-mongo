const env = process.env.NODE_ENV || 'dev';

const config = () => {
    switch(env) {
        case 'dev':
        return {
            bd_string: 'mongodb+srv://<login>:<password>@cluster0-ajy1p.mongodb.net/test?retryWrites=true&w=majority',
            jwt_pass: 'batatafrita2019',
            jwt_expires_in: '7d'
        }

        case 'hml':
        return {
            bd_string: 'mongodb+srv://<login>:<password>@cluster0-ajy1p.mongodb.net/test?retryWrites=true&w=majority',
            jwt_pass: 'hml2019',
            jwt_expires_in: '7d'
        }

        case 'prod':
        return {
            bd_string: 'mongodb+srv://<login>:<password>@cluster0-ajy1p.mongodb.net/test?retryWrites=true&w=majority',
            jwt_pass: 'kjaDSHadj89&D*(SA&D@L!KDSIA',
            jwt_expires_in: '20d'
        }
    }
}

console.log(`Iniciando a API em ambiente ${env.toUpperCase()}`);

module.exports = config();