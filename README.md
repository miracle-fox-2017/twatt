# twatt
client-server application using twitter oauth (morning) and jquery (afternoon)

client:

live-server

Access the website via http://127.0.0.1:8080/twatt.html

server:
Route           |     HTTP     |            Description               |
-----------------------------------------------------------------------
/api            |     GET      | Get all the timeline                 |
/api/search     |     GET      | Get search data                      |
/api/post       |     POST     | Create a status                      |

Usage
With only npm:

npm install
npm start

Access the website via http://localhost:3000 or API via http://localhost:3000/api
