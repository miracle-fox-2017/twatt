# twatt
client-server application using twitter oauth (morning) and jquery (afternoon)

## List of Routes:  
| Route | HTTP | Require Data | Description |
|-------|------|--------------|-------------|
| /api/twitter | GET | none | get timeline tweet |
| /api/twitter | POST | status | post new tweet |
| /api/twitter/search/ | POST | search keyword | return latest tweet |

## How to use this:  
1. npm install
2. update env-temp to .env and fill your consumer and secret key
3. :rocket:  