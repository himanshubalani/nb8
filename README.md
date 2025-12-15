# NB8 - NeoBrutal UI Component Library

[![License](https://img.shields.io/badge/license-GNUPublic-blue.svg)](LICENSE)

This is my submission for [AI Agents Assemble Hackathon by WeMakeDevs.](https://www.wemakedevs.org/hackathons/assemblehack25)

> [!NOTE] 
> **For Judges**
> 
> I plan to continue developing this project beyond the hackathon. At the time of submission, the package was **not published to npm**, so it needs to be run locally.  
I’ve added the local development instructions to the README **after submission**.  
For judging purposes, you can refer to this [commit](https://github.com/himanshubalani/nb8/tree/e7ccc57839744cd6b2a35eba1022a2ffb8ecd043), which represents the **final PR before the submission deadline**.
 
---
NB8 is a React component library that loosely follows the rules of neobrutalism design. Components as seem in [himanshubalani.com](https://himanshubalani.com). Built with TypeScript and styled with neobrutalism principles, it provides a set of reusable UI components that can be easily integrated into your projects.

As seen on [himanshubalani.com](https://himanshubalani.com).

## Features

- **Neobrutalist Design**: Bold colors, thick borders, and geometric shapes
- **TypeScript Support**: Full type safety and IntelliSense
- **Easy CLI Installation**: Simple command-line tool for adding components
- **Modular Architecture**: Import only what you need
- **Responsive Design**: Components that work across all devices
- **Zero Dependencies**: Lightweight with minimal external dependencies
- **Customizable**: Easy to theme and extend

## Installation

Since the package hasn't been published to npm yet, follow these steps for local installation:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/himanshubalani/nb8.git
   cd nb8
   ```

2. **Build the package:**
   ```bash
   npm run build
   ```

3. **Link the package globally:**
   ```bash
   npm link
   ```

4. **Navigate to your project:**
   ```bash
   cd /path/to/your/project
   ```

5. **Link NB8 to your project:**
   ```bash
   npm link nb8
   ```

6. **Initialize NB8 in your project:**
   ```bash
   npx nb8 init
   ```

7. **Add components:**
   ```bash
   npx nb8 add button
   npx nb8 add box
   # Add any component you need
   ```

## Usage

### CLI Commands

- `npx nb8 init` - Initialize NB8 in your project
- `npx nb8 add <component-name>` - Add a specific component to your project

### Available Components

- **AnchorButton** - Styled anchor tag button
- **Badge** - Small status indicator
- **Box** - Basic container component
- **Button** - Primary button component
- **CodeBlock** - Syntax-highlighted code display
- **Polaroid** - Photo frame styled component
- **ProgressBar** - Visual progress indicator
- **ProjectCard** - Card for displaying project information
- **Sidebar** - Navigation sidebar component
- **SimpleCard** - Basic card component

### Example Usage

```tsx
import { Button, Box } from './nb8/components';

function App() {
  return (
    <Box>
      <Button onClick={() => console.log('Clicked!')}>
        Click Me!
      </Button>
    </Box>
  );
}
```

## Documentation

For detailed documentation and component demos, visit the [docs page](https://nb8.vercel.app) or run the development server in project:

```bash
npm run dev
```

## Design Philosophy

NB8 loosely follows neobrutalism principles:
- Bold, high-contrast colors
- Thick, black borders
- Geometric shapes and angular designs
- Minimalist yet aggressive aesthetics
- Decorative yet functional

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the GNU GPLv3 - see the [LICENSE](LICENSE) file for details.

## Author

**Himanshu Balani**
- Website: [himanshubalani.com](https://himanshubalani.com)
- GitHub: [@himanshubalani](https://github.com/himanshubalani)

## Acknowledgments

- This project was created as a submission for the [AI Agents Assemble Hackathon by WeMakeDevs](https://www.wemakedevs.org/hackathons/assemblehack25)
- Inspired by neobrutalist design principles
