import { type PostConfirmationTriggerHandler } from "aws-lambda";
// @ts-ignore - This will resolve once the sandbox runs successfully
import { env } from "$amplify/env/post-confirmation";

export const handler: PostConfirmationTriggerHandler = async (event) => {
  console.log("Post Confirmation Event Received:", JSON.stringify(event, null, 2));

  // Example: Printing the user who just signed up
  const { userName } = event;
  const { email } = event.request.userAttributes;

  console.log(`User ${userName} confirmed with email ${email}`);

  // Return the event to Cognito so the flow can complete
  return event;
};