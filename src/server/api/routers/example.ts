import { z } from "zod";
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";
import { env } from "~/env.mjs";
import Twitter from "twitter-lite";

const getTweet = async (token: any, id: string) => {
  try {
    console.log("Token : ", token);

    console.log(
      "consumer_key / env.TWITTER_CLIENT_ID :- ",
      env.TWITTER_CLIENT_ID
    );
    console.log(
      "consumer_secret / env.TWITTER_CLIENT_SECRET :- ",
      env.TWITTER_CLIENT_SECRET
    );
    console.log("id :- ", id);

    // const client = new Twitter({
    //   subdomain: "api", // "api" is the default (change for other subdomains)
    //   version: "1.1", //is the default (change for other subdomains)
    //   consumer_key: env.TWITTER_ACCESS_TOKEN, // from Twitter.
    //   consumer_secret: env.TWITTER_ACCESS_SECRET, // from Twitter.
    //   access_token_key: token.accessToken, // from your User (oauth_token)
    //   access_token_secret: token.refreshToken, // from your User (oauth_token_secret)
    // });

    const client = new Twitter({
      subdomain: "api",
      // version: "2",
      // extension: false,
      // OAuth 2.0 Client ID and Client Secret
      // consumer_key: "aEh0cGNXSkUxaGhIQTgwSHk2Qks6MTpjaQ",
      // consumer_secret: "69yEniLN2th27Q6Nq1dzA1XbaETG4akwGkL2eSyAiDYttiFAhM",
      consumer_key: "Tmrraue8rvPwOT5l4ry9mBuN9",
      consumer_secret: "gpPwc2YlDyNF11KgbTdnt5y1JDdirpnb1oC932UgOuxelP0znX",
      access_token_key: "1490584148460728323-uYfX77zKQFpChNIGqMxQhMdNfV5Qsq",
      access_token_secret: "qgCdPbTwfIvQa6X8muhFCdZLEeGPhrUPmlcqzWdK9H6pA",
    });
    // const client = new Twitter({
    //   // subdomain: "api",
    //   version: "2",
    //   extension: false,
    //   // OAuth 2.0 Client ID and Client Secret
    //   // consumer_key: "aEh0cGNXSkUxaGhIQTgwSHk2Qks6MTpjaQ",
    //   // consumer_secret: "69yEniLN2th27Q6Nq1dzA1XbaETG4akwGkL2eSyAiDYttiFAhM",
    //   consumer_key: "Tmrraue8rvPwOT5l4ry9mBuN9",
    //   consumer_secret: "gpPwc2YlDyNF11KgbTdnt5y1JDdirpnb1oC932UgOuxelP0znX",
    //   access_token_key: "1490584148460728323-uYfX77zKQFpChNIGqMxQhMdNfV5Qsq",
    //   access_token_secret: "qgCdPbTwfIvQa6X8muhFCdZLEeGPhrUPmlcqzWdK9H6pA",
    // });
    const data = await client.get("search/tweets", {
      q: "Future",
    });
    console.log(data);
    console.log("--------------");
    console.log(token);

    // const res = await client.getAccessToken({
    //   oauth_verifier: token.refreshToken,
    //   oauth_token: token.accessToken,
    // });
    // console.log("--------------");
    // console.log(res);

    // console.log({
    //   accTkn: res.oauth_token,
    //   accTknSecret: res.oauth_token_secret,
    //   userId: res.user_id,
    //   screenName: res.screen_name,
    // });

    // const app = new Twitter({
    //   subdomain: "api",
    //   consumer_key: env.TWITTER_API_KEY, // from Twitter.
    //   consumer_secret: env.TWITTER_API_SECRET, // from Twitter.
    //   // bearer_token: env.TWITTER_BEARER_TOKEN,
    // });
    // const response = await app.getBearerToken();

    // console.log("response : ", response.access_token);

    // const client = new Twitter({
    //   subdomain: "api",
    //   consumer_key: env.TWITTER_API_KEY, // from Twitter.
    //   consumer_secret: env.TWITTER_API_SECRET, // from T
    //   // bearer_token: env.TWITTER_BEARER_TOKEN,
    //   bearer_token: response.access_token,
    // });

    // const data = await client.get("usernames", {  q: "twitterdev",    });
    console.log(data);
    console.log("jashaghgg");
    return token;
  } catch (error) {
    console.log("This is a error");
    console.log(error);
  }
};

const accessToken =
  "EAADblAgoisoBADA9eQedi0Y0FEeOnsb5RCIXrlsZBXHaBeln55sB5mJXOxYyQW17zzOZAd23dX2ZABU5TuLGlHZCkIfox9D21sZAufBtXThgfZCZAybYCaZBeEqgAvu641sayBi0ZCT9yCFctZCZCsPYaDS4pn2TscxHllD33aZA2b3LjhE1A6gIMWtCHpXslZBXLENWK9IqqLLgGsxHejaAYrmjJW72Pb0OSZBWWrokunuMEm0a7GQjt9TgJO";
const userId = "1937107199983351";

async function checkBully(params: string) {
  const response = await fetch(`http:localhost:5000/cyberbully/${params}`);
  const data = await response.json();

  return data;
}
// Function to retrieve user posts
async function getUserPosts() {
  try {
    const response = await fetch(
      `https://graph.facebook.com/${userId}/posts?access_token=${accessToken}`
    );
    const { data } = await response.json();
    console.log(data);
    // Or perform any further processing on the data
    const filter = data.filter((x: any) => x.message);

    const checktheMesg = await Promise.allSettled(
      filter.map(async (x: any) => {
        if (x.message) {
          const bully = await checkBully(x.message);
          x.bully = bully.code ? true : false;
          return x;
        }
      })
    );
    let result = checktheMesg
      .filter(({ status }) => status === "fulfilled")
      .map((p) => p.value);
    console.log(result);
    return result;

    // Handle the response data
  } catch (error) {
    console.error("Error retrieving user posts:", error);
  }
}

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),

  getFaceBookMessage: protectedProcedure.query(async ({ ctx }) => {
    console.log("################# getTweeterMessage ###############");
    console.log(ctx.session.token);
    let data = await getUserPosts();
    if (!data) {
      data = [];
    }

    return data;
  }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
});
