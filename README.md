## Intro
This server is implemented by Node 14, express.js, MySQL 8

Before running the server, make sure node.js is installed locally, instruction can refer to [install manually](https://nodejs.org/en/download/package-manager/).

## Set up database
Before running the server, MySQL need to be installed and started:

`CREATE DATABASE testdb;`

`SHOW databases;`

`USE testdb;`


## Running the server
To run this backend server, open your terminal and run the following command line:

```
# clone to local 
git clone https://github.com/daneez/job-board.git

# enter into the file directory
cd job-board

# install the dependencies
npm install

# start the server
node server.js

# view it in the browser
visit [http://localhost:8082](http://localhost:8082)
```
Once the server started, and you will see the following success message.

![screenshot](https://github.com/daneez/job-board/blob/main/Screen%20Shot%202021-03-29%20at%202.07.45%20am.png)

## Start client application
The client side of job board application can be found in another github repo:
[https://github.com/daneez/job-board-react](https://github.com/daneez/job-board-react)

## Import CSV File using command line
When backend server running successfully, the csv file need to be imported into mysql server
### Step 1: Access MySQL shell
```
# Access to your terminal and log into MySQL
mysql -u root -p

# The system prompts you to enter the password for your MySQL user. Entering the correct password gives you access to the MySQL client.
```
### Step 2: Import CSV into MySQL Table
Import the data from the CSV file into the MySQL database, using the following command lines:

```
# replace the folder directory in [your local file system directory] as where you store this project and jobs.csv 

LOAD DATA LOCAL INFILE '/[your local file system direcotry]/job-board/jobs.csv'
INTO TABLE jobs
FIELDS TERMINATED BY ','
ENCLOSED BY '"'
LINES TERMINATED BY '\r\n'
IGNORE 1 ROWS
(TITLE, DESCRIPTION, DATE, LOCATION, APPLICATTIONS)
SET CREATEDAT = NOW();
```

## Source Code Structure
### job-board/app
| File Directory | Description |
| ----- | ------  |
| config | configuration for MySQL database  |
| controllers | CRUD operations  |
| models | Sequelize model |
| routes | routes setting |
### job-board
| File Directory | Description |
| ----- | ------  |
| package.json | config of dependencies |
| server.js  | entry of the server  |

## Functions
| Methods | Urls | Actions |
| ----- | ------  | ------  |
| GET | api/jobs | get all the jobs |
| GET | api/jobs/:id | get one job by `id` |

