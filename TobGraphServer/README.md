# TobGraphServer - Tree of Beads
An asset of [Tree of Beads](../README.md)

## Installation

### Neo4j

__Apt-get__:
```bash
# Update package
sudo apt-get update

# Install needed package
sudo apt-get install apt-transport-https ca-certificates curl software-properties-common

# Get key to check validity of neo4j
curl -fsSL https://debian.neo4j.com/neotechnology.gpg.key | sudo apt-key add -

# Add neo4j repository
sudo add-apt-repository "deb https://debian.neo4j.com stable 4.1"

# install neo4j
sudo apt-get install neo4j

```

__Docker :__


### API

Nothing.

## Config :

## Run

### Neo4j
```bash
# Run Neo4j
sudo service neo4j start
```

### API
```bash
# Run API with node
node app.js
```

