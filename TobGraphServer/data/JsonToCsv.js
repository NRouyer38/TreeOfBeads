function convertJsonToCSV() {
    // CREATE CONCEPTS NODE
    // CREATE FILE
    let concept = 'data/concept.csv';
    fs.writeFileSync(concept, 'Id,Code,Name,Description,Parent\r');

    // WRITE IN FILE
    let key = 0;
    obj.concepts.forEach(c => {

        let parent = getParent(c.code);

        let row = key + "," + c.code + "," + c.name.replace(/,/gi, " -").replace(/"/gi, "'") + "," + c.description.replace(/,/gi, " -").replace(/(\r\n|\n|\r)/gm, "\\r").replace(/"/gi, "'") + "," + parent + "\r";
        fs.appendFileSync(concept, row);
        key++;
    });

    // CREATE CONTRIBUTOR
    // CREATE FILE
    let contributor = 'data/contributor.csv';
    fs.writeFileSync(contributor, 'Id,Concepts,Name,Description,Url\r');

    key = 0;
    obj.contributors.forEach(c => {

        let row = +key + "," + c.concepts.join(":") + "," + c.name.replace(/,/gi, " -").replace(/"/gi, "'") + "," + c.description.replace(/,/gi, " -").replace(/(\r\n|\n|\r)/gm, "\\r").replace(/"/gi, "'") + "," + c.url + "\r";
        fs.appendFileSync(contributor, row);
        key++;
    });

    // CREATE REFERENCE
    // CREATE FILE
    let reference = 'data/reference.csv';
    fs.writeFileSync(reference, 'Id,Concepts,Name,Description,Url\r');

    key = 0;
    obj.references.forEach(c => {
        let row = +key + "," + c.concepts.join(":") + "," + c.name.replace(/,/gi, " -").replace(/"/gi, "'") + "," + c.description.replace(/,/gi, " -").replace(/(\r\n|\n|\r)/gm, "\\r").replace(/"/gi, "'") + "," + c.url + "\r";
        fs.appendFileSync(reference, row);
        key++;
    });

    // CREATE RELATION
    // CREATE FILE
    let relation = 'data/relation.csv';
    fs.writeFileSync(relation, 'Id,Name,Source,Target\r');

    key = 0;
    obj.relations.forEach(r => {
        let row = key + "," + r.name.toUpperCase().replace(/ /gi, "_") + "," + r.source + "," + r.target + "\r";
        fs.appendFileSync(relation, row);
        key++;
    });

    // CREATE SKILL
    // CREATE FILE
    let skill = 'data/skill.csv';
    fs.writeFileSync(skill, 'Id,Name,Concepts\r');

    key = 0;
    obj.skills.forEach(s => {
        let row = +key + "," + s.name.replace(/,/gi, " -").replace(/"/gi, "'") + "," + s.concepts.join(":") + "\r";
        fs.appendFileSync(skill, row);
        key++;

    });


}

function getParent(code) {
    if (code == "GIST") {
        return "NONE"
    }

    if (code.length == 2) {
        return "GIST"
    }

    if (code.length >= 2) {
        c = code.split("-");
        if (c.length == 1){
            return checkParent(c[0].substring(0,2));
        } else {
            let cc = [];
            for(var i = 0 ; i < c.length -1 ; i++ ) {
                cc.push(c[i])
            }

            return checkParent(cc.join("-"));
        }
    }

    return "ERROR";
}

function checkParent(code) {
    for (let i = 0; i < obj.concepts.length ; i++) {
        if (obj.concepts[i].code == code) {
            return code;
        }
    }
    return getParent(code);
}

var fs = require('fs');
const path = "data/current.json";
const obj = JSON.parse(fs.readFileSync(path, 'utf8'));
convertJsonToCSV();