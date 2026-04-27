import express from "express";
import { routes } from "../src/routes/index.js";
import { errorHandler } from "../src/middlewares/error-handler.js";
import { env } from "./env.js";
import helmet from "helmet";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (env.NODE_ENV !== "production") {
  app.use((req, _res, next) => {
    // Minimal request logger for local dev.
    // eslint-disable-next-line no-console
    console.log(`${req.method} ${req.url}`);
    next();
  });
}

// CORS Configuration
const corsOptions = {
  origin: env.NODE_ENV === "production" ? ["https://yourdomain.com"] : true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
  credentials: true,
};

app.use(cors(corsOptions));

app.use(
  helmet({
    crossOriginResourcePolicy: { policy: "cross-origin" },
    crossOriginEmbedderPolicy: { policy: "credentialless" },
    crossOriginOpenerPolicy: { policy: "same-origin" },
    xContentTypeOptions: true,
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", (req, res) => `'nonce-${(res as any).locals.cspNonce}'`],
        styleSrc: ["'self'"],
        objectSrc: ["'none'"],
        imgSrc: ["'self'", "data:"],
        scriptSrcAttr: ["'none'"],
        upgradeInsecureRequests: [],
      },
    },
    hsts: {},
    frameguard: { action: "deny" },
    referrerPolicy: { policy: "same-origin" },
    permittedCrossDomainPolicies: { permittedPolicies: "none" },
  }),
);

app.use("/api", routes);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use(errorHandler);

export default app;
