# 🔁 GitHub Streak Automation with n8n

Maintain your GitHub contribution streak effortlessly — this workflow automatically commits to your GitHub repository **every day at 8:00 PM**, so your green squares never stop growing! 🌱
---

## 🚀 What is This?

This is an **n8n automation workflow** that:

- Runs daily at **8:00 PM**
- Makes a commit to your specified GitHub repository
- Helps you maintain your GitHub streak even on your busiest days!

---

## 📸 Screenshot

> 💡 _Optional: Add a screenshot of the workflow in the n8n editor here_

---

## ⚙️ How It Works

| Node                    | Description                                                              |
| ----------------------- | ------------------------------------------------------------------------ |
| 🕗 **Schedule Trigger** | Triggers the workflow daily at 8:00 PM                                   |
| 🧠 **Set Node**         | Generates a readable date and sets the filename dynamically              |
| 🟢 **GitHub Node**      | Commits or updates a file with a simple message to keep the streak alive |

Each commit updates a file named after the current date, e.g., `2025-05-19.txt`, with a simple message like `Hey`.

---

## 🧰 Requirements

- ✅ [n8n](https://n8n.io/) (self-hosted or cloud)
- ✅ GitHub account
- ✅ GitHub OAuth2 app with:
  - Client ID
  - Client Secret
- ✅ A public or private GitHub repository where commits will be made

---

## 🛠 Setup Guide

### 1. Install n8n

```bash
npm install -g n8n
```
