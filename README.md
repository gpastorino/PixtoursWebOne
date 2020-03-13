# PixtoursWebOne
Building out of the Webportal for Pixtours. 


Heroku Link:

This is the start to the blog section for the Pixtours webpage, for the Pixtours app.  Eventually, users will be able to ask questions and receive answers from either myself or community members.   The curren iteration can receive blog posts, which can be created, edited, and deleted. While the comments on each blog can only be created. The design is such that it matches the general theme of Pixtours app. 

Technologies used:
mongoDB
express
Node.js
vanilla Javascript
Postman
HTML
CSS
Bootstrap

To install this app, you will need to start up a mongoDB, and run nodemon.  Once cloned, go into the file directory of the app, and use npm i install to get all of the needed dependencies. If you are concerned you haven't gotten all of the dependences, they can be added individually while in the apps directory via npm, followed by each of the dependencies:  

    ```
    "body-parser": "^1.19.0",
    "dotenv": "^8.2.0",
    "express": "^4.17.1",
    "formatter": "^0.4.1",
    "mongoose": "^5.9.3",
    "mongoose-connect": "0.0.3",
    "utils": "^0.3.1"
    ```
    
    For optimal usability, make sure the version numbers are the same for your installations in your package_json file.  
    
    Please see this trello board for user stories, wireframes and ERD. 
    https://trello.com/b/yubZLLbO/project4-pixtourswebone?menu=filter&filter=label:none
    
    The future of this blog is bright.  
    
    Notable Future Developments:
    
    captcha for each users posting. 
    admin authentication to have the rights to delete blog posts and user posts.
    react front-end.
    animations in the form of css, and more videos/gifs for users entertainment.
    
    Unsolved Problems:  
    Sound files didn't seem to work this week.  Will get them working soon.
    FUll crud functionality on the comments wasn't met, though the routes are intact.  Currently the user can view and create comments, but they need to be deleted or updated via Postman.  Full CRUD functionality is there for the Blog side.
    
    Thank you and hope you get a chance to try Pixtours app, and leave a note on the upcoming blog.  Check the blog soon for updates and new develoments with Pixtours.   
    
    
    
    
    


