# 📚 Project README

## 🚀 Project Overview
This repository contains a **TypeScript gRPC API** built with **ts-node** and **Dockerized** for easy deployment. The project includes **mock responses** for services like **Player**, **Bird**, and **Roost** and uses **Kreya** for ad-hoc testing.

## 📂 Project Structure
```
birdstory-api/
├── Dockerfile               # Docker instructions for your API
├── docker-compose.yml       # Docker Compose config for local multi-container setup
├── package.json             # Node.js project metadata
├── tsconfig.json            # TypeScript config
├── src/
│   ├── index.ts             # Main entry point of your API server
│   ├── proto/               # Proto files
│   │   ├── player.proto
│   │   ├── bird.proto
│   │   └── roost.proto
│   ├── services/            # TypeScript service implementations
│   │   ├── player.service.ts
│   │   ├── bird.service.ts
│   │   └── roost.service.ts
│   └── generated/           # Generated TypeScript files from proto
└── .env                     # (Optional) Environment variables for your Docker setup
```

## 🧩 Technology Stack
- **Language**: TypeScript
- **gRPC Framework**: `@grpc/grpc-js`
- **Proto Generation**: `grpc_tools_node_protoc`
- **Development Runtime**: `ts-node`
- **Docker**: Docker + Docker Compose
- **Testing Tool**: Kreya

## 🛠 Setup Instructions
### 🔧 Prerequisites
- Node.js v22.x
- Docker Desktop

### 🚀 Run the Project
```bash
git clone https://github.com/yourusername/yourrepo.git
cd yourrepo
npm install
npm run proto:gen
npm run build
npm run start
```

### 🐳 Run with Docker
```bash
docker-compose build
docker-compose up
```

## 🤖 Testing with Kreya
1. **Open Kreya**.
2. **Create a new project**.
3. **Import your `.proto` files** from the `proto` directory.
4. **Set the gRPC endpoint** to:
   ```
   http://localhost:50051
   ```
5. **Test your gRPC services**.

## 📜 License
This project is licensed under the MIT License. See the **LICENSE** file for details.

