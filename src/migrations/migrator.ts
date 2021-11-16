import * as path from 'path';
var mm = require('mongodb-migrations');

export class Migrator {
    public migrate() {
        var migrator = new mm.Migrator({
            'url': 'mongodb://developerx:test@127.0.0.1:27017/NGInvoicing'
        });
        var migrationPath = path.join(__dirname);
        migrator.runFromDir(migrationPath, function(err, result){
            if(err) {
                console.warn(err);
            }
        });
    }
} 