# Intro:
This server is implemented by node.js + express.js + mysql 8

## Set up database:
Before running the server, mysql need to be installed and started:

`CREATE DATABASE testdb;`
`SHOW databases;`
`USE testdb;`

## Local Install:
To run this backend server, open your terminal and enter to the file director
`git clone https://github.com/daneez/job-board.git`
`cd job-board`
`npm install`
`node server.js`

# Import CSV File using command line
When backend server running successfully, the csv file need to be imported into mysql server.
## Step 1: Access MySQL shell:
Access your terminal and log into MySQL using the following command:
`mysql -u root -p`
The system prompts you to enter the password for your MySQL user. Entering the correct password gives you access to the MySQL client.

## Step 2: Import CSV into MySQL Table:
Import the data from the CSV file into the MySQL database, using the following lines:

LOAD DATA LOCAL INFILE 'jobs.csv'
INTO TABLE jobs
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS
(TITLE, DESCRIPTION, DATE, LOCATION, APPLICATTIONS)
SET CREATEDAT = NOW();

# Start client application
The client side of job board application can be found in another github repo:
[https://github.com/daneez/job-board-react](https://github.com/daneez/job-board-react)