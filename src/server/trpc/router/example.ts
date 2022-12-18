import { login, type Status } from "masto";
import { z } from "zod";
import { env } from "../../../env/server.mjs";

import { router, publicProcedure } from "../trpc";

export const exampleRouter = router({
  getMastoPosts: publicProcedure
    .query(async () => {
      const masto = await login({
        url: 'https://hachyderm.io',
        accessToken: env.MASTODON_ACCESS_TOKEN,
      });

      const statuses = masto.accounts.iterateStatuses(env.MASTODON_ACCOUNT_ID, {});

      const data = await statuses.next({ limit: 5 });
      const val = data.value as Status[];

      return { statuses: val };
    }),

  hello: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    }),
});
