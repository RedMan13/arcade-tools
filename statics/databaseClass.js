const fs = require('fs')
const writeee = require('write')

function write(whar, data) {
    console.log(`writing ${JSON.stringify(data)} to ${whar}`)

    if (typeof data != 'object') return

    writeee.sync(
        `../databases/${whar}`, 
        JSON.stringify(data), 
        { overwrite: true }
    )
}

function read(whar) {
    console.log(`reading ${whar}`)
    try {
        fs.accessSync(`../databases/${whar}`, fs.constants.F_OK)
    } catch {
        writeee.sync(
            `../databases/${whar}`, 
            '{}', 
            { overwrite: true }
        )
    }
    
    return JSON.parse(
        fs.readFileSync(`../databases/${whar}`)
    )
}

class database {
    static user(id) {
        return {
            set data(name) {
                write(`user/${id}.json`, name)
            },
            get data() {
                return read(`user/${id}.json`)
            }
        }
    }
    static channel(id) {
        return {
            set data(name) {
                write(`channel/${id}.json`, name)
            },
            get data() {
                return read(`channel/${id}.json`)
            }
        }
    }
    static server(id) {
        return {
            set data(name) {
                write(`server/${id}.json`, name)
            },
            get data() {
                return read(`server/${id}.json`)
            }
        }
    }
    static global() {
        return {
            set data(name) {
                write(`global.json`, name)
            },
            get data() {
                return read(`global.json`)
            }
        }
    }
}

module.exports = database