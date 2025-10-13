# P3 - Cloud-Based Full Stack Application

## Project Requirements (Minimum Viable Product)

### Application Architecture

- Your code must be pushed to a project git repo on the cohort organization
- Your application must build and run
- Your application components must be loosely coupled, and exemplify a Service Oriented Architecture
- Your application should be deployed to the Azure cloud

### Git Repository

- Your source code and project resources must be stored in a Git repository
- Your repo must be hosted on a GitHub repo, within the cohort organization
- Your repo must demonstrate good feature banching workflow
- Your repo must demonstrate at least five Pull Requests
- Your repo must include at least one automated CI/CD pipeline
  - Your CI/CD pipeline should execute any unit tests
  - Your CI/CD pipeline should execute static analysis of your source code
  - Your CI/CD pipeline should build your applicaiton(s)
  - Your CI/CD pipeline should containerize your application
  - Your CI/CD pipeline should deploy your application

### SQL Database

- Your database must use MS SQL Server
- Your database must be hosted on the Azure cloud
- Your database should be in 3rd normal form
- Your database should include at least one many-to-many relationship
- Your database should be set up through an Entity Framework "Code-First" migration

### API

- Your API must be written in C# for .NET
- Your API must use the ASP.NET framework
- Your API must be containerized in a Docker container for deployment
- Your API must be deployed to an Azure App Service instance in the Azure cloud
- Your API must exemplify the principles of REST
- Your API must implement the Repository pattern for data persistance (multiple namespaces, interface)
- Your API must implement SQL Server and Entity Framework Core to provide data persistance
- Your API should fulfill all common CRUD functions
- Your API should include proper exception handling
- Your API should include logging with Serilog
- Your API should include validation for any data being handled
- Your API should include at least 50% unit test coverage
- Your API must implement an HTTP request to another API* 3rd party api
- Your API must provide a cookie to the client
- Your API must include Authentication and Authorization functionality

### Frontend

- Your frontend must interact with your API for data persistence
- Your frontend must use the React library.
    -- Your frontend must include at least 5 components, with at least one nested component. (At least one parent-child relationship, and at least one other unrelated component).
        --- Your components should include at least one component that implements `useState`.
        --- Your components should include at least one component with props.
        --- Your components should include at least one component that implements the `Context` hook.
- Your frontend must be built on the or Next.js frameworks.
- Your fontend must be containerized in a Docker container for deployment
- Your frontend must be deployed to an Azure App Service instance in the Azure cloud
- Your frontend must include routing for navigation

## Non-Functional Requiremnts

- Your project team should select a Team Lead to organize the development team efforts
- Your project should include a Project Description document which details:
    -- a description of the project
    -- at least ten user stories for your applicaton
    -- a wireframe diagram of the UI
    -- an ERD (Entity Relationship Diagram) of the Database
    -- unit test coverage reporting
    -- API endpoint documentation
- Your project team should conduct a daily stand-up meeting
    -- meeting notes should be kept to record development progress

## Project Presentation

- Project presentation will be done on Friday 10/24 afternoon.
- Your presentation should include all memebers of your team
- Your presentation should explain the project to a non-technical audience
- Your presentation should explain major decisions in architecture, design, technologies, and deployments
- Your presentation may include 'roadblocks, 'lessons learned', and 'future development' sections
- You should demo the application functionality by completing the planned user stories
- Your presentation should be about 25 minutes long, no longer than 35 minutes (at 40 min, you will be cut off so that there is time for everyone to present)
