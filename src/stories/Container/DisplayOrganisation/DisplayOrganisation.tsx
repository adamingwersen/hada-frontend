import React from "react";

import { useGetOrganisationByIdQuery } from "../../../GraphQL/generated";

export const DisplayOrganisation = () => {
  const id = "6288a83d4cf7d03a5becceb3"; // _id of existing org
  const { data, loading, error } = useGetOrganisationByIdQuery({
    variables: { id },
  });

  if (loading || !data) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  const { name, industryType, planTier } = data?.findOrganisationById;

  return (
    <div>
      <p>Organisation name: {name}</p>
      <p>Organisation industry: {industryType}</p>
      <p>Organisation plan: {planTier}</p>
    </div>
  );
};
