# Candidate Search App

## Description
A responsive React + TypeScript application for browsing GitHub user profiles and saving potential candidates. The app fetches random public profiles using the GitHub REST API, allows you to accept or reject candidates, and persistently stores accepted profiles in localStorage.

Live Site: [https://your-render-deployment.onrender.com](https://your-render-deployment.onrender.com)


## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)


## Screenshots

![Candidate Search page](./Assets/13-01-candidate_search_homepage.png)
![Saved Candidates page](./Assets/13-02-candidate_search_potential_candidates.png)


## Features

- Randomly loads GitHub user profiles with full details
- Accept (+) or reject (–) a candidate
- Saves accepted candidates to localStorage
- Saved candidates view presented in a clean table format
- Skips profiles that are missing required info (e.g., email or bio)
- Uses GitHub token to avoid rate-limiting
- Fully deployed on Render


## Tech Stack

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [GitHub REST API](https://docs.github.com/en/rest)
- [Render](https://render.com/) for deployment


## Installation

1. **Clone the repo:**
   ```bash
   git clone https://github.com/your-username/candidate-search.git
   cd candidate-search
