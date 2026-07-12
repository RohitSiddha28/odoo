const jwt = require("jsonwebtoken");

exports.protect = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({
            success: false,
            message: "Not Authorized"
        });
    }

    const token = authHeader.split(" ")[1];

    try {

        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        req.user = decoded;

        next();

    } catch (err) {

        return res.status(401).json({
            success: false,
            message: "Invalid Token"
        });

    }

};

exports.authorize = (...roles) => {

    return (req, res, next) => {

        if (!req.user || !req.user.role) {
            return res.status(401).json({
                success: false,
                message: "Not Authorized"
            });
        }

        if (!roles.includes(req.user.role)) {
            return res.status(403).json({
                success: false,
                message: "Access Denied"
            });
        }

        next();

    };

};
