import boom from "@hapi/boom";

export function checkApiKey(req, res, next) {
  console.log("123");
  const api = req.headers["api"];
  if (api === "123") {
    next();
  } else {
    next(boom.unauthorized());
  }
}
