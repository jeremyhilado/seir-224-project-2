# Project Overview

## Project Links

- [GitHub Repo Link](https://github.com/jeremyhilado/seir-224-project-2)
- [add your deployment link]()

## Project Description

My project will be a music website where users can search for an artist via a form and then gets shown a list of matching search results. The user can then click on a specific artist and be shown the artist's biography, top tracks, album catalog and also similar artists. It will also contain pictures of the artist and album cover art.

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
| Adding Form | H | 3 hrs | 3 hr | 3 hrs |
| Working with API | H | 3 hrs| 2.5 hrs | 2.5 hrs |
| Adding Nav | H | 2hrs | 1 hr | 1 hr |
| Adding Footer | H | 1 hr | 1 hr | 1 hr |
| Addding Search Results | H | 5 hrs | 5 hrs | 5 hrs |
| Addding Artist Detail | H | 6 hrs | 6 hrs | 6 hrs |
| Deployment | H | 4 hrs | 2 hrs | 2 hrs |
| Testing | H | 3 hrs | 4 hrs | 4 hrs |
| Adding Styling | M | 5 hrs | 4 hr | 4 hrs |
| Adding About Page | M | 2 hrs | 1 hr | 1 hr |
| Adding Current Top Artist to Home Page | L | 4 hrs | 0 | 0 |
| Embed YouTube Videos to Artist Detail | L | 4 hrs | 0 | 0 |
| Total | | 42 hrs | - | 29.5 hrs |

[Time Priority Matrix](https://res.cloudinary.com/do6tcpizk/image/upload/v1585328064/Project%202%20React%20App/Time_Priority_Matrix_nxy0ig.jpg)

## Additional Libraries
 
 None.

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of and a brief description.  Code snippet should not be greater than 10 lines of code. 

    } else if (!audiodbArtistData.artists && lastfmTracksData.toptracks) {
        return(
            <div className='no-match-container'>
                <h1 className='no-match'>No matching artist page. Please go back and try again.</h1>
            </div>
        )
    } else {
        return <></>
    }

This code snippet checks whether all the APIs have finished fetching and displays nothing if they haven't and then returns a message saying if no matches if they have and there is no data we can show the user based on their search choice.

## Issues and Resolutions

First issue I had was I tried storing all the data in my App component and passing it down to all the other components. However, I ran into an issue with the data not being passed to my SearchResults component when I used the form submit button as a direct link to the search results page. The resolution I came up with was to move the API call to the SearchResults component.

The second issue I had was the app breaking because it tried to access data that did not exist yet because it was not fully fetched. I implemented conditional rendering as a resolution.