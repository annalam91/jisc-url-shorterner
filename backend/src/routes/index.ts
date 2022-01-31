import { Express, request, response } from 'express';
import { createShortUrl, handleRedirect } from "../controller/shortUrl.controller";
import validateDestination from "../middleware/validateDestination";
import shortUrlSchema from "../schemas/shortUrlSchema";

function routes(app: Express) {

    app.post('/api/url', validateDestination(shortUrlSchema), createShortUrl);

    app.get("/:shortId", handleRedirect)

}

export default routes;