require("reflect-metadata");
const dotenv = require("dotenv");
dotenv.config();
const app = require("./index.js");
const { AppDataSource } = require("./data-source.js");

dotenv.config();

const PORT = process.env.PORT || 5000;

async function bootstrap() {
  try {
    if (!AppDataSource.isInitialized) {
      await AppDataSource.initialize();
      console.log("Database connected");
      console.log(
        "Loaded entities:",
        AppDataSource.entityMetadatas.map((m) => m.name)
      );
    }

    app.listen(PORT, () => {
      console.log(`Backend đang chạy tại: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Lỗi kết nối DB:", error);
    process.exit(1);
  }
}

bootstrap();
