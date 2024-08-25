# Microservices for releasesfrom the cinema

<p>
These microservices simulate an Event-Driven architecture with the help of Kafka. At the moment of registering a premiere, the microservice that is listening to this action is activated, which in this case is the premiere history, in which the record of all the premieres published by the cinema is stored in its own database.
</p>


#### How to install and run the project? :wrench:
Each microservice has its own instructions but in general you will need to follow the following steps for installation and execution:

###### Clone the repository:

- `git clone <URL_OF_REPOSITORY>`
- `cd <URL_OF_REPOSITORY> `

###### Install dependencies:

- `npm install`

###### Configure environment variables:
Create an `.env` file in the root of the project and set the following environment variables:

- `DB_USER=your_postgresql_user`
- `DB_HOST=your_postgresql_host`
- `DB_DATABASE=your_postgresql_database`
- `DB_PASSWORD=your_postgresql_password`
- `DB_PORT=server_port`


###### Execute the server:
- `npm start`

###### Execute the Kafka:

- `docker exec -it kafka kafka-topics.sh --create --topic newReleaseCreated --bootstrap-server kafka:9093 --partitions 1 --replication-factor 1`
- `docker-compose up -d`

> [!NOTE]
> The installation and execution instructions are general, each microservice has its respective indications, you must take this into account since some microservices may use another technology.


#### How to use the project :computer:
<p>
To use the microservice, follow the steps above to install and run the project, in case of any additional steps each microservice has its own instructions. Once the program is running you can make use of the frontend of the cinema platform which should also run on your local machine or you can make use of the Swagger documentation available, so it would no longer be necessary to have the frontend of the cinema platform to test this microservice, you can access through the URL of your local machine by incrementing the path indicated in the documentation for each microservice. You must also run the docker-compose to be able to perform the EventDriver action.
</p>

`Frontend Cinema Platform` : <https://github.com/JaviQuilumba/CinemaPlatform.git>

#### Technologies Used 
- **Node.js** with the Express.js framework for the backend server.
- **Kafka** as a consumer to receive premiere events.
- **PostgreSQL** for the database.
- **Swagger** for API documentation.
- **Docker** for optional containerization.

> [!IMPORTANT]
> If you use the frontend of the cinema platform, make sure to change the URLs to make it work properly.

###  License 
This project is licensed under the (AFL-3.0) License - see the [LICENSE](https://opensource.org/license/afl-3-0-php) file for details.
