# Patient Data

The app retrieves patient information and allows for modifications and new entries.

1. Design

The initial set up and configuration is made using create-react-app. 
Folder structure:

├── src/
│   ├── actions/ -> to handle dispatching states across components
│   ├── components/
│   ├── pages/
│   ├── services/ -> API requests
│   ├── reducer/ -> global states management
├── public/
│   ├── predetermined files from scaffolding
├── package.json
├── README.md

1. The Home page is the main component, structured with two main actions (search, create), along with a search results section.
    - The 'search' component requests a list of patients from the API and the results are rendered in the section below as a set of cards, each containing patient info.
    - The 'create' button allows for the creation of new patients and displays a modal for entering patient data.

2. All child and parent components are listed in the components/ folder.

3. The Search component retrieves all patient data from the API.

4. There is a Modal component that serves as a wrapper for two Custom Modals, each handling the Edit and Create actions, respectively.

5. Each Custom Modal manages its own form state and validations. The final state is dispatched to a Snackbar, which displays the outcome of the action.

## Global State Management

- All states across components are managed using the Context API and the useState hook for direct parent-child relationships.

- The Home page acts as the Context Provider, passing the state and dispatch functions as props.


## Libraries/Tools

- Material UI & emotion -> UI components:
    - Button
    - TextField
    - Icons: search, add & edit
    - Alert
    - Snackbar
    - Circular Progress
    - Card - card structure, content
    - Typography
- ESLint using airbnb configs

## Challenges
Material UI was used for the visual components, as the main focus was on the functionality and actions within the application. Experimentation with more custom components, animations, and UI/UX was limited due to time constraints and limited practice.




