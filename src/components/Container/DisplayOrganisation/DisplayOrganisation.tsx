import React from "react";

import { Table } from "@mantine/core";

import { CookieCollection, useGetCookiesByOrgIdQuery } from "../../../GraphQL/generated";

export const DisplayOrganisation = () => {
  const orgId = "6288a83d4cf7d03a5becceb3"; // _id of existing org

  const { data, loading, error } = useGetCookiesByOrgIdQuery({
    variables: { orgId },
  });

  if (loading || !data) return <p>Loading...</p>;
  if (error) return <p>Error...</p>;

  const cookieCollections = data?.getCookiesByOrgId;

  if (!cookieCollections || cookieCollections.length < 1)
    return <p>No cookie collections found</p>;

  const generateCookieRows = (
    cookieCollections: Partial<CookieCollection>[]
  ) => {
    console.log({ cookieCollections });
    return cookieCollections.map((cookie) => (
      <tr key={cookie.domain}>
        <td>{cookie.domain}</td>
        <td>{cookie.email}</td>
        <td>{cookie.orgId}</td>
      </tr>
    ));
  };

  const generatedCookieRows = generateCookieRows(cookieCollections);

  return (
    <Table>
      <thead>
        <tr>
          <th>domain</th>
          <th>email</th>
          <th>orgId</th>
        </tr>
      </thead>
      <tbody>{generatedCookieRows}</tbody>
    </Table>
  );
};
