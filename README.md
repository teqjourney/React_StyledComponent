# Getting Started React with Styled Component

This is the sample project to show how to use styled-components in React.
## Project  Description
The dashboard is designed to provide an intuitive and visually appealing interface for users to interact with data effectively. It leverages modern web technologies and libraries to create a seamless experience. Some of the key features include custom components and interactive charts, which allow for real-time data visualization and manipulation.

### Features
- Custom Dashboard Components: Each component has been carefully crafted for optimal user experience.
- Interactive Charts: Utilize react-chartjs-2 for rendering responsive and animated charts for data visualization.
- Real-Time Data Handling: The dashboard updates components efficiently, reflecting the real-time changes in data.

### Built With
- React - A JavaScript library for building user interfaces
- styled-components - For styling React components using tagged template literals.
- react-chartjs-2 - React wrapper for Chart.js 2, perfect for creating interactive charts.

## Getting Started
### Prerequisites
To run this project locally, make sure you have the following installed:

- Node.js - Download and install from Node.js website.
- npm - Included with Node.js installation.

### Installation

1. Clone the repository to your local machine:

```bash
git clone https://github.com/brianyangtech/React_StyledComponent.git
cd React_StyledComponent
```

2. Install the required dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

Now, the project should be running on [http://localhost:3000](http://localhost:3000).



## How to use Styled Components

### 1. Install Styled Components

First, install the `styled-components` package using your package manager of choice. Here's how you do it with `npm` or `yarn`:

```sh
npm install styled-components
```

or

```sh
yarn add styled-components
```

### 2. Import Styled Components

In the React component file where you want to use styled components, import the default export from the `styled-components` package:

```javascript
import styled from 'styled-components';
```

### 3. Create Styled Components

You can now create styled components by calling the `styled` function and passing it an HTML tag as a template literal. Inside the template literal, you write your CSS.

Here's an example of creating a styled button:

```jsx
const StyledButton = styled.button`
  background-color: #4caf50;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  border-radius: 4px;

  &:hover {
    background-color: #45a049;
  }
`;
```

### 4. Use Your Styled Components

Finally, use your styled components like normal React components in your JSX:

```jsx
const App = () => {
  return (
    <div>
      <StyledButton>Click me</StyledButton>
    </div>
  );
};