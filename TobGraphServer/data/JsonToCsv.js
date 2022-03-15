function convertJsonToCSV(path){
    var fs = require('fs');
    var obj = JSON.parse(fs.readFileSync(path, 'utf8'));
    
    // CREATE FILE
    let output = 'data/test.csv';
    fs.writeFileSync(output, 'Id,Code,Name,Description\r');

    // CREATE CONCEPTS NODE
    let key = 0;
    obj.concepts.forEach(c => {
        //let row = key+", "+c.code+", "+c.name+", "+c.description.replace(/(\r\n|\n|\r)/gm, "");
        let row = key+","+c.code+","+c.name.replace(/,/gi, " -")+","+ c.description.replace(/,/gi, " -").replace(/(\r\n|\n|\r)/gm, "\\r")+"\r";
        fs.appendFileSync(output, row);
        key++;
    })


}

const path = "data/current.json";
convertJsonToCSV(path);