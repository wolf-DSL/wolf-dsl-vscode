# Wolf DSL VSCode Extension

[![Visual Studio Marketplace](https://img.shields.io/badge/Visual%20Studio%20Marketplace-Wolf%20DSL-blue)](https://marketplace.visualstudio.com/)
[![License: EPL-1.0](https://img.shields.io/badge/License-EPL%201.0-yellow.svg)](LICENSE.txt)

A powerful Visual Studio Code extension for the Wolf DSL (Domain Specific Language) that provides comprehensive language support including syntax highlighting, IntelliSense, error checking, and more.

## Features

- **Syntax Highlighting**: Rich syntax highlighting for Wolf DSL files (`.flow`)
- **Language Server Integration**: Advanced language features powered by Xtext language server
- **IntelliSense**: Intelligent code completion and suggestions
- **Error Detection**: Real-time syntax and semantic error checking
- **Code Navigation**: Go-to-definition and symbol search capabilities
- **Bracket Matching**: Automatic bracket completion and matching

## Installation

### From VS Code Marketplace

1. Open Visual Studio Code
2. Go to the Extensions view (`Ctrl+Shift+X` / `Cmd+Shift+X`)
3. Search for "Wolf DSL"
4. Click **Install**

### Manual Installation

1. Download the latest `.vsix` file from the [Releases](../../releases) page
2. Open VS Code
3. Run `Extensions: Install from VSIX...` from the Command Palette (`Ctrl+Shift+P` / `Cmd+Shift+P`)
4. Select the downloaded `.vsix` file

## Usage

1. Create a new file with the `.flow` extension
2. Start writing your Wolf DSL code
3. The extension will automatically provide syntax highlighting and language features

### Example Wolf DSL Code

```wolf
Schema UserSchema {
    string name
    number age
    boolean active
}

Service UserService input UserSchema method POST output UserSchema { 
   Url -> "someURL"
   Path -> ${"/some/path"}
   Timeout -> ${1000}
   Retry -> ${1}  
   @PathParam pathparam1 -> "abc"
   @Query  queryparam1-> "someparam"
   @Body -> ${body}
}
```

## Language Features

The Wolf DSL supports the following language constructs:

- **Schema**: Define data structures with typed fields
- **Service**: Define service operations with input/output schemas
- **Mapping**: Transform data between different schemas
- **Flow**: Define workflow transitions and business logic
- **GraphQL Integration**: Built-in support for GraphQL services

### Keywords

- `Schema`, `Service`, `Mapping`, `Flow`
- `value`, `input`, `output`
- `Start`, `transition`
- `string`, `boolean`, `number`
- `GraphQLService`, `graphqlQuery`

## Requirements

- Visual Studio Code 1.67.1 or higher
- Java Runtime Environment (JRE) for the language server

## Configuration

The extension can be configured through VS Code settings:

```json
{
  "wolf-dsl.languageServer.enabled": true,
  "wolf-dsl.syntaxHighlighting.enabled": true
}
```

## Development

### Prerequisites

- Node.js (14.x or higher)
- npm or yarn
- TypeScript
- Java Development Kit (JDK) for building the language server

### Building from Source

1. Clone the repository:
   ```bash
   git clone https://github.com/wolf-DSL/wolf-dsl-vscode.git
   cd wolf-dsl-vscode
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Compile the TypeScript code:
   ```bash
   npm run compile
   ```

4. Package the extension:
   ```bash
   vsce package
   ```

### Running in Development

1. Open the project in VS Code
2. Press `F5` to start debugging
3. This will launch a new VS Code window with the extension loaded

### Testing

Run the test suite:
```bash
npm test
```

## Contributing

We welcome contributions to the Wolf DSL VS Code extension! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

### Ways to Contribute

- 🐛 Report bugs and issues
- 💡 Suggest new features
- 📝 Improve documentation
- 🔧 Submit pull requests

### Development Setup

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and add tests
4. Ensure all tests pass: `npm test`
5. Submit a pull request

## Architecture

The extension consists of:

- **Language Client** (TypeScript): Handles VS Code integration
- **Language Server** (Java/Xtext): Provides language analysis and features
- **Grammar Definition** (TextMate): Syntax highlighting rules
- **Configuration Files** (JSON): Language and editor settings

## Troubleshooting

### Common Issues

**Extension not activating**
- Ensure you have Java 11 or later installed and accessible in your PATH
- Check the VS Code Output panel for error messages
- See [TROUBLESHOOTING.md](TROUBLESHOOTING.md) for detailed diagnostics

**Syntax highlighting not working**
- Verify the file has a `.flow` extension
- Try restarting VS Code

**Language server not starting**
- Check Java installation: `java -version` (requires Java 11+)
- Review the VS Code Developer Tools console for errors
- **Important:** The language server JAR must have a proper Main-Class manifest attribute
- See [TROUBLESHOOTING.md](TROUBLESHOOTING.md) for detailed solutions

**"no main manifest attribute" error**
- This indicates the language server JAR needs to be rebuilt with LSP launcher
- See [TROUBLESHOOTING.md](TROUBLESHOOTING.md#critical-issue-language-server-jar-configuration) for complete solution

### Getting Help

- Check the [TROUBLESHOOTING.md](TROUBLESHOOTING.md) guide for detailed solutions
- Check the [Issues](../../issues) page for known problems
- Create a new issue with detailed information about your problem
- Include VS Code version, operating system, Java version, and error messages

## License

This project is licensed under the Eclipse Public License 1.0 - see the [LICENSE.txt](LICENSE.txt) file for details.

## Acknowledgments

- Built with [Xtext](https://www.eclipse.org/Xtext/) language development framework
- Powered by the [Language Server Protocol](https://microsoft.github.io/language-server-protocol/)
- Inspired by modern DSL development practices

## Changelog

See [CHANGELOG.md](CHANGELOG.md) for a detailed history of changes.

---

**Enjoy coding with Wolf DSL!** 🐺