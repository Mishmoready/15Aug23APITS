# Mission 1 For Moses Cook

## Table of Contents
- [Mission 1 Report for Moses Cook](#mission-1-report-for-moses-cook)
  - [Task 1: Identify Stakeholders](#task-1-identify-stakeholders)
    - [Tech related](#one-of-the-main-collaborators-in-relation-to-the-project-would-be-the-partnership-in-the-technology-sector-they-are-broken-down-into)
  - [Task 2: Understand Context of a Project](#task-2-understand-context-of-a-project)
    - [Questions](#questions)
  - [Task 3: Familiarize with Tool for Task Management](#task-3-familiarize-with-tool-for-task-management)
  - [Task 4: Learn about Test-Driven Development](#task-4-learn-about-test-driven-development)
  - [Task 5: Create Test Cases](#task-5-create-test-cases)
    - [Test Cases](#test-cases)
    - [Conclusion](#conclusion)
  - [Report: Cars API Endpoint Tests](#report-cars-api-endpoint-tests)
    - [Test Suite 1: General API Endpoints](#test-suite-1-general-api-endpoints)
    - [Test Suite 2: Cars Value API Endpoint Tests](#test-suite-2-cars-value-api-endpoint-tests)

# Mission 1 Report for Moses Cook

## Task 1: Identify Stakeholders

The stakeholders involved in the Motor Vehicle Insurance Buying experience can come down to key contributors to such a buying experience.

### One of the main collaborators in relation to the project would be the partnership in the technology sector. They are broken down into:

1. **Tech related**:
    a. Website and/or App devs: These would be obviously the main stakeholders in creating the website together entirely.
    b. UX/UI Designers: The designers would be responsible for designing the look and feel of the website slowly being put together.
2. **Policyholders**: I would like to think that policyholders would be the stakeholders to be interacting with the end users/customers. They would be “in the middle” liaising with customers to send ideas over to other stakeholders (Tech related stakeholders).
3. **Managers, Business gatekeepers**: In general liaising with turners insurance companies as well as conveying messages to developers.

## Task 2: Understand Context of a Project

For this task, it's important to gather around the purposes of the functioning business and the right relevant information. This may help with finding the right ideas when applying practices in the business. Focusing on the business in question, we need to understand its goals and what type of clients or stakeholders they want to take on board in the finance/auto-insurance industry.

### Questions:

1. **What is turners insurance's primary objective or what is the main goal of what turners insurance is trying to achieve?**
    i. Introductory to getting on board in business terms.
    ii. Wastes no time wanting to get involved and straight to business.
2. **With the task involved, where are you expecting to find “bumps on the road” when initializing the auto project? If so, could you mention past projects on whether these challenges are repeating and how are you able to rectify them?**
    i. Wanting to know the troubles of certain projects at turners would help keep stakeholders engaged as no project (or unlikely) is perfectly run when doing projects.
    ii. For us as stakeholders tech-wise. This would give us any indication on how we could mitigate problems at a later stage of the project.
3. **As the project goes on, who do we need to see on who makes critical calls should there be any changes or challenges that come through?**
    i. It's critical to know that certain stakeholders need to know who oversees the project.
    ii. Once identified, we then need to know how such projects can be curated or processed on what needs to take place.
4. **What resources do we have available to us when undertaking the project?**
    i. Needing to know what tools we have available.
    ii. Very useful to know what type of support we can have.
5. **How risk-averse is the project to be successful?**

   ...

## Task 3: Familiarize with Tool for Task Management

The tasks used to create Management tasks were with Jira. Learning Jira has been an experience for managing my tasks. At first, I was a bit unsure about how to navigate the platform, but I soon found that it offers useful features for tracking progress and organizing work. While it may not revolutionize the way I handle my daily routine, the ability to collaborate with team members and customize workflows has proven helpful. Overall, familiarizing myself with Jira has been a positive step, providing a practical tool for handling my tasks with a bit more ease.

## Task 4: Learn about Test-Driven Development

...

## Task 5: Create Test Cases

### Test Cases

| Test Case Number | Input (model, year)                                                           | Expected Output ($ value)                  | Test Description                     |
|------------------|-------------------------------------------------------------------------------|------------------------------------------|--------------------------------------|
| 1                | "Civic", 2014                                                                 | $6614                                    | Sunny day scenario                   |
| 2                | "SSV8Ute", 2005                                                               | $12605                                   | Numbers only is okay for 2           |
| 3                | "Demio", 2007                                                                 | $6607                                    | Numbers only is okay for 3           |
| 4                | "Alphard", 2017                                                               | $8017                                    | Numbers only is okay for 4           |
| 5                | "Land Rover Range Rover Evoque 2.0 TD4 E-Capability 4x4 HSE Dynamic", 2007   | $58907                                   | Numbers only is okay for 5           |
| 6                | "Task-Force", -987                                                            | error: "Negative year"                   | Negative Number                       |
| 7                | "C200", 9999                                                                  | error: "Year cannot be greater than 2023"| should return the value for the car with id 7 |

1. **Understanding Requirements:** Grasping the API functionality, including input, output, error handling, and specific rules.

2. **Identifying Test Scenarios:** Outlining high-level scenarios such as retrieving car details and calculating values to ensure all aspects are covered.

3. **Designing Test Cases:** Crafting detailed test inputs, expected outputs, and execution steps, including edge cases like negative years or future years.

4. **Development and Execution:** Implementing the test cases using a testing framework like Jest and Supertest, and setting them up for automation if needed.

5. **Maintenance:** Continually updating and reviewing the test suite to align with any changes in the Cars API Endpoint.

### Conclusion
Creating test cases requires clear comprehension of the system, strategic planning, specific design, and proper execution, coupled with regular maintenance. This process ensures the system behaves as expected and aids in maintaining the overall quality.

...

## Report: Cars API Endpoint Tests

### Test Suite 1: General API Endpoints

1. **Root Endpoint: GET /**
   - **Objective:** Test if the root endpoint returns the expected greeting.
   - **Expected Result:** "Hello World!"
   - **Status:** To be determined by test run.

2. **Cars List: GET /cars**
   - **Objective:** Test if the endpoint returns the correct number of cars.
   - **Expected Result:** List of 7 cars.
   - **Status:** To be determined by test run.

3. **Car Values: GET /cars/:Value**
   - **Objective:** Test if the endpoint returns the expected car values.
   - **Expected Result:** List of car values and an error for negative year.
   - **Status:** To be determined by test run.

### Test Suite 2: Cars Value API Endpoint Tests

1. **Sunny Day Scenario: GET /cars/value/Civic/2020**
   - **Objective:** Test if the endpoint returns the correct value for a Civic 2020.
   - **Expected Result:** {"Car Value": "$2520"}.
   - **Status:** To be determined by test run.

2. **Numbers Only Test: GET /cars/value/911/2020**
   - **Objective:** Test if the endpoint handles numbers only.
   - **Expected Result:** {"Car Value": "$2320"}.
   - **Status:** To be determined by test run.

3. **Negative Year Test: GET /cars/value/Task-Force/-987**
   - **Objective:** Test if the endpoint handles a negative year.
   - **Expected Result:** {"error": "Negative year"}.
   - **Status:** To be determined by test run.

4. **Comprehension Test**
   - **Objective:** Test for a complex query with a detailed car model and year.
   - **Expected Result:** {"Car Value": "$8607"}.
   - **Status:** To be determined by test run.

5. **Wrong Data Type Test: GET /cars/value/C200/twenty%20twenty**
   - **Objective:** Test if the endpoint handles incorrect data types.
   - **Expected Result:** {"error": "Wrong data type"}.
   - **Status:** To be determined by test run.

6. **Additional Numbers Only Tests**
   - **Objective:** Test specific scenarios with numbers only in car models.
   - **Expected Results:** Various, depending on the car model and year.
   - **Status:** To be determined by test run.

This report describes the objectives and expected outcomes of the test cases in the provided code. The status of each test case will be determined when the tests are run. If you're looking for a more detailed report with actual test results, you would need to run the tests and capture the results, possibly using a reporting tool compatible with Jest.
...

## Report: Cars API Endpoint Tests

### Test Suite 1: General API Endpoints

1. **Root Endpoint: GET /**
   - **Objective:** Test if the root endpoint returns the expected greeting.
   - **Expected Result:** "Hello World!"
   - **Status:** To be determined by test run.

2. **Cars List: GET /cars**
   - **Objective:** Test if the endpoint returns the correct number of cars.
   - **Expected Result:** List of 7 cars.
   - **Status:** To be determined by test run.

3. **Car Values: GET /cars/:Value**
   - **Objective:** Test if the endpoint returns the expected car values.
   - **Expected Result:** List of car values and an error for negative year.
   - **Status:** To be determined by test run.

### Test Suite 2: Cars Value API Endpoint Tests

1. **Sunny Day Scenario: GET /cars/value/Civic/2020**
   - **Objective:** Test if the endpoint returns the correct value for a Civic 2020.
   - **Expected Result:** {"Car Value": "$2520"}.
   - **Status:** To be determined by test run.

2. **Numbers Only Test: GET /cars/value/911/2020**
   - **Objective:** Test if the endpoint handles numbers only.
   - **Expected Result:** {"Car Value": "$2320"}.
   - **Status:** To be determined by test run.

3. **Negative Year Test: GET /cars/value/Task-Force/-987**
   - **Objective:** Test if the endpoint handles a negative year.
   - **Expected Result:** {"error": "Negative year"}.
   - **Status:** To be determined by test run.

4. **Comprehension Test**
   - **Objective:** Test for a complex query with a detailed car model and year.
   - **Expected Result:** {"Car Value": "$8607"}.
   - **Status:** To be determined by test run.

5. **Wrong Data Type Test: GET /cars/value/C200/twenty%20twenty**
   - **Objective:** Test if the endpoint handles incorrect data types.
   - **Expected Result:** {"error": "Wrong data type"}.
   - **Status:** To be determined by test run.

6. **Additional Numbers Only Tests**
   - **Objective:** Test specific scenarios with numbers only in car models.
   - **Expected Results:** Various, depending on the car model and year.
   - **Status:** To be determined by test run.

This report describes the objectives and expected outcomes of the test cases in the provided code. The status of each test case will be determined when the tests are run. If you're looking for a more detailed report with actual test results, you would need to run the tests and capture the results, possibly using a reporting tool compatible with Jest.

...
