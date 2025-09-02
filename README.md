# Konami Gaming - UI Developer II Code Sample

## Overview
A React + TypeScript mini app that allows users to log in and manage tasks. All data is stored locally.

## Setup
1. Clone the repo
2. Run `npm install`
3. Run `npm start` to launch the app

## Assumptions
- Login: 
    - Only provided mock users are valid
    - No password complexity enforced
    - Login state resets on refresh
    - User data is stored locally
    - No account creation; login credentials are predefined
- Task List:
    - Tasks are stored in local React state
    - Task names are assumed to be short (under 100 characters) for UI purposes, but no hard limit is enforced
    - Only one user can utilize the task list at a time
- Design / UX:
    - Users can add, edit, and delete tasks. "Save" and "Cancel" buttons replace "Edit" and "Delete" buttons when editing a task
    - The app is made for desktop and tablet interfaces

## Future Improvements
- Mobile-first responsive design
- Adding server-side logic and SQL integration
- Enhancing accessibility and overall UI/UX