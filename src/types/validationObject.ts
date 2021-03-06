export default interface ValidationObject {
  args: any;
  orgId?: boolean;
  projectId?: boolean;
  issueId?: boolean;
  userId?: boolean;
  integrationId?: boolean;
  filePath?: boolean;
  groupId?: boolean;
  integType?: boolean;
  jobId?: boolean;
  entitlementKey?: boolean;
  artifactId?: boolean;
  packageVersion?: boolean;
  packageName?: boolean;
  gemName?: boolean;
  packageGroupId?: boolean;
  from?: boolean;
  to?: boolean;
  webhookId?: boolean;
}
