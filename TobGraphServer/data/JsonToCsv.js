function convertJsonToCSV(path){
    var fs = require('fs');
    var obj = JSON.parse(fs.readFileSync(path, 'utf8'));

    // CREATE CONCEPTS NODE
    // CREATE FILE
    let concept = 'data/concept.csv';
    fs.writeFileSync(concept, 'Id,Code,Name,Description\r');

    // WRITE IN FILE
    let key = 0;
    obj.concepts.forEach(c => {
        let row = key+","+c.code+","+c.name.replace(/,/gi, " -").replace(/"/gi,"'")+","+ c.description.replace(/,/gi, " -").replace(/(\r\n|\n|\r)/gm, "\\r").replace(/"/gi,"'")+"\r";
        fs.appendFileSync(concept, row);
        key++;
    });

    // CREATE CONTRIBUTOR
    // CREATE FILE
    let contributor = 'data/contributor.csv';
    fs.writeFileSync(contributor, 'Id,Concepts,Name,Description,Url\r');

    key = 0;
    obj.contributors.forEach(c => {
        let row = +key+","+c.concepts.join(":")+","+c.name.replace(/,/gi, " -").replace(/"/gi,"'")+","+ c.description.replace(/,/gi, " -").replace(/(\r\n|\n|\r)/gm, "\\r").replace(/"/gi,"'")+","+c.url+"\r";
        fs.appendFileSync(contributor, row);
        key++;
    });

    // CREATE REFERENCE
    // CREATE FILE
    let reference = 'data/reference.csv';
    fs.writeFileSync(reference, 'Id,Concepts,Name,Description,Url\r');

    key = 0;
    obj.references.forEach(c => {
        let row = +key+","+c.concepts.join(":")+","+c.name.replace(/,/gi, " -").replace(/"/gi,"'")+","+ c.description.replace(/,/gi, " -").replace(/(\r\n|\n|\r)/gm, "\\r").replace(/"/gi,"'")+","+c.url+"\r";
        fs.appendFileSync(reference, row);
        key++;
    });

    // CREATE RELATION
    // CREATE FILE
    let relation = 'data/relation.csv';
    fs.writeFileSync(relation, 'Id,Name,Source,Target\r');

    key = 0;
    obj.relations.forEach(r => {
        let row = +key+","+r.name.toUpperCase().replace(/ /gi, "_")+","+r.source+","+r.target+"\r";
        fs.appendFileSync(relation, row);
        key++;
    });

    // CREATE RELATION
    // CREATE FILE
    let skill = 'data/skill.csv';
    fs.writeFileSync(skill, 'Id,Name,Concepts\r');

    key = 0;
    obj.skills.forEach(s => {
        let row = +key+","+s.name.replace(/,/gi, " -").replace(/"/gi,"'")+","+s.concepts.join(":")+"\r";
        fs.appendFileSync(skill, row);
        key++;
    });


}

const path = "data/current.json";
convertJsonToCSV(path);