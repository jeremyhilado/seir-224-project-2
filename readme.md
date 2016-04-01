# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #3: Building a Rails App with an Angular Front-end

### Overview

While your last project taught you how to get started with Ruby, SQL, & Ruby on Rails, this project you'll be building something exciting combining **Rails with an Angular front-end**

Your instructors will partner you with other classmates to architect, design, and collaboratively build an app with two major components:

1. An API of your own design, built using Rails, which serves JSON.
2. Front-end Angular code that updates the UI, and makes requests to the API using AJAX.

**This is meant to push you both technically and collaboratively.**  You will, almost certainly, be joining a development team during your career.  Working collaboratively is a learned skill, just like programming. **It's important to learn how to work together.**

It is *not required* that your Angular front-end run on top of your Rails back-end, but we **strongly encourage** you to host them on the same server.

---

### Pro Tips

#### User Auth

You are strongly **DISCOURAGED** from including users and user authentication in your project! Stretch yourself to do something different!

There are three main reasons for this:
- User authentication is tricky. It's never as easy as you think it will be. Time and time again we see people's projects getting hung up because they got stuck on adding user authentication. An app with user authentication but no functionality is *not an app*. An app with functionality but no user authentication *is* an app. Your prospective employers will be much more impressed by the experience of using your app than they will by the fact that they can log in.
- It can make for a worse user experience. It creates a barrier to entry. Unnecessary user authentication is a sure-fire way to get me to stop using your app. "Do I *really* need to log in just so I can post a link to a GIF? Next!"
- *Everyone* makes apps with user auth. They do this because they feel like they should. The result is these apps all tend to look and feel pretty similar: a user can create some sort of list. Deliberately *not* having user auth will make your app stand out from the crowd.

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

### Potential Project Ideas

For this project, work with your team to build a creative product that you actually think someone will want to use. We won't have time to do tons of customer research, but take some time to brainstorm. If you're struggling for ideas, you can check out the [GA Project Gallery](http://gallery.ga.co).

---

### Evaluation and Submission

One member of the group must submit an issue on the [Project 3 Gallery](https://github.com/ga-dc/wdi8-project3-gallery) repository by **12:30 pm, Thursday, April 7th**.

[See the requirements for the contents of the submission here.](evaluation.md#Submission)

Feedback will be returned to you by **6:00 pm, Wednesday, April 13th**.

---

### Attendance

**Attendance will be taken every day at 9am. Remember to check in!**

---

### Scrum Masters

Each group will be assigned an instructor as a **Scrum Master**. They will meet with you at the following times:

| Date       | Time |
|------------|------|
| Fri 4/1   | 30 minutes between 3:30  - 4:30 |
| Mon 4/4   | < 10 minute check-in, time to be scheduled by your instructor |
| Tue 4/5 | 30 minutes between 4:00  - 5:00 |
| Wed 4/6   | 30 minutes between 9:00am  - 10:00am |

---

### Support

Instructors will be checking Github issues and Slack to respond to technical questions.

We will also be implementing a **token system**. Each group has 3 virtual tokens they may redeem for 15 minutes of undivided attention from any instructor.

To redeem a token, simply Slack the desired instructor. They will then mark off one of your token slots on [the groups page](groups.md).

You may not redeem part of a token.

---

### Useful Resources

* **[Deploying Heroku Apps with Custom Names](https://devcenter.heroku.com/articles/renaming-apps)**
* **[Deploying Angular on Rails](https://github.com/ga-wdi-lessons/angular-on-rails/blob/master/walkthrough.md#commit-deploy)**
