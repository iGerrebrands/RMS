module.exports = {
    'validator': { '$or': [
        { 'name': {'$type': "string" }},
        { 'email': {'$type': "string" }}
    ]}
};