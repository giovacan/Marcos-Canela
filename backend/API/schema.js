const {importSchema} = require ('graphql-import');

const typeDefs = importSchema('API/myschema.graphql');

module.exports = {typeDefs};