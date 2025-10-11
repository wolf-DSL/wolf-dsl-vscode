# Contributing to Wolf DSL VS Code Extension

We love your input! We want to make contributing to the Wolf DSL VS Code extension as easy and transparent as possible, whether it's:

- Reporting a bug
- Discussing the current state of the code
- Submitting a fix
- Proposing new features
- Becoming a maintainer

## Development Process

We use GitHub to host code, to track issues and feature requests, as well as accept pull requests.

## Pull Requests

Pull requests are the best way to propose changes to the codebase. We actively welcome your pull requests:

1. Fork the repo and create your branch from `main`.
2. If you've added code that should be tested, add tests.
3. If you've changed APIs, update the documentation.
4. Ensure the test suite passes.
5. Make sure your code lints.
6. Issue that pull request!

## Development Setup

### Prerequisites

- Node.js (14.x or higher)
- npm or yarn
- Visual Studio Code
- Java Development Kit (JDK) 11 or higher

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/wolf-dsl-vscode-extension.git
   cd wolf-dsl-vscode-extension
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Compile TypeScript**
   ```bash
   npm run compile
   ```

4. **Open in VS Code**
   ```bash
   code .
   ```

5. **Launch Extension Host**
   - Press `F5` to launch a new VS Code window with the extension loaded
   - Create a test file with `.flow` extension to test the functionality

### Building the Language Server

If you need to modify the language server:

1. **Build with Gradle**
   ```bash
   ./gradlew build
   ```

2. **The compiled JAR will be in the `src/` directory**

### Testing

#### Running Tests

```bash
npm test
```

#### Manual Testing

1. Create test `.flow` files in the workspace
2. Verify syntax highlighting works
3. Test language server features (if applicable)
4. Check error reporting and diagnostics

### Debugging

#### Extension Development

- Use VS Code's built-in debugging: Press `F5`
- Set breakpoints in TypeScript files
- Use Developer Tools Console for client-side issues

#### Language Server

- Enable server tracing in extension settings
- Check VS Code Output panel for server logs
- Use Java debugging tools if modifying server code

## Code Style

### TypeScript

- Use TypeScript strict mode
- Follow ESLint rules (configured in project)
- Use meaningful variable and function names
- Add JSDoc comments for public APIs

### File Organization

```
src/
├── extension.ts          # Main extension entry point
├── server.sh            # Language server launcher
└── language-server.jar  # Language server implementation

syntaxes/
└── wolf-dsl.tmLanguage.json  # TextMate grammar

```

## Issue Reporting

### Bug Reports

Great bug reports tend to have:

- A quick summary and/or background
- Steps to reproduce
  - Be specific!
  - Give sample code if you can
- What you expected would happen
- What actually happens
- Notes (possibly including why you think this might be happening, or stuff you tried that didn't work)

### Feature Requests

When suggesting a new feature:

- Explain the use case clearly
- Provide examples of how it would work
- Consider backwards compatibility
- Think about performance implications

## Submitting Changes

### Git Workflow

1. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes**
   - Write clear, concise commit messages
   - Keep commits focused on single changes
   - Include tests for new functionality

3. **Test your changes**
   ```bash
   npm run compile
   npm test
   ```

4. **Push and create PR**
   ```bash
   git push origin feature/your-feature-name
   ```

### Commit Messages

- Use the present tense ("Add feature" not "Added feature")
- Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

Example:
```
Add syntax highlighting for wolf queries

- Extend TextMate grammar for query syntax
- Add test cases for query highlighting
- Update documentation

Fixes #123
```

## Code Review Process

1. **All code changes require review**
2. **Maintainers will review within 48-72 hours**
3. **Address feedback promptly**
4. **Squash commits before merging**

### Review Criteria

- Code follows established patterns
- Tests are included and pass
- Documentation is updated
- No breaking changes (or properly documented)
- Performance impact is considered

## Release Process

1. Version bumps follow [Semantic Versioning](https://semver.org/)
2. Update `CHANGELOG.md` with changes
3. Create release notes
4. Package and publish to VS Code Marketplace

## Community Guidelines

### Code of Conduct

This project adheres to a code of conduct. By participating, you are expected to uphold this code.

### Getting Help

- **Documentation**: Check the README and this guide first
- **Issues**: Search existing issues before creating new ones
- **Discussions**: Use GitHub Discussions for questions
- **Direct Contact**: Reach out to maintainers for sensitive issues

## Recognition

Contributors are recognized in:
- Git commit history
- Release notes
- Project README (for significant contributions)

## License

By contributing, you agree that your contributions will be licensed under the same license as the project (EPL-1.0).

---

Thank you for contributing to Wolf DSL! 🐺
