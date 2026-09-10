import { ensurePortfolioScreenshots } from "../src/lib/portfolio/ensure-screenshots";

ensurePortfolioScreenshots().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
