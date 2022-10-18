const jsonfile = require('jsonfile');
const moment = require('moment');
const simpleGit = require('simple-git');
const random = require('random');


const FILE_PATH = './data.json';





const makeCommit = (n, minusDay) => {
    if (n === 0) {
        return simpleGit().push();
    }
    

    const DATE = moment().subtract(minusDay,'d').format();

    const data = {
                    date: DATE,
                    author : "Zaman Sheikh"
                    }
    console.log(DATE);

    jsonfile.writeFile(FILE_PATH, data, ()=>{
        simpleGit().add([FILE_PATH]).commit(DATE,{'--date':DATE},makeCommit.bind(this, --n));
    } );
    //git commit --amend --no-edit --date="`date`"

}
//MakeCommit(CommitNumer,SubstructedDate)
makeCommit(8,2);