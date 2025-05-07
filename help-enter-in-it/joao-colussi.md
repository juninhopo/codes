Daily

- Joao Colussi

## Rules

- No games
- No Instagram (reels)
- No Tiktok (all)
- No X (reels)

## Pillars

- Stop ifood / only healthy foods 
- Exercise everyday
- Learn something new every day and post on dev.to
- Minimal 15 minutes with God per day

## To-dos

7h - good morning
7h30 - work
12h - lunch
13h - study - (Roadmap)
18h - break time
19h - gym
20h30 - study - (Write the article)
00h - stop all screens (no phone, screen)

## Roadmap to complete Woovi-challenge

[First task: Step 1 and 2 on github file](https://github.com/juninhopo/codes/blob/main/help-enter-in-it.md)

| Task | Subtask | Description |
|------|---------|-------------|
| 1    | 1.1     | **Read about GraphQL**: Research and read the official GraphQL documentation. |
| 1    | 1.1.1   | **Understand What GraphQL Is**: Learn the definition and purpose of GraphQL. |
| 1    | 1.1.2   | **Explore GraphQL vs REST**: Compare GraphQL with REST APIs to understand their differences. |
| 1    | 1.1.3   | **Learn About GraphQL Queries**: Focus on how queries are structured in GraphQL. |
| 1    | 1.1.4   | **Learn About GraphQL Mutations**: Understand how mutations work for modifying data. |
| 1    | 1.1.5   | **Explore GraphQL Schemas**: Study the concept of schemas and types in GraphQL. |
| 2    | 2.1     | **Install Node.js**: If you haven't already, install Node.js on your machine. |
| 2    | 2.1.1   | **Download Node.js**: Go to the official Node.js website and download the installer. |
| 2    | 2.1.2   | **Run the Installer**: Follow the installation instructions to set up Node.js. |
| 2    | 2.2     | **Create a New Project**: Use `npm init` to create a new Node.js project. |
| 2    | 2.2.1   | **Open Terminal**: Open your terminal or command prompt. |
| 2    | 2.2.2   | **Navigate to Project Directory**: Use `cd` to navigate to the desired project directory. |
| 2    | 2.2.3   | **Run `npm init`**: Execute `npm init -y` to create a new package.json file. |
| 2    | 2.3     | **Install Dependencies**: Run `npm install express express-graphql graphql` to install the necessary libraries. |
| 2    | 2.3.1   | **Understand Each Dependency**: Research what each package does (Express, express-graphql, graphql). |
| 2    | 2.3.2   | **Check Installation**: Verify that the dependencies are listed in your package.json. |
| 3    | 3.1     | **Define Types**: Create types for the data you want to manage (e.g., User, Transaction). |
| 3    | 3.1.1   | **Decide on Data Structure**: Determine what fields each type should have. |
| 3    | 3.1.2   | **Write Type Definitions**: Write the type definitions in your GraphQL schema. |
| 3    | 3.2     | **Define Queries**: Write the queries you need to retrieve data (e.g., `getUser`, `getTransactions`). |
| 3    | 3.2.1   | **Identify Query Requirements**: List what data you need to retrieve for each query. |
| 3    | 3.2.2   | **Write Query Definitions**: Write the query definitions in your GraphQL schema. |
| 3    | 3.3     | **Define Mutations**: Write the mutations needed to create, update, and delete data (e.g., `createUser`, `updateTransaction`). |
| 3    | 3.3.1   | **Determine Mutation Requirements**: Identify the input and output for each mutation. |
| 3    | 3.3.2   | **Write Mutation Definitions**: Write the mutation definitions in your GraphQL schema. |
| 4    | 4.1     | **Create Resolvers**: Implement resolver functions for each query and mutation you defined. |
| 4    | 4.1.1   | **Understand Resolver Functions**: Learn how resolvers work and their purpose. |
| 4    | 4.1.2   | **Write Resolver Functions**: Implement the resolver functions for your queries and mutations. |
| 4    | 4.2     | **Test Resolvers**: Use tools like GraphiQL or Postman to test your resolver functions. |
| 4    | 4.2.1   | **Set Up GraphiQL**: Install and set up GraphiQL or use Postman. |
| 4    | 4.2.2   | **Run Test Queries**: Execute your queries and mutations to see if they work correctly. |
| 5    | 5.1     | **Set Up Express**: Create a `server.js` file and set up a basic Express server. |
| 5    | 5.1.1   | **Import Express**: In your `server.js`, import the Express library. |
| 5    | 5.1.2   | **Initialize Express App**: Create an instance of an Express application. |
| 5    | 5.2     | **Integrate GraphQL**: Add the GraphQL middleware to your Express server. |
| 5    | 5.2.1   | **Import GraphQL Middleware**: Import the necessary GraphQL middleware in your `server.js`. |
| 5    | 5.2.2   | **Set Up GraphQL Endpoint**: Define the endpoint for your GraphQL API. |
| 5    | 5.3     | **Test the Server**: Start the server and test if the GraphQL endpoint is working. |
| 5    | 5.3.1   | **Run the Server**: Use `node server.js` to start your server. |
| 5    | 5.3.2   | **Access GraphQL Playground**: Open your browser and navigate to the GraphQL endpoint. |
| 6    | 6.1     | **Install Relay**: Run `npm install react-relay relay-runtime` to install Relay. |
| 6    | 6.1.1   | **Understand Relay**: Research what Relay is and its advantages. |
| 6    | 6.2     | **Create Relay Environment**: Set up a Relay environment in your React application. |
| 6    | 6.2.1   | **Import Relay Environment**: Create and configure a Relay environment file. |
| 6    | 6.3     | **Define Relay Containers**: Create Relay containers for your queries and mutations. |
| 6    | 6.3.1   | **Understand Relay Containers**: Learn how Relay containers work. |
| 6    | 6.3.2   | **Implement Relay Containers**: Write the containers for your components. |
| 7    | 7.1     | **Create React Components**: Develop React components for the user interface (e.g., creation form, transaction list). |
| 7    | 7.1.1   | **Plan Component Structure**: Decide on the structure of your components. |
| 7    | 7.1.2   | **Write Component Code**: Implement the React components. |
| 7    | 7.2     | **Integrate Relay with Components**: Use Relay containers to connect your components to GraphQL operations. |
| 7    | 7.2.1   | **Connect Components to Relay**: Use the Relay `createFragmentContainer` or `createPaginationContainer` as needed. |
| 8    | 8.1     | **Test Create**: Verify that the create functionality is working correctly. |
| 8    | 8.1.1   | **Use GraphiQL for Testing**: Test the create mutation using GraphiQL or Postman. |
| 8    | 8.2     | **Test Read**: Ensure that the queries are returning the expected data. |
| 8    | 8.2.1   | **Check Data in UI**: Verify that the data is displayed correctly in your React components. |
| 8    | 8.3     | **Test Update**: Test the update functionality to ensure changes are reflected. |
| 8    | 8.3.1   | **Use GraphiQL for Update Testing**: Test the update mutation using GraphiQL or Postman. |
| 8    | 8.4     | **Test Delete**: Verify that the delete functionality is operating as expected. |
| 8    | 8.4.1   | **Use GraphiQL for Delete Testing**: Test the delete mutation using GraphiQL or Postman. |
| 9    | 9.1     | **Document Decisions**: Write about the decisions you made during development. |
| 9    | 9.1.1   | **Reflect on Design Choices**: Consider why you made specific design choices. |
| 9    | 9.2     | **Record Trade-offs**: Note the trade-offs you faced and how you resolved them. |
| 9    | 9.2.1   | **Analyze Trade-offs**: Evaluate the impact of your trade-offs on the project. |
| 9    | 9.3     | **Review the Code**: Conduct a code review and document any improvements you would like to make. |
| 9    | 9.3.1   | **Identify Areas for Improvement**: Look for code smells or areas that could be optimized. |
| 10   | 10.1    | **Refactor Code**: Apply the improvements you identified in the review. |
| 10   | 10.1.1   | **Implement Refactoring**: Make the necessary code changes to improve quality. |
| 10   | 10.2    | **Add Tests**: If you haven't already, write tests for your functions and components. |
| 10   | 10.2.1   | **Choose Testing Framework**: Decide on a testing framework (e.g., Jest, Mocha). |
| 10   | 10.3    | **Prepare for Deployment**: Research how to prepare your application for deployment, if necessary. |
| 10   | 10.3.1   | **Learn About Deployment Options**: Explore options like Heroku, Vercel, or AWS. |
| 10   | 10.3.2   | **Follow Deployment Steps**: Follow the specific steps for your chosen deployment platform. |