const errorHandler = (error, request, response, next) => {
  if (error.status === 401 && error.message === "Unauthorized") {
    const status = 401;
    const message = "Requires authentication";
    const imageUrl = "https://http.cat/401";

    response.status(status).json({ message, imageUrl });
    return;
  }

  if (
    error.status === 401 &&
    error.code === "invalid_token" &&
    error.message === "Permission denied"
  ) {
    const status = 403;
    const message = error.message;
    const imageUrl = "https://http.cat/403";

    response.status(status).json({ message, imageUrl });
    return;
  }

  const status = error.statusCode || error.code || 500;
  const message = error.message || "internal error";
  const imageUrl = "https://http.cat/500";

  response.status(status).json({ message, imageUrl });
};

module.exports = {
  errorHandler,
};
