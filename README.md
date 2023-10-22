# HealthcareAppoManage

HealthAppoManager is a Node.js application designed for managing healthcare appointments. It provides a robust backend system for healthcare institutions to schedule, manage, and track appointments. This repository contains the source code for the HealthAppoManager project, including server logic and database configurations.

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Contributors](#contributors)

## Introduction

HealthAppoManager is a healthcare appointment management system developed to streamline the appointment scheduling process. The system offers an easy-to-use interface for both healthcare providers and patients, enabling them to schedule, reschedule, and cancel appointments efficiently.

## Features

- User authentication and authorization
- Appointment scheduling and management
- Database persistence using Sequelize
- Secure password hashing with bcrypt
- JWT-based authentication for secure communication
- Error handling and validation using Joi
- Environmental variable management with dotenv
- Testing with Jest and Supertest
- Continuous integration with Travis CI

## Getting Started

These instructions will help you set up a development environment for HealthAppoManager on your local machine.

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) package manager
- [MySQL](https://www.mysql.com/) database
- [Git](https://git-scm.com/) for version control

### Installation

1. Clone this repository to your local machine using Git:

   ```bash
   git clone https://github.com/Oussamahaddi/HealthcareAppoManage
   ```
2. Navigate to the project directory:
    ```bash
    cd HealthcareAppoManage
    ```
3. Install the project dependencies:
    ```bash
    npm i
    ```
4. Set up your environment variables by creating a .env file in the project root directory. You can use the provided .env.example file as a template.
5. Create the MySQL database and configure your connection in the .env file.
6. Run the database setup script to create tables and seed initial data:
    ```bash
    npm run db-setup
    ```
7. Start the application:

    ```bash
    npm start
    ```
    or 
    ```bash
    npm run server
    ```
    Your HealthAppoManager instance should now be up and running locally.

## Usage

Once the application is running, you can interact with it through its REST API. Detailed API documentation is available in the codebase and can be accessed via your preferred API documentation tool (e.g., Swagger).

## Contributors
- Redouane Khlifah
- Oussama Haddi
- Abdeslam Hannouni
- Houssni Ismail
- İkram Mahfoud
