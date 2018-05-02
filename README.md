# MASTERMIND
Mastermind is a clean, no ads, no flash, javascript based gaming platform which serves as a learning platform for devs as well. Want to add your own game? Follow the guide below.

## Requirements
* Your game must be built using javascript, no flash allowed.
* Your source code must be open source and on Github.
* Your game has to be hosted on [Github Pages.](https://www.github.io)
* Games can't have offensive material.
* It has to be fun! 😇

## Steps to add your game
In this repo there is a [games.json](https://github.com/wix-incubator/mastermind/blob/master/games/games.json) file. The typing is as follows:

```typescript
export interface IGame {
  id: string; // unique id for your game, it will also be the url
  gameName: string; // Your game's name
  description: string; // short description of the game
  developerGithubId: string; // your github id
  developerName: string; // your name
  url: string; // URL of your github.io page with the game
  githubUrl: string; // URL of the github repo
  keyPointsOfInterestUrl: string; // URL to github which has markdown code which highlights interesting code in the game
  techIds: string[]; // array of techs in the game, [see here](https://github.com/wix-incubator/mastermind/blob/master/src/Constants/techData.ts)
  createdDate: string; // Formatted string when game was created like 'Mar 25, 2018'
  paypalUsername?: string; // If you want to receive paypal donations
  patreonUsername?: string; // if you want to receive patreon donations
  rating?: number; // still under development, just pick a number between 1 and 5 for now.
  thumbnailUrl: string; // should be small so it loads quickly
  imageUrl: string; // higher res
}
```

Look at the file for an example.

## Lifecycle Hook
Once a player has pressed the 'Play Game' button, your game will begin loading in an iframe while a loader will be shown. When your game is loaded, you will need to send the following post message in order to remove the loader and show your game:

```javascript
window.parent.postMessage('gameLoaded', 'https://wix-incubator.github.io');
```

## What else?
That's it! If you found bugs, issues, have suggestions, questions, etc, feel free to open an issue. Please also share the love on [Twitter @eyaleiznberg](https://www.twitter.com/eyaleizenberg)

Developed with ❤️  during my work at [Wix](https://www.twitter.com/WixEng)
