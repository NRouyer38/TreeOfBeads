# TreeOfBeads
TSI Project - End of study - ENSG

## Summary
1. Project presentation
2. Installation
3. Configuration
4. Documentation
5. Credit

## Project Presentation

### Definition of the project and its objectives

Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, Bla, bla, 

*liens*: [*Project definition (PDF)*](media/pdf/project_presentation.pdf), [*Project objectives (PDF)*](media/pdf/project_objectives.pdf)

<p align="center">
<img src="media/img/logo_tob.png" width="200px">
<p align="center">Logo of Tree Of Beads</p>
</p>

### Project organization

TreeOfBeads is composed of three main elements called: __TobGraphServer__, __TobWebInterface__ and __TobUserServer__.
We will go into the details of these three elements later. They are independent, but are designed to work very simply together.

<p align="center">
    <img src="media/img/logo_3_tob.png" width="500 px">
    <p align="center">TobGraphServer, TobWebClient and TobUserServer</p>
</p>

__TobGraphServer__ :


__TobWebInterface__ :


__TobUserServer__ :

__Quick summary of the structur :__

<img src="media/img/basic_structure.png">
<p align="center">Basic structur of Tree of Beads</p>

## Installation

You can install the three assets on a unique machine but the security will improve if it is installed on three different machine.

### TobGraphServer

__Command line:__

Open a terminal and write :

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

__Docker:__

Open a terminal in this git repository and write:

```bash
docker run ...
```

### TobWebInterface

__Node:__

```bash
npm install -g angular-cli
```

__Docker:__
```bash
docker run ...
```

### TobUserServer

__Command line :__
```bash
# Maria DB
sudo apt-get update
sudo apt-get install mariadb-server
```

__Docker :__
```bash
docker run ...
```

## Configuration

## Run

### TobGraphServer

Open a terminal in this git repository

```bash
# Go to the TobGraphServer repo
cd TobGraphServer

# Run neo4j database
sudo service neo4j start

# Launch api
node app.js
```

### TobUserServer

Open a terminal

```bash
sudo service mysql start
```


### TobWebInterface

Open a terminal in this git repository and run :
```bash
cd TobWebInterface
ng serve --port 8080
```

Open [http://localhost:8080](http://localhost:8080)


## Documentation

## Credit
