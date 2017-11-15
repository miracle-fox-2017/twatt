# twatt
client-server application using twitter oauth (morning) and jquery (afternoon)

List of Routers:


| Route		 			 | HTTP			  | Description 					|
|:----------------------:|:--------------:|:----------------------------:|
| `twitter/timeline`     | GET			  | Get rencent twitter timeline |
| `twitter/search`       | POST | Search tweet. Require `query` on body parameter to be used as search query|
| `twitter/new_tweet`    | POST | Post new tweet. Require `status` on body parameter to be usead as status update |

## Usage
```
node app.js
```

Access the website via http://localhost:3000 or API via http://localhost:3000/twitter
