# twatt
client-server application using twitter oauth (morning) and jquery (afternoon)  
simple twitter client can do update status, show timeline, and search tweet.

## List of Routes:  
| Route | HTTP | Require Data | Description |
|-------|------|--------------|-------------|
| /api/twitter | GET | none | get timeline tweet |
| /api/twitter | POST | status | post new tweet |
| /api/twitter/search/ | POST | search keyword | return latest tweet |

## How to use this:  
1. npm install
2. update env-temp to .env and fill your consumer and secret key
3. npm start
4. go to client/index.html
5. use the app  
6. :rocket:  