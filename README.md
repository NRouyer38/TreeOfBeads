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

Tree of Beads (ToB) is a free interactive tool presented in collaboration between the European Copernicus program, the CNES (Centre National d'études spatiales) and ENSG (Ecole Nationale des Sciences Géographiques). It's aim is to provide a centralized platform for everyone that wants to discover or improve their skills and knowledge regarding remote sensing. A better understanding of remote sensing technologies and concepts will allow you to better use the open source Copernices program products.
If you're a beginner or already an expert that wants to extend the reach of its capabilities, this platform is made for you! If you're looking for specific formations relative to your needs, our tool will provide you whith a clear and distinct path toward mastering this fields of remote sensing. Our tool is able to lay before you a clear path that will take you step by step toward your goal without skipping any pre-requisites so that you can understand the full ramifications of what you're trying to learn.
This tool is divided into different job implementations like 'detecting wildfires' or 'calculate gases concentrations over an area'. Those job implementations are made of a series of concept that sometime recoup each other for the most basic ones. The This way, it is easier for you to identify you're needs or get informed on a job implementation close to your needs. If you feel that your needs are not enough represented in any of the job implementations, feel free to contact us so that we can deliver a new formation cursus.

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

This part relates to the implementation of the ToB knowledge database. Specificaly, it is used to create and maintain our graph database that we implemented base on the one constructed by eo4geo available at this link: https://bok.eo4geo.eu/GIST

__TobWebInterface__ :

This section of the code is coded using the Angular framework and allow the display of our graph database as well as the implementation of the whole platform from frontend to backend. It is also responsiblefor the user interactions.

__TobUserServer__ :

The user Server is pretty self-explainatory, it handles the communications between the web interface and the user database. The user database stores infos about the user and their progress/participation within the platform ToB.

__Quick summary of the structure :__

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
cd TobGraphServer
npm install

# Install BoK Data (Linux)
sudo ./init-cypher-bok.sh

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

### Access to user database

Open mysql command linetool as follow : 
Change password and username to your liking as well as the path to tob path

```bash
# Mysql
sudo service mysql start
sudo mysql
source [path_to_tob] \TreeOfBeads\TobUserServer\sql\tob.sql;
CREATE USER 'username'@'%' IDENTIFIED BY 'password';
GRANT ALL PRIVILEGES ON tob.* TO 'username'@'%' WITH GRANT OPTION;
```

Don't forget to change password and username in the config file of the web interface `./TreeOfBeads/TobWebInterface/backend/config/config.json`
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
# Mysql
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
