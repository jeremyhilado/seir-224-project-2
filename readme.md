# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #3: Building a Full Stack MERN Application

Your last project taught you how to build an API application with Express and
Mongoose. This project will have you build a full stack application with a
similar API backend as well as a React front-end.

Your instructors have organized you and your classmates into groups to design
and build an app with two major components:

1. An API of your own design (built using Node, Express, and Mongoose) that
   serves JSON.
2. A front-end React application that updates the UI and makes requests to the
   API.

**This is meant to push you both technically and collaboratively.** You will be
joining a development team during your career. Working collaboratively is a
learned skill, just like programming. It's important to learn how to work
together.

## Requirements

It is important to keep in mind the goal of this program and these projects,
they are to utilize the skills you have been taught and the skills that
employers care about. You should strive to build projects that will catch an
employers eye and get you hired.

### Technical Requirements

**Back-End Requirements:**

- Your back-end must be a Node, Express, and Mongoose API with at least 2
  non-user models. No associations are required.
- Must have Create, Read, Update, and Destroy functionality built throughout the
  app (i.e. You don't need full CRUD on every model, just full CRUD throughout
  your models where it makes sense).

**Front-End Requirements:**

- Your front-end must use React and leverage the backend API in the above
  requirements.
- You must use React Router to handle multiple views.
- You must communicate with the back-end API RESTfully to Create, Read, Update,
  and Destroy resources (using either `fetch` or `axios`).

Review the [Rubric](./evaluation.md) for the specifics of how your project will
be graded.

### Collaboration

- Every team member must have roughly the same number of individual commits in
  the commit history for your app (dividing responsibilities between different
  parts of the app is fine, but every team member must have commits in the
  project).
- Every team must follow a
  [Git Workflow](https://git.generalassemb.ly/seir-1118/git-teams)
- Every team member must speak for roughly the same amount of time during the
  group [presentation](./presentations.md)

### Deployment

- Your API must be deployed to Heroku and your front-end must be deployed to
  GitHub pages or Netlify. Applications that are not deployed will be considered
  incomplete.

> We strongly recommend deploying your back-end and front-end separately. This
> will make it far easier to debug your deployed applications and manage your
> deployments.

### Bonus Requirements

You should only attempt these bonuses if and only if you've satisfied the base
technical requirements for this project.

#### User Authorization

Consider whether or not you want to introduce a barrier to entry for your
application. Does it fit in with the idea of your application? User
authorization is tricky.

#### Maps

If your application uses physical locations, consider adding a map **_as a bonus
feature_** to your application.
[Check out this Google Maps component library](https://tomchentw.github.io/react-google-maps/).

## Submission

**_DO NOT FORK THIS REPOSITORY!_** Create a **new** repository. Then, submit
your project as an issue to this repo.

Your team must turn in something before presentations begin. However, you are
welcome to continue working on it over the course of SEI and beyond!

With your submission please include any questions you'd like answered, or
specific things on which you'd like us to focus when giving feedback.

## Necessary Deliverables

Your submission must include **all** of the following:

### Project Idea and Initial Planning

By the end of Day 1 of Project Week, you need to submit:

1. Your project idea (a brief 2-3 sentence description of your app)
2. A list of your models and their properties

These and any other planning assets (wireframes, user stories, etc) should go
inside a `planning/` directory inside at least one of your project repositories.
Planning and Process is one category by which we will be
[evaluating your project](./evaluation.md).

### Final Application

Your project is due on the last day of Project Week (the exact date is in your
course calendar). Create an issue on this repo containing:

- A link to your deployed application
- A link to your Project 3 Github repositories (Do not fork this repo)

The repository for your backend API should include:

- A working JSON API (built by your team) built using Express and Mongoose that
  meets the technical requirements above.
- Frequent commits dating back to the very beginning of the project.
- A `readme.md` file in the root of your repo that follows
  [good standards of documentation](https://git.generalassemb.ly/ga-wdi-lessons/documentation-markdown)
  (i.e. explanations of the technologies used, the approach taken, features,
  installation instructions, unsolved problems, etc.)
- A `planning/` directory in the root of your repo containing a diagram mapping
  out your project domain. You are welcome to include other planning documents
  (e.g., wireframes, user stories).
- A link to your hosted, working API in the URL section of your Github repo:

> ![The URL section of your Github repo](https://i.imgur.com/QQ7RsfR.gif)

The repository for the frontend of your application should include:

- A working frontend application (built by your team) built with React and React
  Router that meets the technical requirements above.
- Frequent commits dating back to the very beginning of the project.
- A `readme.md` file in the root of your repo that follows
  [good standards of documentation](https://git.generalassemb.ly/ga-wdi-lessons/documentation-markdown)
  (i.e. explanations of the technologies used, the approach taken, features,
  installation instructions, unsolved problems, etc.)
- A `planning/` directory in the root of your repo containing a diagram mapping
  out your project domain. You are welcome to include other planning documents
  (e.g., wireframes, user stories).
- A link to your hosted, working application in the URL section of your Github
  repo:

> ![The URL section of your Github repo](https://i.imgur.com/QQ7RsfR.gif)

## Asking For Help

### Scrums

Once a day, typically in the morning, the instructors will have 10 minute scrum
meetings with each group to talk about progress and planning.

### In-person Support

Each team will be given 3 (three) tokens, redeemable at any time during regular
class and Study Hall time (not including evening Office hours), for 20 minutes
with an instructor. Tokens cannot be transferred between groups - there is no
black market for tokens.

Instructors will not be holding open office hours during project week. This is
to give you the opportunity to solve issues and errors you run in to on your own
and with your team.

An instructor will be assigned to each team and wil check in with your team
every morning for about 15 minutes. The purpose of these check-ins is not to
discuss technical questions, but to answer questions about workflow,
collaboration, communication or anything else related to working in a team.

## App Organization

You should split your application into separate repositories, one for your React
front-end and another for your Node-Express-Mongoose backend API.

[See deploying to Heroku with MongoDB Atlas here](https://git.generalassemb.ly/seir-1118/heroku-atlas-deployment).

## Contribution Guidelines

- Each member of your group **_must have an individual commit history_** to your
  project's repositories (Multiple commits per group member).
- One of your repositories (backend or frontend) must include a `planning/`
  directory with wireframes, user stories, technical goals (mvp, bronze, silver
  and gold) and the role of each group member in building the application.
  Specifically, it should include the responsibilities of each member and their
  contributions to the project.
- Each member of your group is expected to present for an equal amount of time
  during [project presentations](presentations.md), which last at least 10
  minutes per group.
- During 10-minute daily scrums with an assigned instructor, teams members must
  share progress. Scrum discussion topics may include goal-setting, time
  management, goal progress, and individual group contributions. This is **not**
  time to address technical issues. The instructors will check in with groups
  every day of project week.

## Project Ideas

For this project, work with your team to build a creative product that you think
someone will want to use.

> TIP: If you have an idea that you've been itching to make, save it for your
> Project 4. You can build whatever you want for Project 4, the purpose of this
> project is to build what you **and your teammates** want to build

If you're struggling to come up with your own project ideas, checkout
[r/startup_ideas](https://www.reddit.com/r/Startup_Ideas/) on reddit or
[requestforstartup.co](https://requestforstartup.co/).

> TIP: The best projects tend to be MVP versions of popular applications with a
> unique twist. If there's popular application that you use frequently (think
> Twitter, Facebook, Instagram, Evernote, etc), think about how you could create
> your own unique version of it.

Once your team selects an idea, the group **must** choose a workflow from the
[Git Teams & Workflow lesson](https://git.generalassemb.ly/ga-wdi-lessons/git-teams).
Be prepared to share your team's plans with your assigned instructor at the
first round of scrum.

## Tips

### Process

- **Write pseudocode** before you write actual code. Thinking through the logic
  first helps.
- **Write tests** that translate your pseudocode into requirements for the code
  you need to write. Then, write just enough code to make your tests pass!
- Don't hesitate to **write throwaway code** to solve short-term problems.
- **Read the docs** for whatever technologies / frameworks / API's you plan to
  use. (See ["RTFM"](https://en.wikipedia.org/wiki/RTFM))
- **Continuously Deploy** your code. Like, deploy at least once a day - ideally
  twice a day.

### Code

- **Keep your code DRY** and build your APIs RESTful.
- **Be consistent** with your code style. You're working in teams, but you're
  only making one app per team. Make sure it looks like a unified effort.
- **Commit early; commit often.** Don't be afraid to break something because you
  can always go back in time to a previous version (so long as you're committing
  often).
- **Deploy early; deploy often.** Deploy your work as early as possible, even if
  you don't really have anything completed. Heroku issues **always** pop up.
  Don't be caught short just before the submission deadline!
- **Name things appropriately. Comment as necessary.** Do your naming
  conventions make sense? Would another developer be able to look at your app
  and understand what everything is? (See
  ["self-documenting"](https://en.wikipedia.org/wiki/Self-documenting) and
  [Code Tells you How, Comments Tell you Why](https://blog.codinghorror.com/code-tells-you-how-comments-tell-you-why/)).
  Even if it's obvious, comments can help to explain the intent -- the what and
  why. This allows the next developer to understand the purpose and decide what
  can be adjusted to achieve the same goal.
- **Ensure it is well-formatted.** Are you indenting consistently? Can we find
  the start and end of every div, curly brace, etc? Organizing the hierarchy is
  key to understanding.

Teams of developers usually adhere to an agreed-upon set of code-style rules.
This reduces issues with reading our colleagues' code. We strongly recommend
using [StandardJS linting](https://github.com/standard/standard#install) or
[PrettierJS](https://github.com/prettier/prettier).

## Resources

- [HackDesign](https://hackdesign.org/lessons) (beginner's reference for
  thinking like a designer)
- [UX Design for Developers](https://hackernoon.com/ux-design-for-developers-d3429200a1da)

## Plagiarism

Take a moment to re-familiarize yourself with the
[plagiarism policy](https://git.generalassemb.ly/seir-1118/administrative/blob/master/plagiarism.md),
specifically on using work you find online and on work you do with other
students.

We give assignments like this to give you the opportunity to review the material
in class in a practical manner. By building something using what you've learned
in class, you'll be reviewing the material and gaining a deeper understanding of
it.

These assignments are similar to those you can expect when applying for a job,
either in the form of a take-home coding challenge or an in-person technical
interview. So it's important that you put in your best effort now and challenge
yourself to do this assignment on your own.

If you are struggling with the material, that's alright! That's why you're here.
First, try reviewing the previous lessons and exercises. Go easy on yourself,
you're still learning! If you're still struggling after that, come to office
hours and ask an instructor for help. They're here to help you!

Don't copy and paste from another source or another student or the solution
branch. That's just going to put you at a disadvantage when you're interviewing
for a job
