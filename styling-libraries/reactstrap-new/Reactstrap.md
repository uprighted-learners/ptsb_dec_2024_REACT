
# Reactstrap with React

This guide walks you through the steps to integrate Reactstrap, a popular React UI library, into your React application. Reactstrap provides Bootstrap components as React components, making it easy to implement Bootstrap's features in your React project.

## Installation

To start using Reactstrap in your React project, follow these steps:

### Step 1: Install Dependencies

First, you'll need to install React, React DOM, and Reactstrap.

```bash
npm install reactstrap react react-dom
```
Step 2: Install Bootstrap
Next, install Bootstrap to style the components provided by Reactstrap.

```bash

npm install --save bootstrap
```
Step 3: Import Bootstrap Styles
In your main application file (e.g., index.js or App.js), import the Bootstrap CSS to apply its default styles to the components.

```js
import 'bootstrap/dist/css/bootstrap.min.css';
```
Using Reactstrap Components
Now that you've set up Reactstrap and Bootstrap, you can start using its components in your application. Below is an example of how to import and use the Button component.

Example Usage
```js
import React from 'react';
import { Button } from 'reactstrap';

export default (props) => {
  return <Button color="danger">Danger!</Button>;
};

```