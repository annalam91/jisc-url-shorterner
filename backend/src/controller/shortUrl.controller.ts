import { Request, Response } from "express";
import shortUrl from "../models/shortUrl.model";

export async function createShortUrl(req: Request, res: Response) {
    const { destination } = req.body;

    const newURL = await shortUrl.create({ destination });

    return res.send(newURL);
}

export async function handleRedirect(req: Request, res: Response) {
    const { shortId } = req.params
    // Lean makes the queries faster and less memory intensive.
    // Will result in giving you Plain Old JavaScript Objects (POJOs) not mongoose documents.
    const short = await shortUrl.findOne({ shortId }).lean();

    if (!short) {
        return res.sendStatus(404)
    }

    return res.redirect(short.destination)
};