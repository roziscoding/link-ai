import { NuxtAuthHandler } from "#auth";
import GithubProvider from "next-auth/providers/github";

const config = useRuntimeConfig();

export default NuxtAuthHandler({
  secret: config.authSecret,
  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR. May be fixed via Vite at some point
    GithubProvider.default({
      clientId: config.authGithubId,
      clientSecret: config.authGithubSecret,
    }),
  ],
});
