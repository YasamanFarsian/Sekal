# Sekal

# Database
I used mysql for the database 

To create database
```properties
CREATE DATABASE seat_reservation;
```
To create table
```properties
CREATE TABLE IF NOT EXISTS  reservations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    seat_number VARCHAR(255) NOT NULL,
    reservation_date DATE
);
```

# To run server  
install all the necessary node packages and run the server follow the following command
```properties
npm run install
node index.js
```  



