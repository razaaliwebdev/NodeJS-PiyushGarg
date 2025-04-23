import URL from "../models/urlModel.js";
import shortid from 'shortid';

export const handleGenerateNewShorUrl = async (req, res) => {
    try {
        const { url } = req.body;
        if (!url) {
            return res.status(400).json({ error: "url is required" });
        };
        const shortId = shortid(8);
        const newUrl = await URL.create({
            shortId: shortId,
            redirectURL: url,
            visitedHistory: [],
        });

        return res.status(200).json({ id: shortId, newUrl });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error:", error });
    };
};


export const getUrl = async (req, res) => {
    try {
        const shortId = req.params.shortId;

        const entry = await URL.findOneAndUpdate(
            { shortId },
            {
                $push: {
                    visitedHistory: { timestamp: Date.now() },
                },
            },
            { new: true } // optional: return updated doc if needed
        );

        if (!entry) {
            return res.status(404).json({ message: "Short URL not found" });
        }

        return res.redirect(entry.redirectURL);
    } catch (error) {
        return res
            .status(500)
            .json({ message: "Internal server error", error: error.message });
    }
};

export const urlAnalysis = async (req, res) => {
    try {
        const shortId = req.params.shortId;
        const result = await URL.findOne({ shortId });

        return res.status(200).json({ totalClicks: result.visitHistory.length });
    } catch (error) {
        return res.status(500).json({ message: "Internal server error", error });
    };
};

