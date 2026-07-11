<div align="center">

# 🤝 Coder Anamcara

### *Your Coder's Soul Friend*

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&pause=1000&color=6C63FF&center=true&vCenter=true&width=600&lines=AI+that+codes+with+you%2C+not+just+for+you;Turning+ideas+into+working+projects...;Plan+%E2%86%92+Architect+%E2%86%92+Code+%E2%86%92+Ship+%F0%9F%9A%80" alt="Typing SVG" />

<br/>

![Python](https://img.shields.io/badge/Python-3.11+-3776AB?style=for-the-badge&logo=python&logoColor=white)
![LangGraph](https://img.shields.io/badge/Built%20with-LangGraph-1C3C3C?style=for-the-badge&logo=chainlink&logoColor=white)
![Groq](https://img.shields.io/badge/Powered%20by-Groq-F55036?style=for-the-badge&logo=lightning&logoColor=white)
![uv](https://img.shields.io/badge/Package%20Manager-uv-DE5FE9?style=for-the-badge&logo=rust&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

<br/>

![Repo Stars](https://img.shields.io/github/stars/yourusername/coder-anamcara?style=social)
![Repo Forks](https://img.shields.io/github/forks/yourusername/coder-anamcara?style=social)

</div>

---

## ✨ What is Coder Anamcara?

> **"Anamcara"** is an old Gaelic term meaning *"soul friend"* — someone who walks beside you, understands your intent, and helps you bring your ideas to life.

**Coder Anamcara** is an AI-powered coding companion built with **[LangGraph](https://github.com/langchain-ai/langgraph)**. It behaves like a small, focused dev team living inside your terminal — one that listens to your natural language request and turns it into a real, working project, file by file, using genuine developer workflows.

No half-baked snippets. No guesswork. Just a soul friend who plans, architects, and codes alongside you. 💫


---

## 🏗️ Architecture

Coder Anamcara works as a coordinated **multi-agent pipeline**, where each agent has a clear role — just like a real engineering team:

| Agent | Role |
|---|---|
| 🧭 **Planner Agent** | Analyzes your request and generates a detailed, structured project plan. |
| 🏛️ **Architect Agent** | Breaks the plan down into concrete engineering tasks, with explicit context for every file. |
| 👨‍💻 **Coder Agent** | Implements each task, writes directly into files, and uses real developer tools — the way a human engineer would. |

```mermaid
flowchart LR
    A["🗣️ Your Request"] --> B["🧭 Planner Agent"]
    B --> C["🏛️ Architect Agent"]
    C --> D["👨‍💻 Coder Agent"]
    D --> E["📁 Working Project"]

    style A fill:#6C63FF,color:#fff
    style B fill:#4CAF50,color:#fff
    style C fill:#FF9800,color:#fff
    style D fill:#03A9F4,color:#fff
    style E fill:#F55036,color:#fff
```

---

## 🚀 Getting Started

### ✅ Prerequisites

- Make sure you have **`uv`** installed. Follow the [installation guide](https://docs.astral.sh/uv/getting-started/installation/) if you haven't already.
- Create a **Groq account** and generate your API key from the [Groq Console](https://console.groq.com/keys).

### ⚙️ Installation & Startup

1. **Create and activate a virtual environment**
   ```bash
   uv venv
   source .venv/bin/activate
   ```

2. **Install the dependencies**
   ```bash
   uv pip install -r pyproject.toml
   ```

3. **Set up your environment variables**

   Create a `.env` file and fill in the values shown in `.sample_env`.

4. **Run Coder Anamcara** 🎉
   ```bash
   python main.py
   ```


---

## 🧪 Example Prompts

Try asking your soul friend things like:

- 📝 *"Create a to-do list application using HTML, CSS, and JavaScript."*
- 🧮 *"Create a simple calculator web application."*
- 📰 *"Create a simple blog API in FastAPI with a SQLite database."*

Each prompt kicks off the full **Plan → Architect → Code** pipeline and lands you with a ready-to-run project.

---

## 🗺️ How It Feels to Use

```
You: "Build me a simple notes app with a clean UI"

🧭 Planner   → Drafting project plan...
🏛️ Architect → Breaking plan into file-level tasks...
👨‍💻 Coder    → Writing index.html, style.css, script.js...

✅ Done! Your project is ready in ./output/notes-app
```

---

## 🤝 Contributing

Contributions, ideas, and feedback are always welcome — after all, an *anamcara* grows stronger with good company. Feel free to open an issue or submit a pull request.

## 📜 License

This project is licensed under the **MIT License**.

---

<div align="center">

Made with ❤️ and a lot of ☕ — **Coder Anamcara**, your coder's soul friend.

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&size=16&pause=1500&color=888888&center=true&vCenter=true&width=500&lines=Happy+Coding!+%F0%9F%92%BB;May+your+bugs+be+shallow+and+your+builds+green+%F0%9F%8C%B1" alt="Footer Typing SVG" />

</div>
