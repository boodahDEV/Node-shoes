import express, { Application } from "express";
import authRoutes from "./routes/auth";
import morgan from "morgan";


const app: Application = express()

app.use((morgan('dev')));
app.use(express.json());
app.use("/api/auth/",authRoutes);
app.set("port", 3000);



export default app;