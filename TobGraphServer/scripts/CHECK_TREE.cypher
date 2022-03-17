// CHECK TREE

MATCH (c:Concept)
UNWIND c AS listc
MATCH (c)-[r:IS_CODED_FOR]->(b:Concept)
WITH c, r, b, count(r) AS nbr
WHERE nbr > 1
WITH count(c) AS nbc
return nbc;