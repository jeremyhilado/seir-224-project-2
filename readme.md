# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #3: Building a SPA with an Angular Front-end and Rails Back-end

### Overview

While your last project taught you how to get started with Ruby and Rails, this project will have you building something exciting by combining an **Angular front-end with a Rails back-end.**

Your instructors will partner you with other classmates to architect, design and collaboratively build an app with two major components:

1. An API of your own design, built using Rails, which serves JSON.
2. Front-end Angular code that updates the UI and makes requests to the API using AJAX.

**This is meant to push you both technically and collaboratively.**  You will, almost certainly, be joining a development team during your career.  Working collaboratively is a learned skill, just like programming. **It's important to learn how to work together.**

---

### Requirements
- This app must contain a back-end API with at least 2 models. No associations are required.
- This app must use an Angular front-end that leverages the backend API in the above requirement.
- Work hard and have fun!

###Contribution Guidelines
- Each member of your group must have an individual commit history to your project's repositories.
- Each project should include a Readme.md that provides information as to the roles of each member of the group. Specifically, it should include the responsibilities of each member and their accomplishments.
- Each member of your group is expected to present for an equal amount of time during ([project presentations](https://github.com/ga-wdi-exercises/project3/blob/wdi14/presentations.md)).
- During 10-minute daily scrums with an assigned instructor, teams members must share progress. The scrums will entail discussion on goal-setting, time management, accomplishments and individual group contributions. This is **not** time for technical issues. The instructor will check in with groups every morning of project week.

### Pro Tips

#### User Auth

You are strongly **DISCOURAGED** from including users and user authentication in your project! Stretch yourself to do something different!

There are three main reasons for this:
- User authentication is tricky. It's never as easy as you think it will be. Time and time again we see people's projects getting hung up because they got stuck on adding user authentication. An app with user authentication but no functionality is *not an app*. An app with functionality but no user authentication *is* an app. Your prospective employers will be much more impressed by the experience of using your app than they will by the fact that they can log in.
- It can make for a worse user experience. It creates a barrier to entry. Unnecessary user authentication is a sure-fire way to get me to stop using your app. "Do I *really* need to log in just so I can post a link to a GIF? Next!"
- *Everyone* makes apps with user auth. They do this because they feel like they should. The result is these apps all tend to look and feel pretty similar: a user can create some sort of list. Deliberately *not* having user auth will make your app stand out from the crowd.

#### Maps

**IF** you decide to incorporate a map into your project:
- It should be an additional feature of your application.
- It should **not** be the lynchpin of your application.
- Like user authentication a non functional app with a map is not an app. A functional app without a map is an app. Turns out, most apps don't have maps in them.
- Check out out [this](https://github.com/ga-wdi-lessons/angular-maps) lesson plan to get started.
- They can cause a lot of headache for little gain. Maps are cool, but they aren't **that** cool

#### Process

* **Keep user stories small** and well-defined. Remember: user stories focus on what a user *needs*, not what development tasks need accomplishing.
* **Write pseudocode** before you write actual code. Thinking through the logic first helps.
* **Don't hesitate** to write throwaway code to solve short-term problems.
* **Read the docs** for whatever technologies / frameworks / API's you plan to use. (See ["RTFM"](https://en.wikipedia.org/wiki/RTFM))

#### Code

* **Keep your code DRY** and build your APIs RESTful.
* **Be consistent** with your code style. You're working in teams, but you're only making one app per team. Make sure it looks like a unified effort.
* **Commit early; commit often.** Don't be afraid to break something because you can always go back in time to a previous version.
* **Deploy early; deploy often.** Deploy your work as early as possible, even if you don't really have anything completed. Heroku issues **always** pop up. Don't be caught short just before the submission deadline!
* **Name things appropriately.  Comment as necessary.** Do your naming conventions make sense? Would another developer be able to look at your app and understand what everything is? (See ["self-documenting"](https://en.wikipedia.org/wiki/Self-documenting)).  Even if it's obvious, comments can help to explain the intent -- the what and why.  This allows the next developer to understand the purpose and decide what can be adjusted to achieve the same goal.
* **Ensure it is well-formatted.** Are you indenting consistently? Can we find the start and end of every div, curly brace, etc?  Organizing the hierarchy is key to understanding.


---

### Project Ideas

For this project, work with your team to build a creative product that you actually think someone will want to use.

All students are required to submit a project 3 idea as an issue [here](https://github.com/ga-wdi-exercises/project3/issues). The deadline for submission is March 10 at 9:00AM.

After groups have been announced during project 3 kickoff, teams will have one hour to select an idea from all submissions. Students will then inform their assigned instructor of the idea their team has chosen. Ideas will be approved on a first-come, first-serve basis.

**Teams may not choose an idea that any group member has submitted.**

---

### Evaluation and Submission

[See the requirements for the contents of the submission here.](evaluation.md#Submission)

#### [Submit Your Project Here](https://github.com/ga-dc/project3-gallery/issues)

---

### Attendance

**Attendance will be taken every day at 9am. Remember to check in!**

---

### Support

We will be responding to [Github issues](https://github.com/ga-wdi-exercises/project3/issues).

> If you'd like a reference for a good question checkout [this lesson](https://github.com/ga-wdi-lessons/effective_questions)

Each group will be given 3 tokens, redeemable at any time for 15 minutes each with an instructor of your choice, for a total of 45 minutes per group. No, you can't transfer tokens. And there are no rollover minutes. Just slack the instructor and they will update the number of tokens assigned to your group recorded in [this file](groups.md).

### Useful Resources

* **[Deploying Heroku Apps with Custom Names](https://devcenter.heroku.com/articles/renaming-apps)**
* **[Deploying Angular on Rails](https://github.com/ga-wdi-lessons/angular-on-rails/blob/master/walkthrough.md#commit-deploy)**
