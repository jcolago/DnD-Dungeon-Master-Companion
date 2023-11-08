# DnD Dungeon Master Companion App
This is my solo project for EDA. This project was scoped and built over the course of 3 weeks and is my first major project created from start to finish.

The Dungeon Master Companion App aims to make orgainizing and storing games, character info, and monster info in a way that makes it easy to access and track. Characters and monsters are entered in forms and displayed in a table for the user to see. Character and monsters can be viewed in detail from the list. Characters can also be editied to reflect updates and inventory can be added or removed from the characters. Characters can also be added to a game view where all characters from that specific game can be viewed and updated.

Future goals for this project include a combat view that will track characters, monsters, and turn order. I would also like to add more detiails for classes as well as add spells and tracking for spells cast.

## Installation
1. Create a database called "dnd_data" and copy the provided query text into postgresql.
2. In a project terminal enter "npm install"
3. Open a second termainal, run "npm run client" on one and "npm run server" in the other to fire up the application!

## Usage
The first view of the user is the home page. New users will be able to register a username and password to access the application. Users that already have an account can click on the "log in" button to be taken to the login page. New users can also register from the login page.

![Home page](/public/images/screenshots/login.png)
![Login page](/public/images/screenshots/login2.png)
![Register page](/public/images/screenshots/register.png)

Users are taken to the landing page after logging in or registering. Users can add their games to the list via the input and games will be displayed on the page. There are also quick link buttons to take the user to the player entry form, character list, or monster entry form.

![Landing page](/public/images/screenshots/landingpage.png)

Players are entered via a multi view form. The first view of the form takes in the basic character information. The second view takes in the character stats, stat bonuses, and saving throws. The third view allows the user to add inventory to the character. The inventory is listed in a dropdown and quantity can be set. Items added are displayed below the input fields as they are added to the character.

![Player entry 1](/public/images/screenshots/characterform1.png)
![Player entry 2](/public/images/screenshots/characterform2.png)
![Player entry 3](/public/images/screenshots/characterform3.png)

Users are taken to a review page after entering a character where they can get a preview of character that was just entered. After submitting a character, the user will be taken to a success page where they can enter another character or view the character list.

![Review page](/public/images/screenshots/reviewpage.png)
![Success page](/public/images/screenshots/charactersuccess.png)

Characters entered can be view from the character list page. This page provides a broad overview of the characters entered and what game the character is associated with. Users can navigate to the character details page, delete a character, or display the character in the game view. Users are prompted to confirm that a character is to be deleted before the character is removed from the list.

![Character list](/public/images/screenshots/characterlist.png)

The character details page displays the details for the character. Items can be added to the character from this page and the user can also begin editing the character by clicking the edit button.

![Character details](/public/images/screenshots/characterdetails.png)

The edit detials page allows the user to edit the details of the character. The input fields are loaded with the current details for the character and can be changed. Item quantity can also be updated or items can be removed from the character. The user will be alerted that an item has been removed from the character.

![Edit details](/public/images/screenshots/editdetails.png)

Monster are entered via a single view form. The form takes in basic info about the monster and is submitted by clicking the submit button. The user will then be taken to a successful entry page where they can enter a new monster or view the monster list.

![Monster entry](/public/images/screenshots/monsterentry.png)
![Monster success](/public/images/screenshots/monstersuccess.png)

The monster list displays a basic overview of the users entered monsters and what game they were entered for. The user can see the the details of the monster by clicking the details button or delete a monster with the delete button. Users are prompted to confirm a monster is to be deleted before it is removed from the list.

![Monster List](/public/images/screenshots/monsterlist.png)

The monster details page displays the details for that monster as a quick reference. At this time monsters are not editable but that feature will be added in the future.

![Monster details](/public/images/screenshots/monsterdetails.png)

The game view allows the user to display all characters tied to a specific game. Character hit points are editable and conditions and condition length can be added to a character. The conditions are displayed below the condition inputs. A character can be removed from the game view by clicking the remove button. This only removes them from the game view but does not remove them from the character list.

![Game view](/public/images/screenshots/gameview.png)

## Built With
- [React](https://react.dev)
- [Redux](https://react-redux.js.org/)
- [React Router](https://reactrouter.com/en/main)
- [Redux Sagas](https://redux-saga.js.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [Axios](https://axios-http.com/docs/intro)
- [Express](https://expressjs.com/)
- [Material UI](https://mui.com/material-ui/getting-started/overview/)

## Contact
## Support
If you have suggestions or issues, please email me at [jcolago2005@gmail.com](mailto:jcolago2005@gmail.com)

## Acknowledgment
Thank you to Emerging Digital Academy (www.emergingacademy.org) for supporting me and teaching me the skills needed to complete this project.
