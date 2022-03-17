//INSTALL BOK
MATCH (n:Concept) DETACH DELETE n;
MATCH (n:Contributor) DETACH DELETE n;
MATCH (n:Reference) DETACH DELETE n;
MATCH (n:Skill) DETACH DELETE n;
LOAD CSV WITH HEADERS FROM 'file:///concept.csv' AS row
WITH row WHERE row.Id IS NOT NULL
MERGE (c:Concept {id: row.Id, code: row.Code, name: row.Name, description: row.Description, parent: row.Parent});
LOAD CSV WITH HEADERS FROM 'file:///contributor.csv' AS row
WITH row WHERE row.Id IS NOT NULL
MERGE (b:Contributor {id: row.Id, name: row.Name, description: row.Description, url: row.Url})
WITH b, row
UNWIND split(row.Concepts, ':') AS idconcept
MATCH (c:Concept {id: idconcept})
MERGE (b)-[r:CONTRIBUTED]->(c);
LOAD CSV WITH HEADERS FROM 'file:///reference.csv' AS row
WITH row WHERE row.Id IS NOT NULL
MERGE (f:Reference {id: row.Id, name: row.Name, description: row.Description, url: row.Url})
WITH f, row
UNWIND split(row.Concepts, ':') AS idconcept
MATCH (c:Concept {id: idconcept})
MERGE (f)-[r:REFER_TO]->(c);
LOAD CSV WITH HEADERS FROM 'file:///relation.csv' AS row
WITH row WHERE row.Id IS NOT NULL AND row.Name = "IS_SUBCONCEPT_OF"
MATCH(s:Concept {id: row.Source})
MATCH(t:Concept {id: row.Target})
MERGE (s)-[r:IS_SUBCONCEPT_OF]->(t);
LOAD CSV WITH HEADERS FROM 'file:///relation.csv' AS row
WITH row WHERE row.Id IS NOT NULL AND row.Name = "IS_PREREQUISITE_OF"
MATCH(s:Concept {id: row.Source})
MATCH(t:Concept {id: row.Target})
MERGE (s)-[r:IS_PREREQUISITE_OF]->(t);
LOAD CSV WITH HEADERS FROM 'file:///relation.csv' AS row
WITH row WHERE row.Id IS NOT NULL AND row.Name = "IS_SIMILAR_TO"
MATCH(s:Concept {id: row.Source})
MATCH(t:Concept {id: row.Target})
MERGE (s)<-[r:IS_SIMILAR]->(t);
LOAD CSV WITH HEADERS FROM 'file:///skill.csv' AS row
WITH row WHERE row.Id IS NOT NULL
MERGE (s:Skill {id: row.Id, name: row.Name})
WITH s, row
UNWIND split(row.Concepts, ':') AS idconcept
MATCH (c:Concept {id: idconcept})
MERGE (c)-[r:NEED]->(s);

MATCH (a:Concept)
UNWIND a AS lista
MATCH (b:Concept {code: lista.parent})
MERGE (a)-[:IS_CODED_FROM]->(b);

MATCH (c:Concept)
WHERE NOT (c)-[:IS_CODED_FROM]->(:Concept) AND NOT c.code CONTAINS "GIST"
DETACH DELETE c; 