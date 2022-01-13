/**
 * issuesFormatHelper used to format the issues response from the graphql
 * server
 * 
 * @param issues 
 * @returns 
 */
export const issuesFormatHelper = (issues: any) => {
  console.log(issues, "issues");
  return issues.filter((item: any) => item?.__typename === "Issue");
};
