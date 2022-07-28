# Step Counter Challenge

A simple React app for users to record the number of steps they take each day.

Assume a user will use a pedometer or their phone to record the steps and then use this app to record their progress each day.

## Requirements

1. Users can record their daily steps
2. Steps are shown in cronological order with newer dates at the top.
3. The total number of steps are shown in a row at the bottom.
4. Users can enter a date and a number of steps to add to the list.
5. User inputs are to be validated to check for valid dates and number of steps.

## Tech Stack

**Client:** React, HTML5, CSS

**Server:** Node, Express

**Database:** MongoDB

## API Reference

#### Get all items

```http
  GET /api/v1/steps
```

This gets all the steps listed in MongoDB.

```http
  POST /api/v1/steps
```

| Parameter    | Type     | Description                           |
| :----------- | :------- | :------------------------------------ |
| `id`         | `string` | **Required**. Id of Steps to post     |
| `dateOfStep` | `Date`   | **Required**. Date the step was taken |
| `stepsTaken` | `Number` | **Required**. Number of steps taken   |

## Run Locally

Clone the project

```bash
  git clone https://github.com/comingback2life/exChallenge.git
```

Go to the project directory

```bash
  cd step-counter
  cd step-counter-api
```

Install dependencies

```bash
  npm install
```

Start the frontend

```bash
  npm  start
```

Start the server (Backend)

```bash
  npm run dev
```
