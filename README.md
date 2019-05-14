## The app

This is a project extracted from a book. It shows fundamental concepts of React framework as State, Props, Components, workflow of data between Components, and working with Component's states as `componentMount` and `forceUpdateInterval` methods. Besides from reproducing the exercise, I added some changes to the original project: change javascript version from E5 to ES6 and the UI boostrap from [Semantic UI](https://semantic-ui.com/) to [Material UI](https://material-ui.com/).

The app is a Timer Schedule, you basically can CRUD on a timer that tracks how much time you spend in a certain task (e.g you can track how much time you spend cleaning your room). The timer has the option to start/stop the timer. The app shows a list of these timers so you can manage more than one activity. The data from the app is saved on the server in a .json file and retrieved to the user every 5 seconds, so the app's data is always in sync.

## How to use

```
# On your terminal

git clone git://github.com/pedrogglima/frontend-tracking-time-app

# Then install the dependencies

npm install

# After, inside the folder frontend-tracking-time-app

npm run start:dev:server

# After starting the server, you can find the app on localhost:3000
```

## Licenses and Copyright

Copyright (C) 2019 Pedro Gabriel Lima.  
