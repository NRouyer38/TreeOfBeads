# Get Bok json
curl https://eo4geo-uji-backup.firebaseio.com/current.json > data/current.json;

# Transform to csv
node data/JsonToCsv.js;

# Send to Neo4j
cp data/*.csv /var/lib/neo4j/import;

# Send plugins to neo4j
cp scripts/. /var/lib/neo4j/plugins;

# Install BOK
echo "Neo4j username:";
read username;
echo "Neo4j Password:";
read password;
cat scripts/INSTALL_BOK.cypher | cypher-shell -u $username -p $password;