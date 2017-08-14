module.exports = {
    'validator': { '$or': [
        { 'name': {'$type': "string" }},
        { 'kind': {'$in': [ "Unknown", "Client" ] }}
    ]}
};