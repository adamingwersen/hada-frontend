import { NewGoogleUser } from "../constants/google-user.types";

const CreateGoogleUserURL =
  "https://admin.googleapis.com/admin/directory/v1/users";

export const useCreateGoogleUser = async (
  googleUser: Partial<NewGoogleUser>
) => {
  const response = await fetch(CreateGoogleUserURL, {
    method: "POST",
    body: JSON.stringify(googleUser),
    headers: { "Content-Type": "application/json" },
  });

  return response.json;
};
