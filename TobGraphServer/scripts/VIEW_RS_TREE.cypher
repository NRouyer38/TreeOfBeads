// VIEW RS TREE

MATCH (c:Concept)-[r:IS_CODED_FROM]->(s:Concept)
WHERE c.code CONTAINS "PS" return c, r, s;