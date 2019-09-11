# InterNations
## User management Application
I am comfortable with JavaScript and ES6 and I am also comfortable with react & angular, So I tried to develop this app, without using any js library or js framework.

**Front End:** ES6/JavaScript only, no external libraries/framework used. No NPM packages used as dependencies.

 -   Developed  **Custom Web components.**
 -   Developed own  **Custom HTML template rendering**  service
 -   Developed own  **Custom Internationalization and language**  service
 -   Developed own  **Router**  service
 -   Developed own  **Loader**  service, that shows loaders across application components.
 -   Application  **Theming**  implemented using CSS variables
 -   **ES Linting**
 -   **Webpack**: Build and Bundling

**Custom Web Components:**
 - Navigation
 - Page Footer
 - Loader
 - Error Box
 - User List
 - User Card
 - User Form 	( dev in progress )	
 - User dashboard 	
 - Group List 	
 - Group Card 	
 - Group Form - ( dev in progress )	
 - Group Dashboard

**Back End:** Node & Express js
- Created Node Express Server, which serves both API, and default app view.
- API routes and SPA route handling is done.
- Created DB Service, to handle queries/add/update/delete for groups & users.

**Database:** json-server (No-SQL)

**Step to RUN Application:**

Install npm dependencies for server-app and dev-dependencies for client-app


**user-management-internations/ums-server-app>** `npm i`

**user-management-internations>** `npm i`

**user-management-internations>** `npm run json-server`

**user-management-internations>** `npm run start`


**Step to RUN DEV Server:**

Required if you need to do development, else skip this step. It starts watching your source files for any change and bundles accordingly.

**user-management-internations/ums-server-app>** `npm run watch`


You can access the Application at:

    http://localhost:3000

and APIs at:

    http://localhost:3000/api
JSON-SERVER should be running at:

    http://localhost:3001

**API Routes:**
GET API endpoints:

    http://localhost:3000/users
    http://localhost:3000/users/:id
    http://localhost:3000/usersbygroup/:id
    http://localhost:3000/groups
    http://localhost:3000/groups/:id
    http://localhost:3000/groupsbyuser/:id

POST API endpoints:

    http://localhost:3000/users
    http://localhost:3000/groups

PUT API endpoints:
   

     http://localhost:3000/users/:id
     http://localhost:3000/groups:/id

DELETE API endpoints:

    http://localhost:3000/users/:id
    http://localhost:3000/groups/:id

## Database JSON Structure:

    {
      "users": [
        {
          "id": "10001",
          "email": "Cdocftuu.Rn@gmail.com",
          "firstName": "Afxxgfzccfddma",
          "lastName": "Utiauw",
          "groupIds": [
            "1",
            "2",
            "3"
          ]
        },
        {
          "id": "11999",
          "email": "Koqzdvglxy.Yarcgdhygnxadk@gmail.com",
          "firstName": "V",
          "lastName": "Nkh",
          "groupIds": [
            "1",
            "2"
          ]
        }
      ],
      "groups": [
        {
          "id": "1",
          "name": "everyone",
          "description": "Every user needs to be a member of this group"
        },
        {
          "id": "2",
          "name": "administrators",
          "description": "Users with Administrators rights"
        },
        {
          "id": "3",
          "name": "sales-force",
          "description": "Users from Sales Force team & rights"
        }
      ]
    }

More details & properties can be added in to the models as per business requirements.

## Thanks
