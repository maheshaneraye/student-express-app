# Student Node.js Express App (CI Demo)

A simple, lightweight Express REST microservice ready for automated CI testing and Docker Hub deployment.

## Features
* **Framework:** Express.js (Node.js 20)
* **Automated Testing:** Jest + Supertest
* **Container:** Production-ready `node:20-alpine` Dockerfile with health checks
* **CI Workflow:** GitHub Actions (`.github/workflows/ci.yml`)

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Run unit tests
npm test

# 3. Start local server
npm start
```

---

## Pushing to Your GitHub Repository

```bash
# Inside sample-projects/node-express-app directory
git init
git add .
git commit -m "feat: initial node express app with CI pipeline"
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPO_NAME>.git
git push -u origin main
```

### Required GitHub Secrets
In your GitHub Repo: `Settings` ➔ `Secrets and variables` ➔ `Actions`
* `DOCKERHUB_USERNAME`: Your Docker Hub username
* `DOCKERHUB_TOKEN`: Your Docker Hub Personal Access Token (PAT)

* test-2
* 
