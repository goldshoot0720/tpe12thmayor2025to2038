# 使用 Node 18 LTS
FROM node:18-alpine

# 設定工作目錄
WORKDIR /app

# 安裝依賴
COPY package*.json ./
RUN npm install --production

# 複製程式碼
COPY . .

# 建置 Next.js
RUN npm run build

# 設定環境變數
ENV NODE_ENV=production
ENV PORT=80

# 開放 80 埠
EXPOSE 80

# 啟動 Next.js
CMD ["npm", "start"]
