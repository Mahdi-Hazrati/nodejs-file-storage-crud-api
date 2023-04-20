# Node.js File Storage CRUD API
This is a simple Node.js application that demonstrates how to implement a **CRUD API** using **Express.js** and store data in a local **JSON** file. This repository can be used as a starting point for building applications that require basic CRUD functionality and simple data storage.

## Setup
To run this application, you will need Node.js installed on your system. Clone this repository to your local machine and navigate to the project directory.

1. `git clone https://github.com/Mahdi-Hazrati/nodejs-file-storage-crud-api.git`

2. `cd nodejs-file-storage-crud-api`
`

## Install the required dependencies by running the following command:
`npm install`

## Usage
Start the server by running the following command:

`npm start`

This will start the server on port **3000**. You can access the API endpoints using a tool like Postman or send HTTP requests using a tool like cURL.

## Endpoints
The API provides four endpoints for handling CRUD operations:

### Create operation
Add a new item to the data array.

#### Method: **POST**

###### Endpoint: `/create`

###### Request body:

```json
{ "id": <number>, "name": <string>, "description": <string> }
```
###### Response:

> "Item added successfully."


###### Read operation

Retrieve an item by its ID.

#### Method: GET

###### Endpoint: `/read/:id`

> URL parameter: id (number)

###### Response:

```json
{
  "id": <number>,
  "name": <string>,
  "description": <string>
}
```
**or**

> 404 Item not found.

### Update operation
Update an existing item by its ID.

#### Method: PUT

###### Endpoint:` /update/:id`

> URL parameter: id (number)

##### Request body:

```json
{ "name": <string>, "description": <string> }
```
##### Response:

> "Item updated successfully."

**or**

> 404 Item not found.

### Delete operation
Delete an item by its ID.

#### Method: DELETE

###### Endpoint: `/delete/:id`

URL parameter: id (number)

##### Response:

> "Item deleted successfully."

**or**

> 404 Item not found.

#### Data storage
The data is stored in a** local JSON file** named `data.json`. The `readDataFromFile()` function reads the file and returns the parsed data as an array of objects. The `saveDataToFile() `function takes an array of objects and writes it to the file as JSON.

##### Conclusion
This repository includes all the required code to run the application, as well as a README file with instructions on how to install and use the application. It is intended as a simple example and is not suitable for production use. In a real-world application, you would typically use a database or some other persistent storage mechanism instead of a local file.

Feel free to use this repository as a starting point for your own projects, and modify it as needed to suit your requirements.
