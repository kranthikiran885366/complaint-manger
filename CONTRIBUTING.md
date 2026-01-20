# Contributing to Smart Complaint Management System

![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)
![Code of Conduct](https://img.shields.io/badge/code%20of%20conduct-contributor%20covenant-purple.svg?style=flat)

We love your input! We want to make contributing to this project as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## 🚀 Development Process

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

### Pull Requests Process

1. Fork the repo and create your branch from `main`
2. If you've added code that should be tested, add tests
3. If you've changed APIs, update the documentation
4. Ensure the test suite passes
5. Make sure your code lints
6. Issue that pull request!

## 📋 Code Style Guidelines

### JavaScript/React
- Use ES6+ syntax
- Follow functional component patterns with hooks
- Use meaningful variable and function names
- Add comments for complex logic
- Keep components small and focused

### CSS
- Use BEM naming convention where applicable
- Keep selectors specific but not overly nested
- Use CSS variables for colors and common values
- Mobile-first responsive design

### File Organization
```
src/
├── components/     # Reusable UI components
├── pages/          # Page-level components
├── services/       # API and data services
├── styles/         # CSS stylesheets
└── utils/          # Helper functions and constants
```

## 🐛 Bug Reports

**Great Bug Reports** tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening)

## 💡 Feature Requests

Feature requests are welcome! But take a moment to find out whether your idea fits with the scope and aims of the project. Please provide:

- Detailed description of the feature
- Use cases and benefits
- Any implementation ideas (optional)

## 🔧 Development Setup

```bash
# Clone your fork
git clone https://github.com/your-username/complaint-system.git

# Install dependencies
npm install

# Start development server
npm start

# Run tests
npm test

# Build for production
npm run build
```

## 📝 Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types
- **feat**: A new feature
- **fix**: A bug fix
- **docs**: Documentation only changes
- **style**: Changes that don't affect code meaning (formatting, etc.)
- **refactor**: Code change that neither fixes a bug nor adds a feature
- **perf**: Performance improvements
- **test**: Adding missing tests
- **chore**: Changes to build process or auxiliary tools

### Examples
```
feat(citizen): add voice-to-text complaint registration
fix(auth): resolve login redirect issue
docs(readme): update installation instructions
style(dashboard): improve responsive layout
refactor(services): optimize mock data service
```

## 🧪 Testing Guidelines

- Write tests for new features
- Ensure existing tests pass before submitting PR
- Aim for meaningful test coverage
- Test edge cases and error conditions

## 📚 Documentation

- Update README.md if you change functionality
- Add JSDoc comments for public functions
- Update relevant .md files in the docs folder
- Include inline comments for complex logic

## 🔒 Security

If you discover a security vulnerability, please email security@example.com instead of using the issue tracker.

## 📄 License

By contributing, you agree that your contributions will be licensed under the MIT License.

## 🤝 Code of Conduct

### Our Pledge

We pledge to make participation in our project a harassment-free experience for everyone, regardless of:
- Age, body size, disability, ethnicity
- Gender identity and expression
- Level of experience, nationality
- Personal appearance, race, religion
- Sexual identity and orientation

### Our Standards

**Positive behavior includes:**
- Using welcoming and inclusive language
- Being respectful of differing viewpoints
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other members

**Unacceptable behavior includes:**
- Trolling, insulting/derogatory comments, personal attacks
- Public or private harassment
- Publishing others' private information
- Other conduct which could reasonably be considered inappropriate

## 📞 Contact

- Create an issue for bugs/features
- Email: support@example.com
- Discord: [Join our community](#)

## 🎯 Good First Issues

Look for issues labeled with:
- `good first issue` - Great for newcomers
- `help wanted` - Extra attention needed
- `documentation` - Documentation improvements

## 🌟 Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- Project documentation

Thank you for contributing to make this project better! 🚀
