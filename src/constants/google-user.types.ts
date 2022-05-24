type GoogleUserName = {
  fullName: string;
  familyName: string;
  givenName: string;
};

type GoogleValue = string | boolean | number | null | Object | GoogleValue[];
type GoogleHashFunctions = "SHA-256" | "SHA-512" | "DES" | "MD5";

export type NewGoogleUser = {
  id: string;
  primaryEmail: string;
  password: GoogleValue;
  hashFunction: GoogleHashFunctions;
  suspended: boolean;
  changePasswordAtNextLogin: boolean;
  ipWhitelisted: boolean;
  name: GoogleUserName;
  emails: GoogleValue;
  externalIds: GoogleValue;
  relations: GoogleValue;
  addresses: GoogleValue;
  organizations: GoogleValue;
  phones: GoogleValue;
  languages: GoogleValue;
  posixAccounts: GoogleValue;
  sshPublicKeys: GoogleValue;
  notes: GoogleValue;
  websites: GoogleValue;
  locations: GoogleValue;
  includeInGlobalAddressList: boolean;
  keywords: GoogleValue;
  gender: GoogleValue;
  ims: GoogleValue;
  customSchemas: GoogleValue;
  archived: boolean;
  orgUnitPath: string;
  recoveryEmail: string;
  recoveryPhone: string;
};
