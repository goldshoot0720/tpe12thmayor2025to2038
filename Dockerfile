# 使用 Node 18 Alpine 作為 base image
FROM node:18-alpine AS builder

# 設定工作目錄
WORKDIR /app

# 複製 package.json 和 package-lock.json
COPY package*.json ./

# 安裝所有依賴 (包含 devDependencies)
RUN npm install

# 複製全部專案檔案
COPY . .

# 建置 Next.js
RUN npm run build

# ----------------------------------------
# 建立正式運行環境
FROM node:18-alpine AS runner

WORKDIR /app

# 只複製 package.json 和 package-lock.json
COPY package*.json ./

# 安裝 production 依賴
RUN npm install --omit=dev

# 複製 build 後的檔案
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./next.config.js
COPY --from=builder /app/package.json ./package.json

# 設定環境變數
ENV NODE_ENV=production

# 開放 80 port
EXPOSE 80

# 啟動 Next.js
CMD ["npm", "start"]
