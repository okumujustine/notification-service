### NOTIFICATION SERVICE

##### * Prerequisites
- install mongodb 4.4.0.
- create a database named **todonotify**.
- make sure the database server doesn't have a password or if so, then edit the connection string in the file (**infrastructure/database/connection.ts**) to have the database credentials.

##### 1. Clone the project.

```$ git clone ```

##### 2. Create a .env file from the copy .example.env


```$ cp  .example.env .env```
Then edit the variables in the .env file to have real values.

NB: This values should be the same in all the services.

##### 3. Install all the required packages with
```$ npm install```

##### 4. to start the service
```$ npm run dev```

##### runs on PORT 8000