# twatt
client-server application using twitter oauth (morning) and jquery (afternoon)

List of Routers:


| Route		 			 | HTTP			  | Description 					|
|:----------------------:|:--------------:|:----------------------------:|
| `twitter/timeline`     | GET			  | Get rencent twitter timeline |
| `twitter/search`       | POST | Search tweet. Require `query` on body parameter to be used as search query|
| `twitter/new_tweet`    | POST | Post new tweet. Require `status` on body parameter to be usead as status update |

## Environtment Variable and Secret
Put your Twitter Consumer Key, Consumer Secret, Access Token and Access Secret inside `.env` file using the following format.

```
CONSUMER_KEY=<Your Consumer Key>
CONSUMER_SECRET=<Your Consumer Secret>
ACCESS_TOKEN=<Your Access Token>
ACCESS_SECRET=<Your Access Secret>
```

## Usage
```
npm install
node app.js
```

Access the website via http://localhost:3000 or API via http://localhost:3000/twitter
