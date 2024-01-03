# cs465_Fullstack
cs-465 full stack development with MEAN


_Architecture:_
-	**Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).**
  
The frontend of this project was built using Express HTML, JavaScript.  Express utilizes Node.js for its depth and versatility, with knowledge of routing being the core of using the various aspects like its web server functionality.   Using tools like .hbs views to help the page render better, but also make the code more readable and easily modifiable.  The html makes the client facing webpage static and helps prevent direct interaction with the database.  A single-page application (SPA) approach was taken for the server side of the project.  Using SPA for the backend made management easier and quicker and utilizes non-static development but does come with some security risks that need to be acknowledged.
-	**Why did the backend use a NoSQL MongoDB database?**
  
MongoDB adds a ton of flexibility and scalability to a project of this size.  The ability to quickly store/add/update information through a sort of CRUD means lends itself well to our intentions.


_Functionality:_
-	**How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?**
  
JSON is a sort of text-based way to store information in an understandable format.  It is easily modified and translates well between languages since it isn’t specific to one, and uses strings to communicate the stored data.  Javascript on the other hand is an interactive language that can build dynamic programs.  Though I have primarily used for building web applications, it can be used in a lot of other ways like designing games or building both frontend and backend applications.  JSON then allows information to be sent from one end to the other.
-	**Provide instances in the full stack process when you refactored code to improve functionality and efficiencies and name the benefits that come from reusable user interface (UI) components.**
  
The most prominent example of refactoring in my mind is utilizing the handlebar files.  It allowed me to compartmentalize aspects of the UI, like headers, footers, card-layouts, and then have them referenced in the index.  It kept the core of the code clean, and made updating smaller parts of the UI simpler to approach.


_Testing:_

- **Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.**

In my experience with this project, the API methods we used most commonly were GET, POST, PUT, and DELETE.  We were able to test the results and applications of these methods with tools like postman and mongo compass, among others.  This would allow us to see if they are functioning as intended.  Endpoints are specific urls that we may associate with these API requests that would also be available through the tools we used.


_Reflection:_
-	**How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?**
  
For starters, I have gained far more confidence with MongoDB.  This is my second course using it as a primary feature of the workload, and I went in a bit nervous since I felt I never fully grasped the concepts built in the previous coarse.  However, after putting those concepts to more use in an application where I could see the effect immediately, my confidence using it as a tool is much greater.  
Additionally, I have heard a lot about the importance of full stack experience when looking for development jobs, so having some insight into what it’s like to do it from scratch gives me a better idea of what employers may be looking for.  It also allows me to better understand what skills I need to further develop to be a fully competent full stack developer. 
