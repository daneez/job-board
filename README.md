# Intro:
This server is implemented by node.js + express.js + mysql 8

## Set up database:
`CREATE DATABASE testdb;`

`SHOW databases;`

`USE testdb;`

## Start server:
`node server.js`

# Import CSV File using command line

## Step 1: Access MySQL shell:
Access your terminal and log into MySQL using the following command:
`mysql -u root -p`
The system prompts you to enter the password for your MySQL user. Entering the correct password gives you access to the MySQL client.

## Step 2: Create MySQL Table for CSV Import

In your local database, create a database and a table to store the data from the CSV file that you plan to import.

To create a database:

`CREATE DATABASE testdb;`

`SHOW databases;`

`USE testdb;`

To create a table:
DROP TABLE IF EXISTS jobs;
CREATE TABLE IF NOT EXISTS jobs (
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    date DATE,
    location VARCHAR(255),
    applicants VARCHAR(255)
);

## Step 3: Import CSV into MySQL Table
Import the data from the CSV file into the MySQL database, using the following lines:

LOAD DATA LOCAL INFILE '/Users/dannizhao/Downloads/jobs.csv'
INTO TABLE jobs
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS
(TITLE, DESCRIPTION, DATE, LOCATION, APPLICATTIONS)
SET CREATEDAT = NOW();

# Start client application:
