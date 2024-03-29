// @ts-check

import { withAxiom } from 'next-axiom';

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env/server.mjs"));

const config = withAxiom({
  reactStrictMode: true,
  swcMinify: true,
});

export default config;
