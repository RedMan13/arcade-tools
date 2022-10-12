let database = require("cyclic-dynamodb")
database = database("good-jade-ray-capeCyclicDB")
let fs = require('fs');

const ledb = JSON.parse(fs.readFileSync('./databases/database.json', 'utf8'))
const leadb = JSON.parse(fs.readFileSync('./databases/level db.json', 'utf8'))

const leveling = database.collection('level db')
const gen = database.collection('other')

var j_list = (Object.getOwnPropertyNames(leadb));
for (var j_index in j_list) {
    let j = j_list[j_index];
    leveling.set(j, leadb[j])
}

var j_list = (Object.getOwnPropertyNames(ledb));
for (var j_index in j_list) {
    let j = j_list[j_index];
    gen.set(j, ledb[j])
}