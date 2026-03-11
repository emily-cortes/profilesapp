import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

// If you have a postConfirmation function defined, it usually looks like this:
// import { postConfirmation } from "../auth/post-confirmation/resource";

const schema = a.schema({
  UserProfile: a
    .model({
      email: a.string().required(),
      profileOwner: a.string(),
    })
    .authorization((allow) => [
      allow.owner(),
    ]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
  },
});