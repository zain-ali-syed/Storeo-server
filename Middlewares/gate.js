
const gateMiddleware = (req, res, next) => {
  const { user } = req.body;
  // Determine if the request comes from admin or user
  const reqFromAdmin = req.originalUrl.includes('/admin');
  if (reqFromAdmin && user.role === 1) {
    next();
  } else if (!reqFromAdmin) {
    next();
  } else {
    res
      .status(401)
      .end();
  }
};

export default gateMiddleware;
