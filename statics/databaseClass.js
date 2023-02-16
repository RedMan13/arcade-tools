const fs = require('fs')
const writeee = require('write')

function write(whar, data) {
    throw new Error('read function hasnt been initialised yet')
}

function read(whar) {
    throw new Error('read function hasnt been initialised yet')
}

// sorry linux users but replit is anoying and this has to be done
if (process.platform === 'linux') {
    console.warn('running on replit may not be advised as it requiresyou use replit db or modify the code.')
    write = (path, data) => imports.exec(`curl $REPLIT_DB_URL -d '${path}=${data}'`)
    read = (path) => imports.exec(`curl $REPLIT_DB_URL/${path}`)
} else {
    write = (whar, data) => {
        console.log(`writing ${JSON.stringify(data)} to ${whar}`)

        if (typeof data != 'object') return
    
        writeee.sync(
            `../databases/${whar}`, 
            JSON.stringify(data), 
            { overwrite: true }
        )
    }
    read = (whar) => {
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