# Candidate Search App

## Description
A responsive React + TypeScript application for browsing GitHub user profiles and saving potential candidates. The app fetches random public profiles using the GitHub REST API, allows you to accept or reject candidates, and persistently stores accepted profiles in localStorage.

**Live Site:** [https://candidatesearch-bopm.onrender.com](https://candidatesearch-bopm.onrender.com)

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Credits](#credits)
- [License](#license)


## Installation

1. **Clone the repo:**
   ```bash
   git clone https://github.com/SSgrandslam7/candidateSearch.git
   cd candidateSearch

2. **install dependencies:**
   ```bash
   npm install

3. **Add a GitHub token:**
   Create a .env file in ./environment directory with:
   VITE_GITHUB_TOKEN=your_github_personal_access_token

4. **Start the dev server:**
   ```bash
   npm run dev


**Usage:**
To be able to view multiple GitHub profiles in a short amount of time, and be able to quickly save potential candidates to later consider their profile and whether they match the qualifications you are looking for in a candidate. 

   ![Candidate Search page](./src/assets/candidate%20search%20page.png)
   ![Saved Candidates page](./src/assets/saved%20candidates%20page.png)

   
## Features

- Randomly loads GitHub user profiles with full details
- Accept (+) or reject (–) a candidate
- Saves accepted candidates to localStorage
- Saved candidates view presented in a clean table format
- Skips profiles that are missing required info (e.g., email or bio)
- Uses GitHub token to avoid rate-limiting
- Fully deployed on Render


## Credits

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [GitHub REST API](https://docs.github.com/en/rest)
- [Render](https://render.com/) for deployment

**License:**
MIT © 2025 Stephen Schier