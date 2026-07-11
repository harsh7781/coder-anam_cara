# SimpleCalculator

## Brief Description
A lightweight, web‑based calculator built with **HTML**, **CSS**, and **JavaScript**. It provides a clean UI, supports basic arithmetic operations, keyboard shortcuts, and graceful error handling.

---

## Tech Stack
- **HTML5** – Structure and markup
- **CSS3** – Styling and responsive layout
- **JavaScript (ES6)** – Core calculator logic and event handling

---

## Features
- **Basic arithmetic** – addition, subtraction, multiplication, division
- **Clear (C) and Backspace (←)** functions
- **Decimal support**
- **Keyboard shortcuts** – numbers, operators, `Enter` for equals, `Esc` for clear, `Backspace` for delete
- **Live error handling** – displays "Error" for invalid expressions (e.g., division by zero)
- **Responsive design** – works on desktop and mobile browsers

---

## Setup Instructions
1. **Clone the repository**
   ```bash
   git clone https://github.com/your‑username/simple-calculator.git
   cd simple-calculator
   ```
2. **Open the application**
   - Simply open `index.html` in any modern browser.
   - No build step or server is required.
3. **Optional: Run with a live‑server** (useful for hot‑reloading during development)
   ```bash
   # Using npm's live-server package
   npm install -g live-server
   live-server
   ```
   This will serve the project at `http://127.0.0.1:8080` and automatically reload on file changes.

---

## Usage Guide
### Button Layout
| Row | Buttons |
|-----|---------|
| 1 | **C** (clear) • **←** (backspace) • **/** (divide) |
| 2 | **7** • **8** • **9** • **\*** (multiply) |
| 3 | **4** • **5** • **6** • **-** (subtract) |
| 4 | **1** • **2** • **3** • **+** (add) |
| 5 | **0** • **.** (decimal) • **=** (equals) |

### Keyboard Shortcuts
| Key | Action |
|-----|--------|
| `0‑9` | Input digit |
| `+ - * /` | Operator |
| `.` | Decimal point |
| `Enter` | Evaluate (equals) |
| `Esc` | Clear all |
| `Backspace` | Delete last character |

### Error Handling
- Invalid expressions (e.g., `5/0` or malformed input) result in the display showing **"Error"**.
- The calculator automatically resets after an error when the next valid key is pressed.

---

## Contributing
Contributions are welcome! Feel free to:
- Open an issue to discuss bugs or feature ideas.
- Submit a pull request with clear commit messages.
- Follow the existing code style and keep the UI/UX consistent.

---

## License
[MIT License] – *Replace with actual license when decided.*

---

## Screenshots
![Calculator Screenshot](./screenshot.png)  <!-- Replace with an actual screenshot file -->

---

## Live Demo
[View the live demo here](https://your‑username.github.io/simple-calculator)  <!-- Update with the correct URL if hosted -->
