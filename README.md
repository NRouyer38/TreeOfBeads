# TreeOfBeads

Formalization and visualization of a training course in Remote Sensing.

This project is realized within the framework of the long project of end of course Master TSI 2022.

__It is produced by :__ 
* Nicolas Rouyer : [@NRouyer38](https://www.github.com/NRouyer38)
* Sefiane Kachouani : [@SefianeKach](https://www.github.com/SephianeKach)
* Jules Pierrat :  [@JulesPierrat](https://www.github.com/JulesPierrat)
* Charles Laverdure : [@Charles0009](https://www.github.com/Charles0009)

*Under the supervision of Marc Poupée and Marie-Dominique Van Damme, teachers in remote sensing at ENSG (FR)*


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

# Install API
npm install

```

__Docker:__

Open a terminal in this git repository and write:

```bash
docker run ...
```

### TobWebInterface

__Node:__

```bash
# Install angular
npm install -g @angular/cli

# Install backend
cd backend
npm install

# Install frontend
cd ../frontend
npm install
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

If you want to add exemple data from [Book of Knowledge](https://bok.eo4geo.eu/GIST) here is the [tutorial](./TobGraphServer/data/DATA-EXAMPLE.md)

### TobUserServer

Open a terminal

```bash
sudo service mysql start
```


### TobWebInterface

__Developpers__ :
Open a terminal in this git repository and run :
```bash
# Go to repository
cd TobWebInterface

# Run backend
cd backend
npm start

# Run frontend
cd ../frontend
ng serve
```

Open [http://localhost:4200](http://localhost:4200)

__Build version__:


## Documentation

## Credit
