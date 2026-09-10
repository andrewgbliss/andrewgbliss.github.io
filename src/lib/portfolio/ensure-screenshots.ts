import fs from "node:fs/promises";
import path from "node:path";
import { mainPortfolio } from "./main_portfolio";

const VIEWPORT = { width: 1280, height: 720 } as const;
const GOTO_TIMEOUT_MS = 45_000;
const SETTLE_MS = 1_500;

function toPublicPath(image: string) {
  return path.join(process.cwd(), "public", image.replace(/^\/+/, ""));
}

async function fileExists(filePath: string) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function captureMissingScreenshots() {
  const missing = [];

  for (const project of mainPortfolio.projects) {
    const imagePath = toPublicPath(project.image);
    if (await fileExists(imagePath)) {
      continue;
    }
    missing.push({ url: project.url, imagePath, name: project.name });
  }

  if (missing.length === 0) {
    return;
  }

  let chromium: typeof import("playwright").chromium;
  try {
    ({ chromium } = await import("playwright"));
  } catch (error) {
    console.warn(
      "Playwright is not installed; skipping portfolio screenshots.",
      error,
    );
    return;
  }

  let browser: Awaited<ReturnType<typeof chromium.launch>> | undefined;
  try {
    browser = await chromium.launch({ headless: true });
  } catch (error) {
    console.warn(
      "Could not launch Chromium for portfolio screenshots. Run `npx playwright install chromium`.",
      error,
    );
    return;
  }

  try {
    for (const project of missing) {
      await fs.mkdir(path.dirname(project.imagePath), { recursive: true });
      const page = await browser.newPage({
        viewport: VIEWPORT,
        userAgent:
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
      });
      try {
        await page.goto(project.url, {
          waitUntil: "load",
          timeout: GOTO_TIMEOUT_MS,
        });
        await delay(SETTLE_MS);
        await page.screenshot({
          path: project.imagePath,
          type: "png",
        });
        console.log(`Saved portfolio screenshot: ${project.imagePath}`);
      } catch (error) {
        console.warn(`Failed to screenshot ${project.name} (${project.url})`, error);
      } finally {
        await page.close();
      }
    }
  } finally {
    await browser.close();
  }
}

let inFlight: Promise<void> | null = null;

export function ensurePortfolioScreenshots() {
  if (!inFlight) {
    inFlight = captureMissingScreenshots().finally(() => {
      inFlight = null;
    });
  }
  return inFlight;
}
