# mini_microservice
My first implementation of microservices from scratch

This is going to be a simple web blog application implemented with the following frameworks.

*   Frontend
    *   React.js
*   Backend
    *   Express.js


With this simple application, we'll be able to get a thorough understanding of microservices, why they are important for large application and how to implement a microservice from scratch using our own event-bus.

This application is divided into two(2) parts.

1)  The Client - This is where the React application is located.
2)  The Server - This contains the server side code. It is further divided into sub-applications which models our application into two features.
    *   Posts - This is a mini application which lets us create post and stores it in memory.
    *   Comments - This is a mini application which lets us create comments based on a post and stores these comments in memory.
    *   Event-bus - 
