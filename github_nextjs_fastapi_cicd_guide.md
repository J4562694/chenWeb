# Next.js (SSG) + FastAPI + GitHub Actions CI/CD 架構指南

本指南專為使用 **Next.js** 作為前端、**FastAPI** 作為後端，並透過 **GitHub Actions** 實作 CI/CD 自動化部署的開發者所設計。你可以將此 Markdown 文件直接提供給 AI Coding Assistant（如 Claude, ChatGPT, GitHub Copilot）作為專案開發與 CI/CD 設定的標準規範。

---

## 專案架構概覽 (Architecture Overview)

```
├── .github/
│   └── workflows/
│       ├── frontend-cicd.yml   # Next.js 靜態建置與 GitHub Pages 部署
│       └── backend-cicd.yml    # FastAPI 自動化測試與部署 Webhook/Docker
├── frontend/                   # Next.js 前端專案 (SSG Mode)
│   ├── src/
│   │   ├── app/
│   │   └── components/
│   ├── public/
│   ├── next.config.js          # output: 'export'
│   └── package.json
└── backend/                    # FastAPI 後端專案
    ├── app/
    │   ├── main.py
    │   ├── api/
    │   └── core/
    ├── tests/                  # Pytest 單元與整合測試
    ├── Dockerfile
    └── requirements.txt
```

---

## 一、 前端：Next.js (SSG 模式)

由於 GitHub Pages 為靜態託管環境，Next.js 必須設定為 **Static Site Generation (SSG)** 匯出。

### 1. `frontend/next.config.js` 設定
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',          // 啟用靜態匯出 (輸出至 /out 目錄)
  images: {
    unoptimized: true,       // 禁用動態圖片最佳化 (GitHub Pages 不支援 Node Server)
  },
  // 若部署於子目錄 (<username>.github.io/<repo-name>)，請開啟下列設定：
  // basePath: process.env.NODE_ENV === 'production' ? '/<repo-name>' : '',
};

module.exports = nextConfig;
```

### 2. 環境變數整合
在 `frontend/.env.production` 或 CI Pipeline 注入：
```env
NEXT_PUBLIC_API_URL=https://your-fastapi-backend.onrender.com
```

---

## 二、 後端：FastAPI 與 CORS 設定

後端需處理來自 GitHub Pages 前端網域的跨來源資源共享 (CORS) 請求。

### 1. `backend/app/main.py`
```python
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os

app = FastAPI(
    title="Web Application API",
    version="1.0.0"
)

# 取得允許的前端來源目錄
origins = [
    "http://localhost:3000",
    os.getenv("FRONTEND_URL", "https://<your-github-username>.github.io"),
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
def health_check():
    return {"status": "healthy", "service": "FastAPI Backend"}
```

---

## 三、 CI/CD 自動化工作流 (GitHub Actions)

### 1. 前端 CI/CD (`.github/workflows/frontend-cicd.yml`)

```yaml
name: Frontend CI/CD - Next.js to GitHub Pages

on:
  push:
    branches: ["main"]
    paths:
      - "frontend/**"
      - ".github/workflows/frontend-cicd.yml"

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build-and-deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: ./frontend
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
          cache-dependency-path: './frontend/package-lock.json'

      - name: Install Dependencies
        run: npm ci

      - name: Build Next.js Static Site
        env:
          NEXT_PUBLIC_API_URL: ${{ secrets.NEXT_PUBLIC_API_URL }}
        run: npm run build

      - name: Upload Artifacts
        uses: actions/upload-pages-artifact@v3
        with:
          path: './frontend/out'

      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

---

### 2. 後端 CI/CD (`.github/workflows/backend-cicd.yml`)

包含 Pytest 自動測試與部署 Webhook（以 Render/Fly.io 為例）。

```yaml
name: Backend CI/CD - FastAPI Test & Deploy

on:
  push:
    branches: ["main"]
    paths:
      - "backend/**"
      - ".github/workflows/backend-cicd.yml"

jobs:
  test:
    name: Run Pytest Suite
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: ./backend
    steps:
      - name: Checkout Code
        uses: actions/checkout@v4

      - name: Setup Python
        uses: actions/setup-python@v5
        with:
          python-version: '3.11'
          cache: 'pip'

      - name: Install Dependencies
        run: |
          python -m pip install --upgrade pip
          pip install -r requirements.txt
          pip install pytest httpx

      - name: Run Tests
        run: pytest

  deploy:
    name: Trigger Deployment
    needs: test
    runs-on: ubuntu-latest
    steps:
      - name: Trigger Service Webhook
        run: |
          curl -X POST "${{ secrets.RENDER_DEPLOY_HOOK }}"
```

---

## 四、 給 AI Agent 的提示詞模板 (Prompts for AI)

在開發時，你可以將以下 Prompt 直接貼給 AI，讓它遵循本文件的架構規範產生程式碼：

### Prompt 範例：新增 API 與前端對接
> 「請參考現有的架構規範，幫我在 FastAPI 後端（`backend/app/api/`）新增一個 POST `/api/v1/data` 介面，並撰寫對應的 pytest 單元測試。同時，在 Next.js 前端（`frontend/src/app/`）建立一個對應的 Form 組件，使用 `fetch` / `axios` 呼叫該介面，並確保靜態匯出（SSG）時不會發生 Server-side runtime 錯誤。」

---

## 五、 GitHub 設定清單

1. **GitHub Repository Settings**:
   - `Settings` -> `Pages` -> **Source** 選擇 **`GitHub Actions`**。
2. **Secrets and Variables** (`Settings` -> `Secrets and variables` -> `Actions`):
   - `NEXT_PUBLIC_API_URL`: 後端 API 正式環境網址。
   - `RENDER_DEPLOY_HOOK`: 後端部署平台的 Webhook URL。
