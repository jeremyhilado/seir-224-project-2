# Project Overview

## Project Links

- [GitHub Repo Link](https://github.com/jeremyhilado/seir-224-project-2)
- [add your deployment link]()

## Project Description

My project will be a music website where users can search for an artist and it returns that artist's catalog and also similar artists.

## API

https://www.theaudiodb.com/api/v1/json/1/search.php?s=coldplay


```
Object {artists: Array[1]}
artists: Array[1]
0: Object
idArtist: "111239"
strArtist: "Coldplay"
strArtistStripped: null
strArtistAlternate: ""
strLabel: "Parlophone"
idLabel: "45114"
intFormedYear: "1996"
intBornYear: "1996"
intDiedYear: null
strDisbanded: null
strStyle: "Rock/Pop"
strGenre: "Alternative Rock"
strMood: "Happy"
strWebsite: "www.coldplay.com"
strFacebook: "www.facebook.com/coldplay"
strTwitter: "www.twitter.com/coldplay"
strBiographyEN: "Coldplay are a British alternative rock band formed in 1996 by lead vocalist Chris Martin and lead guitarist Jonny Buckland at University College London. After they formed Pectoralz, Guy Berryman joined the group as a bassist and they changed their name to Starfish. Will Champion joined as a drummer, backing vocalist, and multi-instrumentalist, completing the line-up. Manager Phil Harvey is often considered an unofficial fifth member. The band renamed themselves "Coldplay" in 1998, before recording and releasing three EPs; Safety in 1998, Brothers & Sisters as a single in 1999 and The Blue Room in the same year. The latter was their first release on a major label, after signing to Parlophone.
```


## Wireframes

- [Home - Wireframe](https://res.cloudinary.com/do6tcpizk/image/upload/v1585283886/Project%202%20React%20App/Home_Page_kjimbs.jpg)
- [Search Results - Wireframe](https://res.cloudinary.com/do6tcpizk/image/upload/v1585283887/Project%202%20React%20App/Search_Results_iutp7t.jpg)
- [Artist Detail - Wireframe](https://res.cloudinary.com/do6tcpizk/image/upload/v1585283887/Project%202%20React%20App/Artist_Detail_nxeuop.jpg)
- [About - Wireframe](https://res.cloudinary.com/do6tcpizk/image/upload/v1585283891/Project%202%20React%20App/About_Page_r3zobo.jpg)

- [React Architecture](https://docs.google.com/drawings/d/1aX130-uJ-6ShuQmGKrcZvnOA0qXm3FfQT1NQWQHHr_Q/edit)


### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP EXAMPLE
- Find and use external api 
- Render data on page 
- Allow user to interact with the page

#### PostMVP EXAMPLE

- Populate home page with current top artists
- Embed YouTube videos to artist detail page

## Components
##### Writing out your components and its descriptions isn't a required part of the proposal but can be helpful.

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header include the nav | 
| Footer | This will render the header include the nav | 


Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. It's always best to pad the time by a few hours so that you account for the unknown so add and additional hour or two to each component to play it safe. Also, put a gif at the top of your Readme before you pitch, and you'll get a panda prize.

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Adding Form | H | 3 hrs | - | - |
| Working with API | H | 3 hrs| - | - |
| Adding Nav | H | 2hrs | - | - |
| Adding Footer | H | 1 hr | - | - |
| Addding Search Results | H | 5 hrs | - | - |
| Addding Artist Detail | H | 6 hrs | - | - |
| Adding About Page | M | 2 hrs | - | - |
| Adding Current Top Artist to Home Page | L | 4 hrs | - | - |
| Embed YouTube Videos to Artist Detail | L | 4 hrs | - | - |
| Total | | 30 hrs | - | - |

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project such as Axios, ReactStrap, D3, etc. 

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description.  Code snippet should not be greater than 10 lines of code. 

```
function reverse(string) {
	// here is the code to reverse a string of text
}
```
