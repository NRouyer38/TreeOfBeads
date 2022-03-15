# Command to add example data to database

Run in a terminal:
```bash
# Go to the good repository
cd TobGraphServer

# Download the last current.json from BoK
curl https://eo4geo-uji-backup.firebaseio.com/current.json ./data/current.json

# Transform current.json -> CSV
node data/JsonToCsv.js

# Copy the CSV files to the import repository of Neo4j
data/cpneo.sh
```

Then you can run the cypher shell:
```bash
cypher-shell
```
Connect and run the 5 following commands:

```bash
# LOAD CONCEPTS
LOAD CSV WITH HEADERS FROM 'file:///concept.csv' AS row
WITH row WHERE row.Id IS NOT NULL
MERGE (c:Concept {id: row.Id, code: row.Code, name: row.Name, description: row.Description});

# LOAD CONTRIBUTORS
LOAD CSV WITH HEADERS FROM 'file:///contributor.csv' AS row
WITH row WHERE row.Id IS NOT NULL
MERGE (b:Contributor {id: row.Id, name: row.Name, description: row.Description, url: row.Url})
WITH b, row
UNWIND split(row.Concepts, ':') AS idconcept
MATCH (c:Concept {id: idconcept})
MERGE (b)-[r:CONTRIBUTED]->(c);

# LOAD REFERENCES
LOAD CSV WITH HEADERS FROM 'file:///reference.csv' AS row
WITH row WHERE row.Id IS NOT NULL
MERGE (f:Reference {id: row.Id, name: row.Name, description: row.Description, url: row.Url})
WITH f, row
UNWIND split(row.Concepts, ':') AS idconcept
MATCH (c:Concept {id: idconcept})
MERGE (f)-[r:REFER_TO]->(c);

# MAKE RELATION
LOAD CSV WITH HEADERS FROM 'file:///relation.csv' AS row
WITH row WHERE row.Id IS NOT NULL AND row.Name = "IS_SUBCONCEPT_OF"
MATCH(s:Concept {id: row.Source})
MATCH(t:Concept {id: row.Target})
MERGE (s)-[r:IS_SUBCONCEPT_OF]->(t);

# LOAD SKILL
LOAD CSV WITH HEADERS FROM 'file:///skill.csv' AS row
WITH row WHERE row.Id IS NOT NULL
MERGE (s:Skill {id: row.Id, name: row.Name})
WITH s, row
UNWIND split(row.Concepts, ':') AS idconcept
MATCH (c:Concept {id: idconcept})
MERGE (c)-[r:NEED]->(s);
```

You can if you restrict your data to 'remote sensing' by using this cypher-shell command : 
```bash

```