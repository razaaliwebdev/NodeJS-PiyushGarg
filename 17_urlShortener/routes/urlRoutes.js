import express from 'express';
import { getUrl, handleGenerateNewShorUrl, urlAnalysis } from '../controllers/urlControllers.js';

const urlRouter = express.Router();

// Generate short
urlRouter.post("/", handleGenerateNewShorUrl);

urlRouter.get("/:shortId", getUrl);

// Analytics URL
urlRouter.get("/analysis/:shortId", urlAnalysis);

export default urlRouter;