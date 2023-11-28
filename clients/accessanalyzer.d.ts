import {Request} from '../lib/request';
import {Response} from '../lib/response';
import {AWSError} from '../lib/error';
import {Service} from '../lib/service';
import {ServiceConfigurationOptions} from '../lib/service';
import {ConfigBase as Config} from '../lib/config-base';
interface Blob {}
declare class AccessAnalyzer extends Service {
  /**
   * Constructs a service object. This object has one method for each API operation.
   */
  constructor(options?: AccessAnalyzer.Types.ClientConfiguration)
  config: Config & AccessAnalyzer.Types.ClientConfiguration;
  /**
   * Retroactively applies the archive rule to existing findings that meet the archive rule criteria.
   */
  applyArchiveRule(params: AccessAnalyzer.Types.ApplyArchiveRuleRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Retroactively applies the archive rule to existing findings that meet the archive rule criteria.
   */
  applyArchiveRule(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Cancels the requested policy generation.
   */
  cancelPolicyGeneration(params: AccessAnalyzer.Types.CancelPolicyGenerationRequest, callback?: (err: AWSError, data: AccessAnalyzer.Types.CancelPolicyGenerationResponse) => void): Request<AccessAnalyzer.Types.CancelPolicyGenerationResponse, AWSError>;
  /**
   * Cancels the requested policy generation.
   */
  cancelPolicyGeneration(callback?: (err: AWSError, data: AccessAnalyzer.Types.CancelPolicyGenerationResponse) => void): Request<AccessAnalyzer.Types.CancelPolicyGenerationResponse, AWSError>;
  /**
   * Checks whether the specified access isn't allowed by a policy.
   */
  checkAccessNotGranted(params: AccessAnalyzer.Types.CheckAccessNotGrantedRequest, callback?: (err: AWSError, data: AccessAnalyzer.Types.CheckAccessNotGrantedResponse) => void): Request<AccessAnalyzer.Types.CheckAccessNotGrantedResponse, AWSError>;
  /**
   * Checks whether the specified access isn't allowed by a policy.
   */
  checkAccessNotGranted(callback?: (err: AWSError, data: AccessAnalyzer.Types.CheckAccessNotGrantedResponse) => void): Request<AccessAnalyzer.Types.CheckAccessNotGrantedResponse, AWSError>;
  /**
   * Checks whether new access is allowed for an updated policy when compared to the existing policy. You can find examples for reference policies and learn how to set up and run a custom policy check for new access in the IAM Access Analyzer custom policy checks samples repository on GitHub. The reference policies in this repository are meant to be passed to the existingPolicyDocument request parameter.
   */
  checkNoNewAccess(params: AccessAnalyzer.Types.CheckNoNewAccessRequest, callback?: (err: AWSError, data: AccessAnalyzer.Types.CheckNoNewAccessResponse) => void): Request<AccessAnalyzer.Types.CheckNoNewAccessResponse, AWSError>;
  /**
   * Checks whether new access is allowed for an updated policy when compared to the existing policy. You can find examples for reference policies and learn how to set up and run a custom policy check for new access in the IAM Access Analyzer custom policy checks samples repository on GitHub. The reference policies in this repository are meant to be passed to the existingPolicyDocument request parameter.
   */
  checkNoNewAccess(callback?: (err: AWSError, data: AccessAnalyzer.Types.CheckNoNewAccessResponse) => void): Request<AccessAnalyzer.Types.CheckNoNewAccessResponse, AWSError>;
  /**
   * Creates an access preview that allows you to preview IAM Access Analyzer findings for your resource before deploying resource permissions.
   */
  createAccessPreview(params: AccessAnalyzer.Types.CreateAccessPreviewRequest, callback?: (err: AWSError, data: AccessAnalyzer.Types.CreateAccessPreviewResponse) => void): Request<AccessAnalyzer.Types.CreateAccessPreviewResponse, AWSError>;
  /**
   * Creates an access preview that allows you to preview IAM Access Analyzer findings for your resource before deploying resource permissions.
   */
  createAccessPreview(callback?: (err: AWSError, data: AccessAnalyzer.Types.CreateAccessPreviewResponse) => void): Request<AccessAnalyzer.Types.CreateAccessPreviewResponse, AWSError>;
  /**
   * Creates an analyzer for your account.
   */
  createAnalyzer(params: AccessAnalyzer.Types.CreateAnalyzerRequest, callback?: (err: AWSError, data: AccessAnalyzer.Types.CreateAnalyzerResponse) => void): Request<AccessAnalyzer.Types.CreateAnalyzerResponse, AWSError>;
  /**
   * Creates an analyzer for your account.
   */
  createAnalyzer(callback?: (err: AWSError, data: AccessAnalyzer.Types.CreateAnalyzerResponse) => void): Request<AccessAnalyzer.Types.CreateAnalyzerResponse, AWSError>;
  /**
   * Creates an archive rule for the specified analyzer. Archive rules automatically archive new findings that meet the criteria you define when you create the rule. To learn about filter keys that you can use to create an archive rule, see IAM Access Analyzer filter keys in the IAM User Guide.
   */
  createArchiveRule(params: AccessAnalyzer.Types.CreateArchiveRuleRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Creates an archive rule for the specified analyzer. Archive rules automatically archive new findings that meet the criteria you define when you create the rule. To learn about filter keys that you can use to create an archive rule, see IAM Access Analyzer filter keys in the IAM User Guide.
   */
  createArchiveRule(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified analyzer. When you delete an analyzer, IAM Access Analyzer is disabled for the account or organization in the current or specific Region. All findings that were generated by the analyzer are deleted. You cannot undo this action.
   */
  deleteAnalyzer(params: AccessAnalyzer.Types.DeleteAnalyzerRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified analyzer. When you delete an analyzer, IAM Access Analyzer is disabled for the account or organization in the current or specific Region. All findings that were generated by the analyzer are deleted. You cannot undo this action.
   */
  deleteAnalyzer(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified archive rule.
   */
  deleteArchiveRule(params: AccessAnalyzer.Types.DeleteArchiveRuleRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Deletes the specified archive rule.
   */
  deleteArchiveRule(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Retrieves information about an access preview for the specified analyzer.
   */
  getAccessPreview(params: AccessAnalyzer.Types.GetAccessPreviewRequest, callback?: (err: AWSError, data: AccessAnalyzer.Types.GetAccessPreviewResponse) => void): Request<AccessAnalyzer.Types.GetAccessPreviewResponse, AWSError>;
  /**
   * Retrieves information about an access preview for the specified analyzer.
   */
  getAccessPreview(callback?: (err: AWSError, data: AccessAnalyzer.Types.GetAccessPreviewResponse) => void): Request<AccessAnalyzer.Types.GetAccessPreviewResponse, AWSError>;
  /**
   * Retrieves information about a resource that was analyzed.
   */
  getAnalyzedResource(params: AccessAnalyzer.Types.GetAnalyzedResourceRequest, callback?: (err: AWSError, data: AccessAnalyzer.Types.GetAnalyzedResourceResponse) => void): Request<AccessAnalyzer.Types.GetAnalyzedResourceResponse, AWSError>;
  /**
   * Retrieves information about a resource that was analyzed.
   */
  getAnalyzedResource(callback?: (err: AWSError, data: AccessAnalyzer.Types.GetAnalyzedResourceResponse) => void): Request<AccessAnalyzer.Types.GetAnalyzedResourceResponse, AWSError>;
  /**
   * Retrieves information about the specified analyzer.
   */
  getAnalyzer(params: AccessAnalyzer.Types.GetAnalyzerRequest, callback?: (err: AWSError, data: AccessAnalyzer.Types.GetAnalyzerResponse) => void): Request<AccessAnalyzer.Types.GetAnalyzerResponse, AWSError>;
  /**
   * Retrieves information about the specified analyzer.
   */
  getAnalyzer(callback?: (err: AWSError, data: AccessAnalyzer.Types.GetAnalyzerResponse) => void): Request<AccessAnalyzer.Types.GetAnalyzerResponse, AWSError>;
  /**
   * Retrieves information about an archive rule. To learn about filter keys that you can use to create an archive rule, see IAM Access Analyzer filter keys in the IAM User Guide.
   */
  getArchiveRule(params: AccessAnalyzer.Types.GetArchiveRuleRequest, callback?: (err: AWSError, data: AccessAnalyzer.Types.GetArchiveRuleResponse) => void): Request<AccessAnalyzer.Types.GetArchiveRuleResponse, AWSError>;
  /**
   * Retrieves information about an archive rule. To learn about filter keys that you can use to create an archive rule, see IAM Access Analyzer filter keys in the IAM User Guide.
   */
  getArchiveRule(callback?: (err: AWSError, data: AccessAnalyzer.Types.GetArchiveRuleResponse) => void): Request<AccessAnalyzer.Types.GetArchiveRuleResponse, AWSError>;
  /**
   * Retrieves information about the specified finding.
   */
  getFinding(params: AccessAnalyzer.Types.GetFindingRequest, callback?: (err: AWSError, data: AccessAnalyzer.Types.GetFindingResponse) => void): Request<AccessAnalyzer.Types.GetFindingResponse, AWSError>;
  /**
   * Retrieves information about the specified finding.
   */
  getFinding(callback?: (err: AWSError, data: AccessAnalyzer.Types.GetFindingResponse) => void): Request<AccessAnalyzer.Types.GetFindingResponse, AWSError>;
  /**
   * Retrieves information about the specified finding.
   */
  getFindingV2(params: AccessAnalyzer.Types.GetFindingV2Request, callback?: (err: AWSError, data: AccessAnalyzer.Types.GetFindingV2Response) => void): Request<AccessAnalyzer.Types.GetFindingV2Response, AWSError>;
  /**
   * Retrieves information about the specified finding.
   */
  getFindingV2(callback?: (err: AWSError, data: AccessAnalyzer.Types.GetFindingV2Response) => void): Request<AccessAnalyzer.Types.GetFindingV2Response, AWSError>;
  /**
   * Retrieves the policy that was generated using StartPolicyGeneration. 
   */
  getGeneratedPolicy(params: AccessAnalyzer.Types.GetGeneratedPolicyRequest, callback?: (err: AWSError, data: AccessAnalyzer.Types.GetGeneratedPolicyResponse) => void): Request<AccessAnalyzer.Types.GetGeneratedPolicyResponse, AWSError>;
  /**
   * Retrieves the policy that was generated using StartPolicyGeneration. 
   */
  getGeneratedPolicy(callback?: (err: AWSError, data: AccessAnalyzer.Types.GetGeneratedPolicyResponse) => void): Request<AccessAnalyzer.Types.GetGeneratedPolicyResponse, AWSError>;
  /**
   * Retrieves a list of access preview findings generated by the specified access preview.
   */
  listAccessPreviewFindings(params: AccessAnalyzer.Types.ListAccessPreviewFindingsRequest, callback?: (err: AWSError, data: AccessAnalyzer.Types.ListAccessPreviewFindingsResponse) => void): Request<AccessAnalyzer.Types.ListAccessPreviewFindingsResponse, AWSError>;
  /**
   * Retrieves a list of access preview findings generated by the specified access preview.
   */
  listAccessPreviewFindings(callback?: (err: AWSError, data: AccessAnalyzer.Types.ListAccessPreviewFindingsResponse) => void): Request<AccessAnalyzer.Types.ListAccessPreviewFindingsResponse, AWSError>;
  /**
   * Retrieves a list of access previews for the specified analyzer.
   */
  listAccessPreviews(params: AccessAnalyzer.Types.ListAccessPreviewsRequest, callback?: (err: AWSError, data: AccessAnalyzer.Types.ListAccessPreviewsResponse) => void): Request<AccessAnalyzer.Types.ListAccessPreviewsResponse, AWSError>;
  /**
   * Retrieves a list of access previews for the specified analyzer.
   */
  listAccessPreviews(callback?: (err: AWSError, data: AccessAnalyzer.Types.ListAccessPreviewsResponse) => void): Request<AccessAnalyzer.Types.ListAccessPreviewsResponse, AWSError>;
  /**
   * Retrieves a list of resources of the specified type that have been analyzed by the specified analyzer..
   */
  listAnalyzedResources(params: AccessAnalyzer.Types.ListAnalyzedResourcesRequest, callback?: (err: AWSError, data: AccessAnalyzer.Types.ListAnalyzedResourcesResponse) => void): Request<AccessAnalyzer.Types.ListAnalyzedResourcesResponse, AWSError>;
  /**
   * Retrieves a list of resources of the specified type that have been analyzed by the specified analyzer..
   */
  listAnalyzedResources(callback?: (err: AWSError, data: AccessAnalyzer.Types.ListAnalyzedResourcesResponse) => void): Request<AccessAnalyzer.Types.ListAnalyzedResourcesResponse, AWSError>;
  /**
   * Retrieves a list of analyzers.
   */
  listAnalyzers(params: AccessAnalyzer.Types.ListAnalyzersRequest, callback?: (err: AWSError, data: AccessAnalyzer.Types.ListAnalyzersResponse) => void): Request<AccessAnalyzer.Types.ListAnalyzersResponse, AWSError>;
  /**
   * Retrieves a list of analyzers.
   */
  listAnalyzers(callback?: (err: AWSError, data: AccessAnalyzer.Types.ListAnalyzersResponse) => void): Request<AccessAnalyzer.Types.ListAnalyzersResponse, AWSError>;
  /**
   * Retrieves a list of archive rules created for the specified analyzer.
   */
  listArchiveRules(params: AccessAnalyzer.Types.ListArchiveRulesRequest, callback?: (err: AWSError, data: AccessAnalyzer.Types.ListArchiveRulesResponse) => void): Request<AccessAnalyzer.Types.ListArchiveRulesResponse, AWSError>;
  /**
   * Retrieves a list of archive rules created for the specified analyzer.
   */
  listArchiveRules(callback?: (err: AWSError, data: AccessAnalyzer.Types.ListArchiveRulesResponse) => void): Request<AccessAnalyzer.Types.ListArchiveRulesResponse, AWSError>;
  /**
   * Retrieves a list of findings generated by the specified analyzer. To learn about filter keys that you can use to retrieve a list of findings, see IAM Access Analyzer filter keys in the IAM User Guide.
   */
  listFindings(params: AccessAnalyzer.Types.ListFindingsRequest, callback?: (err: AWSError, data: AccessAnalyzer.Types.ListFindingsResponse) => void): Request<AccessAnalyzer.Types.ListFindingsResponse, AWSError>;
  /**
   * Retrieves a list of findings generated by the specified analyzer. To learn about filter keys that you can use to retrieve a list of findings, see IAM Access Analyzer filter keys in the IAM User Guide.
   */
  listFindings(callback?: (err: AWSError, data: AccessAnalyzer.Types.ListFindingsResponse) => void): Request<AccessAnalyzer.Types.ListFindingsResponse, AWSError>;
  /**
   * Retrieves a list of findings generated by the specified analyzer. To learn about filter keys that you can use to retrieve a list of findings, see IAM Access Analyzer filter keys in the IAM User Guide.
   */
  listFindingsV2(params: AccessAnalyzer.Types.ListFindingsV2Request, callback?: (err: AWSError, data: AccessAnalyzer.Types.ListFindingsV2Response) => void): Request<AccessAnalyzer.Types.ListFindingsV2Response, AWSError>;
  /**
   * Retrieves a list of findings generated by the specified analyzer. To learn about filter keys that you can use to retrieve a list of findings, see IAM Access Analyzer filter keys in the IAM User Guide.
   */
  listFindingsV2(callback?: (err: AWSError, data: AccessAnalyzer.Types.ListFindingsV2Response) => void): Request<AccessAnalyzer.Types.ListFindingsV2Response, AWSError>;
  /**
   * Lists all of the policy generations requested in the last seven days.
   */
  listPolicyGenerations(params: AccessAnalyzer.Types.ListPolicyGenerationsRequest, callback?: (err: AWSError, data: AccessAnalyzer.Types.ListPolicyGenerationsResponse) => void): Request<AccessAnalyzer.Types.ListPolicyGenerationsResponse, AWSError>;
  /**
   * Lists all of the policy generations requested in the last seven days.
   */
  listPolicyGenerations(callback?: (err: AWSError, data: AccessAnalyzer.Types.ListPolicyGenerationsResponse) => void): Request<AccessAnalyzer.Types.ListPolicyGenerationsResponse, AWSError>;
  /**
   * Retrieves a list of tags applied to the specified resource.
   */
  listTagsForResource(params: AccessAnalyzer.Types.ListTagsForResourceRequest, callback?: (err: AWSError, data: AccessAnalyzer.Types.ListTagsForResourceResponse) => void): Request<AccessAnalyzer.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Retrieves a list of tags applied to the specified resource.
   */
  listTagsForResource(callback?: (err: AWSError, data: AccessAnalyzer.Types.ListTagsForResourceResponse) => void): Request<AccessAnalyzer.Types.ListTagsForResourceResponse, AWSError>;
  /**
   * Starts the policy generation request.
   */
  startPolicyGeneration(params: AccessAnalyzer.Types.StartPolicyGenerationRequest, callback?: (err: AWSError, data: AccessAnalyzer.Types.StartPolicyGenerationResponse) => void): Request<AccessAnalyzer.Types.StartPolicyGenerationResponse, AWSError>;
  /**
   * Starts the policy generation request.
   */
  startPolicyGeneration(callback?: (err: AWSError, data: AccessAnalyzer.Types.StartPolicyGenerationResponse) => void): Request<AccessAnalyzer.Types.StartPolicyGenerationResponse, AWSError>;
  /**
   * Immediately starts a scan of the policies applied to the specified resource.
   */
  startResourceScan(params: AccessAnalyzer.Types.StartResourceScanRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Immediately starts a scan of the policies applied to the specified resource.
   */
  startResourceScan(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Adds a tag to the specified resource.
   */
  tagResource(params: AccessAnalyzer.Types.TagResourceRequest, callback?: (err: AWSError, data: AccessAnalyzer.Types.TagResourceResponse) => void): Request<AccessAnalyzer.Types.TagResourceResponse, AWSError>;
  /**
   * Adds a tag to the specified resource.
   */
  tagResource(callback?: (err: AWSError, data: AccessAnalyzer.Types.TagResourceResponse) => void): Request<AccessAnalyzer.Types.TagResourceResponse, AWSError>;
  /**
   * Removes a tag from the specified resource.
   */
  untagResource(params: AccessAnalyzer.Types.UntagResourceRequest, callback?: (err: AWSError, data: AccessAnalyzer.Types.UntagResourceResponse) => void): Request<AccessAnalyzer.Types.UntagResourceResponse, AWSError>;
  /**
   * Removes a tag from the specified resource.
   */
  untagResource(callback?: (err: AWSError, data: AccessAnalyzer.Types.UntagResourceResponse) => void): Request<AccessAnalyzer.Types.UntagResourceResponse, AWSError>;
  /**
   * Updates the criteria and values for the specified archive rule.
   */
  updateArchiveRule(params: AccessAnalyzer.Types.UpdateArchiveRuleRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the criteria and values for the specified archive rule.
   */
  updateArchiveRule(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the status for the specified findings.
   */
  updateFindings(params: AccessAnalyzer.Types.UpdateFindingsRequest, callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Updates the status for the specified findings.
   */
  updateFindings(callback?: (err: AWSError, data: {}) => void): Request<{}, AWSError>;
  /**
   * Requests the validation of a policy and returns a list of findings. The findings help you identify issues and provide actionable recommendations to resolve the issue and enable you to author functional policies that meet security best practices. 
   */
  validatePolicy(params: AccessAnalyzer.Types.ValidatePolicyRequest, callback?: (err: AWSError, data: AccessAnalyzer.Types.ValidatePolicyResponse) => void): Request<AccessAnalyzer.Types.ValidatePolicyResponse, AWSError>;
  /**
   * Requests the validation of a policy and returns a list of findings. The findings help you identify issues and provide actionable recommendations to resolve the issue and enable you to author functional policies that meet security best practices. 
   */
  validatePolicy(callback?: (err: AWSError, data: AccessAnalyzer.Types.ValidatePolicyResponse) => void): Request<AccessAnalyzer.Types.ValidatePolicyResponse, AWSError>;
}
declare namespace AccessAnalyzer {
  export interface Access {
    /**
     * A list of actions for the access permissions.
     */
    actions: AccessActionsList;
  }
  export type AccessActionsList = Action[];
  export type AccessCheckPolicyDocument = string;
  export type AccessCheckPolicyType = "IDENTITY_POLICY"|"RESOURCE_POLICY"|string;
  export type AccessPointArn = string;
  export type AccessPointPolicy = string;
  export interface AccessPreview {
    /**
     * The unique ID for the access preview.
     */
    id: AccessPreviewId;
    /**
     * The ARN of the analyzer used to generate the access preview.
     */
    analyzerArn: AnalyzerArn;
    /**
     * A map of resource ARNs for the proposed resource configuration.
     */
    configurations: ConfigurationsMap;
    /**
     * The time at which the access preview was created.
     */
    createdAt: Timestamp;
    /**
     * The status of the access preview.    Creating - The access preview creation is in progress.    Completed - The access preview is complete. You can preview findings for external access to the resource.    Failed - The access preview creation has failed.  
     */
    status: AccessPreviewStatus;
    /**
     * Provides more details about the current status of the access preview. For example, if the creation of the access preview fails, a Failed status is returned. This failure can be due to an internal issue with the analysis or due to an invalid resource configuration.
     */
    statusReason?: AccessPreviewStatusReason;
  }
  export interface AccessPreviewFinding {
    /**
     * The ID of the access preview finding. This ID uniquely identifies the element in the list of access preview findings and is not related to the finding ID in Access Analyzer.
     */
    id: AccessPreviewFindingId;
    /**
     * The existing ID of the finding in IAM Access Analyzer, provided only for existing findings.
     */
    existingFindingId?: FindingId;
    /**
     * The existing status of the finding, provided only for existing findings.
     */
    existingFindingStatus?: FindingStatus;
    /**
     * The external principal that has access to a resource within the zone of trust.
     */
    principal?: PrincipalMap;
    /**
     * The action in the analyzed policy statement that an external principal has permission to perform.
     */
    action?: ActionList;
    /**
     * The condition in the analyzed policy statement that resulted in a finding.
     */
    condition?: ConditionKeyMap;
    /**
     * The resource that an external principal has access to. This is the resource associated with the access preview.
     */
    resource?: String;
    /**
     * Indicates whether the policy that generated the finding allows public access to the resource.
     */
    isPublic?: Boolean;
    /**
     * The type of the resource that can be accessed in the finding.
     */
    resourceType: ResourceType;
    /**
     * The time at which the access preview finding was created.
     */
    createdAt: Timestamp;
    /**
     * Provides context on how the access preview finding compares to existing access identified in IAM Access Analyzer.    New - The finding is for newly-introduced access.    Unchanged - The preview finding is an existing finding that would remain unchanged.    Changed - The preview finding is an existing finding with a change in status.   For example, a Changed finding with preview status Resolved and existing status Active indicates the existing Active finding would become Resolved as a result of the proposed permissions change.
     */
    changeType: FindingChangeType;
    /**
     * The preview status of the finding. This is what the status of the finding would be after permissions deployment. For example, a Changed finding with preview status Resolved and existing status Active indicates the existing Active finding would become Resolved as a result of the proposed permissions change.
     */
    status: FindingStatus;
    /**
     * The Amazon Web Services account ID that owns the resource. For most Amazon Web Services resources, the owning account is the account in which the resource was created.
     */
    resourceOwnerAccount: String;
    /**
     * An error.
     */
    error?: String;
    /**
     * The sources of the finding. This indicates how the access that generated the finding is granted. It is populated for Amazon S3 bucket findings.
     */
    sources?: FindingSourceList;
  }
  export type AccessPreviewFindingId = string;
  export type AccessPreviewFindingsList = AccessPreviewFinding[];
  export type AccessPreviewId = string;
  export type AccessPreviewStatus = "COMPLETED"|"CREATING"|"FAILED"|string;
  export interface AccessPreviewStatusReason {
    /**
     * The reason code for the current status of the access preview.
     */
    code: AccessPreviewStatusReasonCode;
  }
  export type AccessPreviewStatusReasonCode = "INTERNAL_ERROR"|"INVALID_CONFIGURATION"|string;
  export interface AccessPreviewSummary {
    /**
     * The unique ID for the access preview.
     */
    id: AccessPreviewId;
    /**
     * The ARN of the analyzer used to generate the access preview.
     */
    analyzerArn: AnalyzerArn;
    /**
     * The time at which the access preview was created.
     */
    createdAt: Timestamp;
    /**
     * The status of the access preview.    Creating - The access preview creation is in progress.    Completed - The access preview is complete and previews the findings for external access to the resource.    Failed - The access preview creation has failed.  
     */
    status: AccessPreviewStatus;
    statusReason?: AccessPreviewStatusReason;
  }
  export type AccessPreviewsList = AccessPreviewSummary[];
  export type AclCanonicalId = string;
  export interface AclGrantee {
    /**
     * The value specified is the canonical user ID of an Amazon Web Services account.
     */
    id?: AclCanonicalId;
    /**
     * Used for granting permissions to a predefined group.
     */
    uri?: AclUri;
  }
  export type AclPermission = "READ"|"WRITE"|"READ_ACP"|"WRITE_ACP"|"FULL_CONTROL"|string;
  export type AclUri = string;
  export type Action = string;
  export type ActionList = String[];
  export interface AnalyzedResource {
    /**
     * The ARN of the resource that was analyzed.
     */
    resourceArn: ResourceArn;
    /**
     * The type of the resource that was analyzed.
     */
    resourceType: ResourceType;
    /**
     * The time at which the finding was created.
     */
    createdAt: Timestamp;
    /**
     * The time at which the resource was analyzed.
     */
    analyzedAt: Timestamp;
    /**
     * The time at which the finding was updated.
     */
    updatedAt: Timestamp;
    /**
     * Indicates whether the policy that generated the finding grants public access to the resource.
     */
    isPublic: Boolean;
    /**
     * The actions that an external principal is granted permission to use by the policy that generated the finding.
     */
    actions?: ActionList;
    /**
     * Indicates how the access that generated the finding is granted. This is populated for Amazon S3 bucket findings.
     */
    sharedVia?: SharedViaList;
    /**
     * The current status of the finding generated from the analyzed resource.
     */
    status?: FindingStatus;
    /**
     * The Amazon Web Services account ID that owns the resource.
     */
    resourceOwnerAccount: String;
    /**
     * An error message.
     */
    error?: String;
  }
  export interface AnalyzedResourceSummary {
    /**
     * The ARN of the analyzed resource.
     */
    resourceArn: ResourceArn;
    /**
     * The Amazon Web Services account ID that owns the resource.
     */
    resourceOwnerAccount: String;
    /**
     * The type of resource that was analyzed.
     */
    resourceType: ResourceType;
  }
  export type AnalyzedResourcesList = AnalyzedResourceSummary[];
  export type AnalyzerArn = string;
  export interface AnalyzerConfiguration {
    /**
     * Specifies the configuration of an unused access analyzer for an Amazon Web Services organization or account. External access analyzers do not support any configuration.
     */
    unusedAccess?: UnusedAccessConfiguration;
  }
  export type AnalyzerStatus = "ACTIVE"|"CREATING"|"DISABLED"|"FAILED"|string;
  export interface AnalyzerSummary {
    /**
     * The ARN of the analyzer.
     */
    arn: AnalyzerArn;
    /**
     * The name of the analyzer.
     */
    name: Name;
    /**
     * The type of analyzer, which corresponds to the zone of trust chosen for the analyzer.
     */
    type: Type;
    /**
     * A timestamp for the time at which the analyzer was created.
     */
    createdAt: Timestamp;
    /**
     * The resource that was most recently analyzed by the analyzer.
     */
    lastResourceAnalyzed?: String;
    /**
     * The time at which the most recently analyzed resource was analyzed.
     */
    lastResourceAnalyzedAt?: Timestamp;
    /**
     * The tags added to the analyzer.
     */
    tags?: TagsMap;
    /**
     * The status of the analyzer. An Active analyzer successfully monitors supported resources and generates new findings. The analyzer is Disabled when a user action, such as removing trusted access for Identity and Access Management Access Analyzer from Organizations, causes the analyzer to stop generating new findings. The status is Creating when the analyzer creation is in progress and Failed when the analyzer creation has failed. 
     */
    status: AnalyzerStatus;
    /**
     * The statusReason provides more details about the current status of the analyzer. For example, if the creation for the analyzer fails, a Failed status is returned. For an analyzer with organization as the type, this failure can be due to an issue with creating the service-linked roles required in the member accounts of the Amazon Web Services organization.
     */
    statusReason?: StatusReason;
    /**
     * Specifies whether the analyzer is an external access or unused access analyzer.
     */
    configuration?: AnalyzerConfiguration;
  }
  export type AnalyzersList = AnalyzerSummary[];
  export interface ApplyArchiveRuleRequest {
    /**
     * The Amazon resource name (ARN) of the analyzer.
     */
    analyzerArn: AnalyzerArn;
    /**
     * The name of the rule to apply.
     */
    ruleName: Name;
    /**
     * A client token.
     */
    clientToken?: String;
  }
  export interface ArchiveRuleSummary {
    /**
     * The name of the archive rule.
     */
    ruleName: Name;
    /**
     * A filter used to define the archive rule.
     */
    filter: FilterCriteriaMap;
    /**
     * The time at which the archive rule was created.
     */
    createdAt: Timestamp;
    /**
     * The time at which the archive rule was last updated.
     */
    updatedAt: Timestamp;
  }
  export type ArchiveRulesList = ArchiveRuleSummary[];
  export type Boolean = boolean;
  export interface CancelPolicyGenerationRequest {
    /**
     * The JobId that is returned by the StartPolicyGeneration operation. The JobId can be used with GetGeneratedPolicy to retrieve the generated policies or used with CancelPolicyGeneration to cancel the policy generation request.
     */
    jobId: JobId;
  }
  export interface CancelPolicyGenerationResponse {
  }
  export interface CheckAccessNotGrantedRequest {
    /**
     * The JSON policy document to use as the content for the policy.
     */
    policyDocument: AccessCheckPolicyDocument;
    /**
     * An access object containing the permissions that shouldn't be granted by the specified policy.
     */
    access: CheckAccessNotGrantedRequestAccessList;
    /**
     * The type of policy. Identity policies grant permissions to IAM principals. Identity policies include managed and inline policies for IAM roles, users, and groups. Resource policies grant permissions on Amazon Web Services resources. Resource policies include trust policies for IAM roles and bucket policies for Amazon S3 buckets. You can provide a generic input such as identity policy or resource policy or a specific input such as managed policy or Amazon S3 bucket policy.
     */
    policyType: AccessCheckPolicyType;
  }
  export type CheckAccessNotGrantedRequestAccessList = Access[];
  export interface CheckAccessNotGrantedResponse {
    /**
     * The result of the check for whether the access is allowed. If the result is PASS, the specified policy doesn't allow any of the specified permissions in the access object. If the result is FAIL, the specified policy might allow some or all of the permissions in the access object.
     */
    result?: CheckAccessNotGrantedResult;
    /**
     * The message indicating whether the specified access is allowed.
     */
    message?: String;
    /**
     * A description of the reasoning of the result.
     */
    reasons?: ReasonSummaryList;
  }
  export type CheckAccessNotGrantedResult = "PASS"|"FAIL"|string;
  export interface CheckNoNewAccessRequest {
    /**
     * The JSON policy document to use as the content for the updated policy.
     */
    newPolicyDocument: AccessCheckPolicyDocument;
    /**
     * The JSON policy document to use as the content for the existing policy.
     */
    existingPolicyDocument: AccessCheckPolicyDocument;
    /**
     * The type of policy to compare. Identity policies grant permissions to IAM principals. Identity policies include managed and inline policies for IAM roles, users, and groups. Resource policies grant permissions on Amazon Web Services resources. Resource policies include trust policies for IAM roles and bucket policies for Amazon S3 buckets. You can provide a generic input such as identity policy or resource policy or a specific input such as managed policy or Amazon S3 bucket policy.
     */
    policyType: AccessCheckPolicyType;
  }
  export interface CheckNoNewAccessResponse {
    /**
     * The result of the check for new access. If the result is PASS, no new access is allowed by the updated policy. If the result is FAIL, the updated policy might allow new access.
     */
    result?: CheckNoNewAccessResult;
    /**
     * The message indicating whether the updated policy allows new access.
     */
    message?: String;
    /**
     * A description of the reasoning of the result.
     */
    reasons?: ReasonSummaryList;
  }
  export type CheckNoNewAccessResult = "PASS"|"FAIL"|string;
  export type CloudTrailArn = string;
  export interface CloudTrailDetails {
    /**
     * A Trail object that contains settings for a trail.
     */
    trails: TrailList;
    /**
     * The ARN of the service role that IAM Access Analyzer uses to access your CloudTrail trail and service last accessed information.
     */
    accessRole: RoleArn;
    /**
     * The start of the time range for which IAM Access Analyzer reviews your CloudTrail events. Events with a timestamp before this time are not considered to generate a policy.
     */
    startTime: Timestamp;
    /**
     * The end of the time range for which IAM Access Analyzer reviews your CloudTrail events. Events with a timestamp after this time are not considered to generate a policy. If this is not included in the request, the default value is the current time.
     */
    endTime?: Timestamp;
  }
  export interface CloudTrailProperties {
    /**
     * A TrailProperties object that contains settings for trail properties.
     */
    trailProperties: TrailPropertiesList;
    /**
     * The start of the time range for which IAM Access Analyzer reviews your CloudTrail events. Events with a timestamp before this time are not considered to generate a policy.
     */
    startTime: Timestamp;
    /**
     * The end of the time range for which IAM Access Analyzer reviews your CloudTrail events. Events with a timestamp after this time are not considered to generate a policy. If this is not included in the request, the default value is the current time.
     */
    endTime: Timestamp;
  }
  export type ConditionKeyMap = {[key: string]: String};
  export interface Configuration {
    /**
     * The access control configuration is for an Amazon EBS volume snapshot.
     */
    ebsSnapshot?: EbsSnapshotConfiguration;
    /**
     * The access control configuration is for an Amazon ECR repository.
     */
    ecrRepository?: EcrRepositoryConfiguration;
    /**
     * The access control configuration is for an IAM role. 
     */
    iamRole?: IamRoleConfiguration;
    /**
     * The access control configuration is for an Amazon EFS file system.
     */
    efsFileSystem?: EfsFileSystemConfiguration;
    /**
     * The access control configuration is for a KMS key. 
     */
    kmsKey?: KmsKeyConfiguration;
    /**
     * The access control configuration is for an Amazon RDS DB cluster snapshot.
     */
    rdsDbClusterSnapshot?: RdsDbClusterSnapshotConfiguration;
    /**
     * The access control configuration is for an Amazon RDS DB snapshot.
     */
    rdsDbSnapshot?: RdsDbSnapshotConfiguration;
    /**
     * The access control configuration is for a Secrets Manager secret.
     */
    secretsManagerSecret?: SecretsManagerSecretConfiguration;
    /**
     * The access control configuration is for an Amazon S3 bucket. 
     */
    s3Bucket?: S3BucketConfiguration;
    /**
     * The access control configuration is for an Amazon SNS topic
     */
    snsTopic?: SnsTopicConfiguration;
    /**
     * The access control configuration is for an Amazon SQS queue. 
     */
    sqsQueue?: SqsQueueConfiguration;
    /**
     * The access control configuration is for an Amazon S3 directory bucket.
     */
    s3ExpressDirectoryBucket?: S3ExpressDirectoryBucketConfiguration;
  }
  export type ConfigurationsMap = {[key: string]: Configuration};
  export type ConfigurationsMapKey = string;
  export interface CreateAccessPreviewRequest {
    /**
     * The ARN of the account analyzer used to generate the access preview. You can only create an access preview for analyzers with an Account type and Active status.
     */
    analyzerArn: AnalyzerArn;
    /**
     * Access control configuration for your resource that is used to generate the access preview. The access preview includes findings for external access allowed to the resource with the proposed access control configuration. The configuration must contain exactly one element.
     */
    configurations: ConfigurationsMap;
    /**
     * A client token.
     */
    clientToken?: String;
  }
  export interface CreateAccessPreviewResponse {
    /**
     * The unique ID for the access preview.
     */
    id: AccessPreviewId;
  }
  export interface CreateAnalyzerRequest {
    /**
     * The name of the analyzer to create.
     */
    analyzerName: Name;
    /**
     * The type of analyzer to create. Only ACCOUNT, ORGANIZATION, ACCOUNT_UNUSED_ACCESS, and ORGANIZTAION_UNUSED_ACCESS analyzers are supported. You can create only one analyzer per account per Region. You can create up to 5 analyzers per organization per Region.
     */
    type: Type;
    /**
     * Specifies the archive rules to add for the analyzer. Archive rules automatically archive findings that meet the criteria you define for the rule.
     */
    archiveRules?: InlineArchiveRulesList;
    /**
     * An array of key-value pairs to apply to the analyzer.
     */
    tags?: TagsMap;
    /**
     * A client token.
     */
    clientToken?: String;
    /**
     * Specifies the configuration of the analyzer. If the analyzer is an unused access analyzer, the specified scope of unused access is used for the configuration. If the analyzer is an external access analyzer, this field is not used.
     */
    configuration?: AnalyzerConfiguration;
  }
  export interface CreateAnalyzerResponse {
    /**
     * The ARN of the analyzer that was created by the request.
     */
    arn?: AnalyzerArn;
  }
  export interface CreateArchiveRuleRequest {
    /**
     * The name of the created analyzer.
     */
    analyzerName: Name;
    /**
     * The name of the rule to create.
     */
    ruleName: Name;
    /**
     * The criteria for the rule.
     */
    filter: FilterCriteriaMap;
    /**
     * A client token.
     */
    clientToken?: String;
  }
  export interface Criterion {
    /**
     * An "equals" operator to match for the filter used to create the rule.
     */
    eq?: ValueList;
    /**
     * A "not equals" operator to match for the filter used to create the rule.
     */
    neq?: ValueList;
    /**
     * A "contains" operator to match for the filter used to create the rule.
     */
    contains?: ValueList;
    /**
     * An "exists" operator to match for the filter used to create the rule. 
     */
    exists?: Boolean;
  }
  export interface DeleteAnalyzerRequest {
    /**
     * The name of the analyzer to delete.
     */
    analyzerName: Name;
    /**
     * A client token.
     */
    clientToken?: String;
  }
  export interface DeleteArchiveRuleRequest {
    /**
     * The name of the analyzer that associated with the archive rule to delete.
     */
    analyzerName: Name;
    /**
     * The name of the rule to delete.
     */
    ruleName: Name;
    /**
     * A client token.
     */
    clientToken?: String;
  }
  export type EbsGroup = string;
  export type EbsGroupList = EbsGroup[];
  export interface EbsSnapshotConfiguration {
    /**
     * The IDs of the Amazon Web Services accounts that have access to the Amazon EBS volume snapshot.   If the configuration is for an existing Amazon EBS volume snapshot and you do not specify the userIds, then the access preview uses the existing shared userIds for the snapshot.   If the access preview is for a new resource and you do not specify the userIds, then the access preview considers the snapshot without any userIds.   To propose deletion of existing shared accountIds, you can specify an empty list for userIds.  
     */
    userIds?: EbsUserIdList;
    /**
     * The groups that have access to the Amazon EBS volume snapshot. If the value all is specified, then the Amazon EBS volume snapshot is public.   If the configuration is for an existing Amazon EBS volume snapshot and you do not specify the groups, then the access preview uses the existing shared groups for the snapshot.   If the access preview is for a new resource and you do not specify the groups, then the access preview considers the snapshot without any groups.   To propose deletion of existing shared groups, you can specify an empty list for groups.  
     */
    groups?: EbsGroupList;
    /**
     * The KMS key identifier for an encrypted Amazon EBS volume snapshot. The KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.   If the configuration is for an existing Amazon EBS volume snapshot and you do not specify the kmsKeyId, or you specify an empty string, then the access preview uses the existing kmsKeyId of the snapshot.   If the access preview is for a new resource and you do not specify the kmsKeyId, the access preview considers the snapshot as unencrypted.  
     */
    kmsKeyId?: EbsSnapshotDataEncryptionKeyId;
  }
  export type EbsSnapshotDataEncryptionKeyId = string;
  export type EbsUserId = string;
  export type EbsUserIdList = EbsUserId[];
  export interface EcrRepositoryConfiguration {
    /**
     * The JSON repository policy text to apply to the Amazon ECR repository. For more information, see Private repository policy examples in the Amazon ECR User Guide.
     */
    repositoryPolicy?: EcrRepositoryPolicy;
  }
  export type EcrRepositoryPolicy = string;
  export interface EfsFileSystemConfiguration {
    /**
     * The JSON policy definition to apply to the Amazon EFS file system. For more information on the elements that make up a file system policy, see Amazon EFS Resource-based policies.
     */
    fileSystemPolicy?: EfsFileSystemPolicy;
  }
  export type EfsFileSystemPolicy = string;
  export interface ExternalAccessDetails {
    /**
     * The action in the analyzed policy statement that an external principal has permission to use.
     */
    action?: ActionList;
    /**
     * The condition in the analyzed policy statement that resulted in an external access finding.
     */
    condition: ConditionKeyMap;
    /**
     * Specifies whether the external access finding is public.
     */
    isPublic?: Boolean;
    /**
     * The external principal that has access to a resource within the zone of trust.
     */
    principal?: PrincipalMap;
    /**
     * The sources of the external access finding. This indicates how the access that generated the finding is granted. It is populated for Amazon S3 bucket findings.
     */
    sources?: FindingSourceList;
  }
  export type FilterCriteriaMap = {[key: string]: Criterion};
  export interface Finding {
    /**
     * The ID of the finding.
     */
    id: FindingId;
    /**
     * The external principal that has access to a resource within the zone of trust.
     */
    principal?: PrincipalMap;
    /**
     * The action in the analyzed policy statement that an external principal has permission to use.
     */
    action?: ActionList;
    /**
     * The resource that an external principal has access to.
     */
    resource?: String;
    /**
     * Indicates whether the policy that generated the finding allows public access to the resource.
     */
    isPublic?: Boolean;
    /**
     * The type of the resource identified in the finding.
     */
    resourceType: ResourceType;
    /**
     * The condition in the analyzed policy statement that resulted in a finding.
     */
    condition: ConditionKeyMap;
    /**
     * The time at which the finding was generated.
     */
    createdAt: Timestamp;
    /**
     * The time at which the resource was analyzed.
     */
    analyzedAt: Timestamp;
    /**
     * The time at which the finding was updated.
     */
    updatedAt: Timestamp;
    /**
     * The current status of the finding.
     */
    status: FindingStatus;
    /**
     * The Amazon Web Services account ID that owns the resource.
     */
    resourceOwnerAccount: String;
    /**
     * An error.
     */
    error?: String;
    /**
     * The sources of the finding. This indicates how the access that generated the finding is granted. It is populated for Amazon S3 bucket findings.
     */
    sources?: FindingSourceList;
  }
  export type FindingChangeType = "CHANGED"|"NEW"|"UNCHANGED"|string;
  export interface FindingDetails {
    /**
     * The details for an external access analyzer finding.
     */
    externalAccessDetails?: ExternalAccessDetails;
    /**
     * The details for an unused access analyzer finding with an unused permission finding type.
     */
    unusedPermissionDetails?: UnusedPermissionDetails;
    /**
     * The details for an unused access analyzer finding with an unused IAM user access key finding type.
     */
    unusedIamUserAccessKeyDetails?: UnusedIamUserAccessKeyDetails;
    /**
     * The details for an unused access analyzer finding with an unused IAM role finding type.
     */
    unusedIamRoleDetails?: UnusedIamRoleDetails;
    /**
     * The details for an unused access analyzer finding with an unused IAM user password finding type.
     */
    unusedIamUserPasswordDetails?: UnusedIamUserPasswordDetails;
  }
  export type FindingDetailsList = FindingDetails[];
  export type FindingId = string;
  export type FindingIdList = FindingId[];
  export interface FindingSource {
    /**
     * Indicates the type of access that generated the finding.
     */
    type: FindingSourceType;
    /**
     * Includes details about how the access that generated the finding is granted. This is populated for Amazon S3 bucket findings.
     */
    detail?: FindingSourceDetail;
  }
  export interface FindingSourceDetail {
    /**
     * The ARN of the access point that generated the finding. The ARN format depends on whether the ARN represents an access point or a multi-region access point.
     */
    accessPointArn?: String;
    /**
     * The account of the cross-account access point that generated the finding.
     */
    accessPointAccount?: String;
  }
  export type FindingSourceList = FindingSource[];
  export type FindingSourceType = "POLICY"|"BUCKET_ACL"|"S3_ACCESS_POINT"|"S3_ACCESS_POINT_ACCOUNT"|string;
  export type FindingStatus = "ACTIVE"|"ARCHIVED"|"RESOLVED"|string;
  export type FindingStatusUpdate = "ACTIVE"|"ARCHIVED"|string;
  export interface FindingSummary {
    /**
     * The ID of the finding.
     */
    id: FindingId;
    /**
     * The external principal that has access to a resource within the zone of trust.
     */
    principal?: PrincipalMap;
    /**
     * The action in the analyzed policy statement that an external principal has permission to use.
     */
    action?: ActionList;
    /**
     * The resource that the external principal has access to.
     */
    resource?: String;
    /**
     * Indicates whether the finding reports a resource that has a policy that allows public access.
     */
    isPublic?: Boolean;
    /**
     * The type of the resource that the external principal has access to.
     */
    resourceType: ResourceType;
    /**
     * The condition in the analyzed policy statement that resulted in a finding.
     */
    condition: ConditionKeyMap;
    /**
     * The time at which the finding was created.
     */
    createdAt: Timestamp;
    /**
     * The time at which the resource-based policy that generated the finding was analyzed.
     */
    analyzedAt: Timestamp;
    /**
     * The time at which the finding was most recently updated.
     */
    updatedAt: Timestamp;
    /**
     * The status of the finding.
     */
    status: FindingStatus;
    /**
     * The Amazon Web Services account ID that owns the resource.
     */
    resourceOwnerAccount: String;
    /**
     * The error that resulted in an Error finding.
     */
    error?: String;
    /**
     * The sources of the finding. This indicates how the access that generated the finding is granted. It is populated for Amazon S3 bucket findings.
     */
    sources?: FindingSourceList;
  }
  export interface FindingSummaryV2 {
    /**
     * The time at which the resource-based policy or IAM entity that generated the finding was analyzed.
     */
    analyzedAt: Timestamp;
    /**
     * The time at which the finding was created.
     */
    createdAt: Timestamp;
    /**
     * The error that resulted in an Error finding.
     */
    error?: String;
    /**
     * The ID of the finding.
     */
    id: FindingId;
    /**
     * The resource that the external principal has access to.
     */
    resource?: String;
    /**
     * The type of the resource that the external principal has access to.
     */
    resourceType: ResourceType;
    /**
     * The Amazon Web Services account ID that owns the resource.
     */
    resourceOwnerAccount: String;
    /**
     * The status of the finding.
     */
    status: FindingStatus;
    /**
     * The time at which the finding was most recently updated.
     */
    updatedAt: Timestamp;
    /**
     * The type of the external access or unused access finding.
     */
    findingType?: FindingType;
  }
  export type FindingType = "ExternalAccess"|"UnusedIAMRole"|"UnusedIAMUserAccessKey"|"UnusedIAMUserPassword"|"UnusedPermission"|string;
  export type FindingsList = FindingSummary[];
  export type FindingsListV2 = FindingSummaryV2[];
  export interface GeneratedPolicy {
    /**
     * The text to use as the content for the new policy. The policy is created using the CreatePolicy action.
     */
    policy: String;
  }
  export type GeneratedPolicyList = GeneratedPolicy[];
  export interface GeneratedPolicyProperties {
    /**
     * This value is set to true if the generated policy contains all possible actions for a service that IAM Access Analyzer identified from the CloudTrail trail that you specified, and false otherwise.
     */
    isComplete?: Boolean;
    /**
     * The ARN of the IAM entity (user or role) for which you are generating a policy.
     */
    principalArn: PrincipalArn;
    /**
     * Lists details about the Trail used to generated policy.
     */
    cloudTrailProperties?: CloudTrailProperties;
  }
  export interface GeneratedPolicyResult {
    /**
     * A GeneratedPolicyProperties object that contains properties of the generated policy.
     */
    properties: GeneratedPolicyProperties;
    /**
     * The text to use as the content for the new policy. The policy is created using the CreatePolicy action.
     */
    generatedPolicies?: GeneratedPolicyList;
  }
  export interface GetAccessPreviewRequest {
    /**
     * The unique ID for the access preview.
     */
    accessPreviewId: AccessPreviewId;
    /**
     * The ARN of the analyzer used to generate the access preview.
     */
    analyzerArn: AnalyzerArn;
  }
  export interface GetAccessPreviewResponse {
    /**
     * An object that contains information about the access preview.
     */
    accessPreview: AccessPreview;
  }
  export interface GetAnalyzedResourceRequest {
    /**
     * The ARN of the analyzer to retrieve information from.
     */
    analyzerArn: AnalyzerArn;
    /**
     * The ARN of the resource to retrieve information about.
     */
    resourceArn: ResourceArn;
  }
  export interface GetAnalyzedResourceResponse {
    /**
     * An AnalyzedResource object that contains information that IAM Access Analyzer found when it analyzed the resource.
     */
    resource?: AnalyzedResource;
  }
  export interface GetAnalyzerRequest {
    /**
     * The name of the analyzer retrieved.
     */
    analyzerName: Name;
  }
  export interface GetAnalyzerResponse {
    /**
     * An AnalyzerSummary object that contains information about the analyzer.
     */
    analyzer: AnalyzerSummary;
  }
  export interface GetArchiveRuleRequest {
    /**
     * The name of the analyzer to retrieve rules from.
     */
    analyzerName: Name;
    /**
     * The name of the rule to retrieve.
     */
    ruleName: Name;
  }
  export interface GetArchiveRuleResponse {
    archiveRule: ArchiveRuleSummary;
  }
  export interface GetFindingRequest {
    /**
     * The ARN of the analyzer that generated the finding.
     */
    analyzerArn: AnalyzerArn;
    /**
     * The ID of the finding to retrieve.
     */
    id: FindingId;
  }
  export interface GetFindingResponse {
    /**
     * A finding object that contains finding details.
     */
    finding?: Finding;
  }
  export interface GetFindingV2Request {
    /**
     * The ARN of the analyzer that generated the finding.
     */
    analyzerArn: AnalyzerArn;
    /**
     * The ID of the finding to retrieve.
     */
    id: FindingId;
    /**
     * The maximum number of results to return in the response.
     */
    maxResults?: Integer;
    /**
     * A token used for pagination of results returned.
     */
    nextToken?: Token;
  }
  export interface GetFindingV2Response {
    /**
     * The time at which the resource-based policy or IAM entity that generated the finding was analyzed.
     */
    analyzedAt: Timestamp;
    /**
     * The time at which the finding was created.
     */
    createdAt: Timestamp;
    /**
     * An error.
     */
    error?: String;
    /**
     * The ID of the finding to retrieve.
     */
    id: FindingId;
    /**
     * A token used for pagination of results returned.
     */
    nextToken?: Token;
    /**
     * The resource that generated the finding.
     */
    resource?: String;
    /**
     * The type of the resource identified in the finding.
     */
    resourceType: ResourceType;
    /**
     * Tye Amazon Web Services account ID that owns the resource.
     */
    resourceOwnerAccount: String;
    /**
     * The status of the finding.
     */
    status: FindingStatus;
    /**
     * The time at which the finding was updated.
     */
    updatedAt: Timestamp;
    /**
     * A localized message that explains the finding and provides guidance on how to address it.
     */
    findingDetails: FindingDetailsList;
    /**
     * The type of the finding. For external access analyzers, the type is ExternalAccess. For unused access analyzers, the type can be UnusedIAMRole, UnusedIAMUserAccessKey, UnusedIAMUserPassword, or UnusedPermission.
     */
    findingType?: FindingType;
  }
  export interface GetGeneratedPolicyRequest {
    /**
     * The JobId that is returned by the StartPolicyGeneration operation. The JobId can be used with GetGeneratedPolicy to retrieve the generated policies or used with CancelPolicyGeneration to cancel the policy generation request.
     */
    jobId: JobId;
    /**
     * The level of detail that you want to generate. You can specify whether to generate policies with placeholders for resource ARNs for actions that support resource level granularity in policies. For example, in the resource section of a policy, you can receive a placeholder such as "Resource":"arn:aws:s3:::${BucketName}" instead of "*".
     */
    includeResourcePlaceholders?: Boolean;
    /**
     * The level of detail that you want to generate. You can specify whether to generate service-level policies.  IAM Access Analyzer uses iam:servicelastaccessed to identify services that have been used recently to create this service-level template.
     */
    includeServiceLevelTemplate?: Boolean;
  }
  export interface GetGeneratedPolicyResponse {
    /**
     * A GeneratedPolicyDetails object that contains details about the generated policy.
     */
    jobDetails: JobDetails;
    /**
     * A GeneratedPolicyResult object that contains the generated policies and associated details.
     */
    generatedPolicyResult: GeneratedPolicyResult;
  }
  export type GranteePrincipal = string;
  export interface IamRoleConfiguration {
    /**
     * The proposed trust policy for the IAM role.
     */
    trustPolicy?: IamTrustPolicy;
  }
  export type IamTrustPolicy = string;
  export interface InlineArchiveRule {
    /**
     * The name of the rule.
     */
    ruleName: Name;
    /**
     * The condition and values for a criterion.
     */
    filter: FilterCriteriaMap;
  }
  export type InlineArchiveRulesList = InlineArchiveRule[];
  export type Integer = number;
  export interface InternetConfiguration {
  }
  export type IssueCode = string;
  export type IssuingAccount = string;
  export interface JobDetails {
    /**
     * The JobId that is returned by the StartPolicyGeneration operation. The JobId can be used with GetGeneratedPolicy to retrieve the generated policies or used with CancelPolicyGeneration to cancel the policy generation request.
     */
    jobId: JobId;
    /**
     * The status of the job request.
     */
    status: JobStatus;
    /**
     * A timestamp of when the job was started.
     */
    startedOn: Timestamp;
    /**
     * A timestamp of when the job was completed.
     */
    completedOn?: Timestamp;
    /**
     * The job error for the policy generation request.
     */
    jobError?: JobError;
  }
  export interface JobError {
    /**
     * The job error code.
     */
    code: JobErrorCode;
    /**
     * Specific information about the error. For example, which service quota was exceeded or which resource was not found.
     */
    message: String;
  }
  export type JobErrorCode = "AUTHORIZATION_ERROR"|"RESOURCE_NOT_FOUND_ERROR"|"SERVICE_QUOTA_EXCEEDED_ERROR"|"SERVICE_ERROR"|string;
  export type JobId = string;
  export type JobStatus = "IN_PROGRESS"|"SUCCEEDED"|"FAILED"|"CANCELED"|string;
  export type KmsConstraintsKey = string;
  export type KmsConstraintsMap = {[key: string]: KmsConstraintsValue};
  export type KmsConstraintsValue = string;
  export interface KmsGrantConfiguration {
    /**
     * A list of operations that the grant permits.
     */
    operations: KmsGrantOperationsList;
    /**
     * The principal that is given permission to perform the operations that the grant permits.
     */
    granteePrincipal: GranteePrincipal;
    /**
     * The principal that is given permission to retire the grant by using RetireGrant operation.
     */
    retiringPrincipal?: RetiringPrincipal;
    /**
     * Use this structure to propose allowing cryptographic operations in the grant only when the operation request includes the specified encryption context.
     */
    constraints?: KmsGrantConstraints;
    /**
     *  The Amazon Web Services account under which the grant was issued. The account is used to propose KMS grants issued by accounts other than the owner of the key.
     */
    issuingAccount: IssuingAccount;
  }
  export type KmsGrantConfigurationsList = KmsGrantConfiguration[];
  export interface KmsGrantConstraints {
    /**
     * A list of key-value pairs that must match the encryption context in the cryptographic operation request. The grant allows the operation only when the encryption context in the request is the same as the encryption context specified in this constraint.
     */
    encryptionContextEquals?: KmsConstraintsMap;
    /**
     * A list of key-value pairs that must be included in the encryption context of the cryptographic operation request. The grant allows the cryptographic operation only when the encryption context in the request includes the key-value pairs specified in this constraint, although it can include additional key-value pairs.
     */
    encryptionContextSubset?: KmsConstraintsMap;
  }
  export type KmsGrantOperation = "CreateGrant"|"Decrypt"|"DescribeKey"|"Encrypt"|"GenerateDataKey"|"GenerateDataKeyPair"|"GenerateDataKeyPairWithoutPlaintext"|"GenerateDataKeyWithoutPlaintext"|"GetPublicKey"|"ReEncryptFrom"|"ReEncryptTo"|"RetireGrant"|"Sign"|"Verify"|string;
  export type KmsGrantOperationsList = KmsGrantOperation[];
  export interface KmsKeyConfiguration {
    /**
     * Resource policy configuration for the KMS key. The only valid value for the name of the key policy is default. For more information, see Default key policy.
     */
    keyPolicies?: KmsKeyPoliciesMap;
    /**
     * A list of proposed grant configurations for the KMS key. If the proposed grant configuration is for an existing key, the access preview uses the proposed list of grant configurations in place of the existing grants. Otherwise, the access preview uses the existing grants for the key.
     */
    grants?: KmsGrantConfigurationsList;
  }
  export type KmsKeyPoliciesMap = {[key: string]: KmsKeyPolicy};
  export type KmsKeyPolicy = string;
  export type LearnMoreLink = string;
  export interface ListAccessPreviewFindingsRequest {
    /**
     * The unique ID for the access preview.
     */
    accessPreviewId: AccessPreviewId;
    /**
     * The ARN of the analyzer used to generate the access.
     */
    analyzerArn: AnalyzerArn;
    /**
     * Criteria to filter the returned findings.
     */
    filter?: FilterCriteriaMap;
    /**
     * A token used for pagination of results returned.
     */
    nextToken?: Token;
    /**
     * The maximum number of results to return in the response.
     */
    maxResults?: Integer;
  }
  export interface ListAccessPreviewFindingsResponse {
    /**
     * A list of access preview findings that match the specified filter criteria.
     */
    findings: AccessPreviewFindingsList;
    /**
     * A token used for pagination of results returned.
     */
    nextToken?: Token;
  }
  export interface ListAccessPreviewsRequest {
    /**
     * The ARN of the analyzer used to generate the access preview.
     */
    analyzerArn: AnalyzerArn;
    /**
     * A token used for pagination of results returned.
     */
    nextToken?: Token;
    /**
     * The maximum number of results to return in the response.
     */
    maxResults?: Integer;
  }
  export interface ListAccessPreviewsResponse {
    /**
     * A list of access previews retrieved for the analyzer.
     */
    accessPreviews: AccessPreviewsList;
    /**
     * A token used for pagination of results returned.
     */
    nextToken?: Token;
  }
  export interface ListAnalyzedResourcesRequest {
    /**
     * The ARN of the analyzer to retrieve a list of analyzed resources from.
     */
    analyzerArn: AnalyzerArn;
    /**
     * The type of resource.
     */
    resourceType?: ResourceType;
    /**
     * A token used for pagination of results returned.
     */
    nextToken?: Token;
    /**
     * The maximum number of results to return in the response.
     */
    maxResults?: Integer;
  }
  export interface ListAnalyzedResourcesResponse {
    /**
     * A list of resources that were analyzed.
     */
    analyzedResources: AnalyzedResourcesList;
    /**
     * A token used for pagination of results returned.
     */
    nextToken?: Token;
  }
  export interface ListAnalyzersRequest {
    /**
     * A token used for pagination of results returned.
     */
    nextToken?: Token;
    /**
     * The maximum number of results to return in the response.
     */
    maxResults?: Integer;
    /**
     * The type of analyzer.
     */
    type?: Type;
  }
  export interface ListAnalyzersResponse {
    /**
     * The analyzers retrieved.
     */
    analyzers: AnalyzersList;
    /**
     * A token used for pagination of results returned.
     */
    nextToken?: Token;
  }
  export interface ListArchiveRulesRequest {
    /**
     * The name of the analyzer to retrieve rules from.
     */
    analyzerName: Name;
    /**
     * A token used for pagination of results returned.
     */
    nextToken?: Token;
    /**
     * The maximum number of results to return in the request.
     */
    maxResults?: Integer;
  }
  export interface ListArchiveRulesResponse {
    /**
     * A list of archive rules created for the specified analyzer.
     */
    archiveRules: ArchiveRulesList;
    /**
     * A token used for pagination of results returned.
     */
    nextToken?: Token;
  }
  export interface ListFindingsRequest {
    /**
     * The ARN of the analyzer to retrieve findings from.
     */
    analyzerArn: AnalyzerArn;
    /**
     * A filter to match for the findings to return.
     */
    filter?: FilterCriteriaMap;
    /**
     * The sort order for the findings returned.
     */
    sort?: SortCriteria;
    /**
     * A token used for pagination of results returned.
     */
    nextToken?: Token;
    /**
     * The maximum number of results to return in the response.
     */
    maxResults?: Integer;
  }
  export interface ListFindingsResponse {
    /**
     * A list of findings retrieved from the analyzer that match the filter criteria specified, if any.
     */
    findings: FindingsList;
    /**
     * A token used for pagination of results returned.
     */
    nextToken?: Token;
  }
  export interface ListFindingsV2Request {
    /**
     * The ARN of the analyzer to retrieve findings from.
     */
    analyzerArn: AnalyzerArn;
    /**
     * A filter to match for the findings to return.
     */
    filter?: FilterCriteriaMap;
    /**
     * The maximum number of results to return in the response.
     */
    maxResults?: Integer;
    /**
     * A token used for pagination of results returned.
     */
    nextToken?: Token;
    sort?: SortCriteria;
  }
  export interface ListFindingsV2Response {
    /**
     * A list of findings retrieved from the analyzer that match the filter criteria specified, if any.
     */
    findings: FindingsListV2;
    /**
     * A token used for pagination of results returned.
     */
    nextToken?: Token;
  }
  export interface ListPolicyGenerationsRequest {
    /**
     * The ARN of the IAM entity (user or role) for which you are generating a policy. Use this with ListGeneratedPolicies to filter the results to only include results for a specific principal.
     */
    principalArn?: PrincipalArn;
    /**
     * The maximum number of results to return in the response.
     */
    maxResults?: ListPolicyGenerationsRequestMaxResultsInteger;
    /**
     * A token used for pagination of results returned.
     */
    nextToken?: Token;
  }
  export type ListPolicyGenerationsRequestMaxResultsInteger = number;
  export interface ListPolicyGenerationsResponse {
    /**
     * A PolicyGeneration object that contains details about the generated policy.
     */
    policyGenerations: PolicyGenerationList;
    /**
     * A token used for pagination of results returned.
     */
    nextToken?: Token;
  }
  export interface ListTagsForResourceRequest {
    /**
     * The ARN of the resource to retrieve tags from.
     */
    resourceArn: String;
  }
  export interface ListTagsForResourceResponse {
    /**
     * The tags that are applied to the specified resource.
     */
    tags?: TagsMap;
  }
  export type Locale = "DE"|"EN"|"ES"|"FR"|"IT"|"JA"|"KO"|"PT_BR"|"ZH_CN"|"ZH_TW"|string;
  export interface Location {
    /**
     * A path in a policy, represented as a sequence of path elements.
     */
    path: PathElementList;
    /**
     * A span in a policy.
     */
    span: Span;
  }
  export type LocationList = Location[];
  export type Name = string;
  export interface NetworkOriginConfiguration {
    vpcConfiguration?: VpcConfiguration;
    /**
     * The configuration for the Amazon S3 access point or multi-region access point with an Internet origin.
     */
    internetConfiguration?: InternetConfiguration;
  }
  export type OrderBy = "ASC"|"DESC"|string;
  export interface PathElement {
    /**
     * Refers to an index in a JSON array.
     */
    index?: Integer;
    /**
     * Refers to a key in a JSON object.
     */
    key?: String;
    /**
     * Refers to a substring of a literal string in a JSON object.
     */
    substring?: Substring;
    /**
     * Refers to the value associated with a given key in a JSON object.
     */
    value?: String;
  }
  export type PathElementList = PathElement[];
  export type PolicyDocument = string;
  export interface PolicyGeneration {
    /**
     * The JobId that is returned by the StartPolicyGeneration operation. The JobId can be used with GetGeneratedPolicy to retrieve the generated policies or used with CancelPolicyGeneration to cancel the policy generation request.
     */
    jobId: JobId;
    /**
     * The ARN of the IAM entity (user or role) for which you are generating a policy.
     */
    principalArn: PrincipalArn;
    /**
     * The status of the policy generation request.
     */
    status: JobStatus;
    /**
     * A timestamp of when the policy generation started.
     */
    startedOn: Timestamp;
    /**
     * A timestamp of when the policy generation was completed.
     */
    completedOn?: Timestamp;
  }
  export interface PolicyGenerationDetails {
    /**
     * The ARN of the IAM entity (user or role) for which you are generating a policy.
     */
    principalArn: PrincipalArn;
  }
  export type PolicyGenerationList = PolicyGeneration[];
  export type PolicyName = string;
  export type PolicyType = "IDENTITY_POLICY"|"RESOURCE_POLICY"|"SERVICE_CONTROL_POLICY"|string;
  export interface Position {
    /**
     * The line of the position, starting from 1.
     */
    line: Integer;
    /**
     * The column of the position, starting from 0.
     */
    column: Integer;
    /**
     * The offset within the policy that corresponds to the position, starting from 0.
     */
    offset: Integer;
  }
  export type PrincipalArn = string;
  export type PrincipalMap = {[key: string]: String};
  export type RdsDbClusterSnapshotAccountId = string;
  export type RdsDbClusterSnapshotAccountIdsList = RdsDbClusterSnapshotAccountId[];
  export type RdsDbClusterSnapshotAttributeName = string;
  export interface RdsDbClusterSnapshotAttributeValue {
    /**
     * The Amazon Web Services account IDs that have access to the manual Amazon RDS DB cluster snapshot. If the value all is specified, then the Amazon RDS DB cluster snapshot is public and can be copied or restored by all Amazon Web Services accounts.   If the configuration is for an existing Amazon RDS DB cluster snapshot and you do not specify the accountIds in RdsDbClusterSnapshotAttributeValue, then the access preview uses the existing shared accountIds for the snapshot.   If the access preview is for a new resource and you do not specify the specify the accountIds in RdsDbClusterSnapshotAttributeValue, then the access preview considers the snapshot without any attributes.   To propose deletion of existing shared accountIds, you can specify an empty list for accountIds in the RdsDbClusterSnapshotAttributeValue.  
     */
    accountIds?: RdsDbClusterSnapshotAccountIdsList;
  }
  export type RdsDbClusterSnapshotAttributesMap = {[key: string]: RdsDbClusterSnapshotAttributeValue};
  export interface RdsDbClusterSnapshotConfiguration {
    /**
     * The names and values of manual DB cluster snapshot attributes. Manual DB cluster snapshot attributes are used to authorize other Amazon Web Services accounts to restore a manual DB cluster snapshot. The only valid value for AttributeName for the attribute map is restore 
     */
    attributes?: RdsDbClusterSnapshotAttributesMap;
    /**
     * The KMS key identifier for an encrypted Amazon RDS DB cluster snapshot. The KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.   If the configuration is for an existing Amazon RDS DB cluster snapshot and you do not specify the kmsKeyId, or you specify an empty string, then the access preview uses the existing kmsKeyId of the snapshot.   If the access preview is for a new resource and you do not specify the specify the kmsKeyId, then the access preview considers the snapshot as unencrypted.  
     */
    kmsKeyId?: RdsDbClusterSnapshotKmsKeyId;
  }
  export type RdsDbClusterSnapshotKmsKeyId = string;
  export type RdsDbSnapshotAccountId = string;
  export type RdsDbSnapshotAccountIdsList = RdsDbSnapshotAccountId[];
  export type RdsDbSnapshotAttributeName = string;
  export interface RdsDbSnapshotAttributeValue {
    /**
     * The Amazon Web Services account IDs that have access to the manual Amazon RDS DB snapshot. If the value all is specified, then the Amazon RDS DB snapshot is public and can be copied or restored by all Amazon Web Services accounts.   If the configuration is for an existing Amazon RDS DB snapshot and you do not specify the accountIds in RdsDbSnapshotAttributeValue, then the access preview uses the existing shared accountIds for the snapshot.   If the access preview is for a new resource and you do not specify the specify the accountIds in RdsDbSnapshotAttributeValue, then the access preview considers the snapshot without any attributes.   To propose deletion of an existing shared accountIds, you can specify an empty list for accountIds in the RdsDbSnapshotAttributeValue.  
     */
    accountIds?: RdsDbSnapshotAccountIdsList;
  }
  export type RdsDbSnapshotAttributesMap = {[key: string]: RdsDbSnapshotAttributeValue};
  export interface RdsDbSnapshotConfiguration {
    /**
     * The names and values of manual DB snapshot attributes. Manual DB snapshot attributes are used to authorize other Amazon Web Services accounts to restore a manual DB snapshot. The only valid value for attributeName for the attribute map is restore.
     */
    attributes?: RdsDbSnapshotAttributesMap;
    /**
     * The KMS key identifier for an encrypted Amazon RDS DB snapshot. The KMS key identifier is the key ARN, key ID, alias ARN, or alias name for the KMS key.   If the configuration is for an existing Amazon RDS DB snapshot and you do not specify the kmsKeyId, or you specify an empty string, then the access preview uses the existing kmsKeyId of the snapshot.   If the access preview is for a new resource and you do not specify the specify the kmsKeyId, then the access preview considers the snapshot as unencrypted.  
     */
    kmsKeyId?: RdsDbSnapshotKmsKeyId;
  }
  export type RdsDbSnapshotKmsKeyId = string;
  export type ReasonCode = "AWS_SERVICE_ACCESS_DISABLED"|"DELEGATED_ADMINISTRATOR_DEREGISTERED"|"ORGANIZATION_DELETED"|"SERVICE_LINKED_ROLE_CREATION_FAILED"|string;
  export interface ReasonSummary {
    /**
     * A description of the reasoning of a result of checking for access.
     */
    description?: String;
    /**
     * The index number of the reason statement.
     */
    statementIndex?: Integer;
    /**
     * The identifier for the reason statement.
     */
    statementId?: String;
  }
  export type ReasonSummaryList = ReasonSummary[];
  export type RegionList = String[];
  export type ResourceArn = string;
  export type ResourceType = "AWS::S3::Bucket"|"AWS::IAM::Role"|"AWS::SQS::Queue"|"AWS::Lambda::Function"|"AWS::Lambda::LayerVersion"|"AWS::KMS::Key"|"AWS::SecretsManager::Secret"|"AWS::EFS::FileSystem"|"AWS::EC2::Snapshot"|"AWS::ECR::Repository"|"AWS::RDS::DBSnapshot"|"AWS::RDS::DBClusterSnapshot"|"AWS::SNS::Topic"|"AWS::S3Express::DirectoryBucket"|string;
  export type RetiringPrincipal = string;
  export type RoleArn = string;
  export interface S3AccessPointConfiguration {
    /**
     * The access point or multi-region access point policy.
     */
    accessPointPolicy?: AccessPointPolicy;
    /**
     * The proposed S3PublicAccessBlock configuration to apply to this Amazon S3 access point or multi-region access point.
     */
    publicAccessBlock?: S3PublicAccessBlockConfiguration;
    /**
     * The proposed Internet and VpcConfiguration to apply to this Amazon S3 access point. VpcConfiguration does not apply to multi-region access points. If the access preview is for a new resource and neither is specified, the access preview uses Internet for the network origin. If the access preview is for an existing resource and neither is specified, the access preview uses the exiting network origin.
     */
    networkOrigin?: NetworkOriginConfiguration;
  }
  export type S3AccessPointConfigurationsMap = {[key: string]: S3AccessPointConfiguration};
  export interface S3BucketAclGrantConfiguration {
    /**
     * The permissions being granted.
     */
    permission: AclPermission;
    /**
     * The grantee to whom you’re assigning access rights.
     */
    grantee: AclGrantee;
  }
  export type S3BucketAclGrantConfigurationsList = S3BucketAclGrantConfiguration[];
  export interface S3BucketConfiguration {
    /**
     * The proposed bucket policy for the Amazon S3 bucket.
     */
    bucketPolicy?: S3BucketPolicy;
    /**
     * The proposed list of ACL grants for the Amazon S3 bucket. You can propose up to 100 ACL grants per bucket. If the proposed grant configuration is for an existing bucket, the access preview uses the proposed list of grant configurations in place of the existing grants. Otherwise, the access preview uses the existing grants for the bucket.
     */
    bucketAclGrants?: S3BucketAclGrantConfigurationsList;
    /**
     * The proposed block public access configuration for the Amazon S3 bucket.
     */
    bucketPublicAccessBlock?: S3PublicAccessBlockConfiguration;
    /**
     * The configuration of Amazon S3 access points or multi-region access points for the bucket. You can propose up to 10 new access points per bucket.
     */
    accessPoints?: S3AccessPointConfigurationsMap;
  }
  export type S3BucketPolicy = string;
  export interface S3ExpressDirectoryBucketConfiguration {
    /**
     * The proposed bucket policy for the Amazon S3 directory bucket.
     */
    bucketPolicy?: S3ExpressDirectoryBucketPolicy;
  }
  export type S3ExpressDirectoryBucketPolicy = string;
  export interface S3PublicAccessBlockConfiguration {
    /**
     *  Specifies whether Amazon S3 should ignore public ACLs for this bucket and objects in this bucket. 
     */
    ignorePublicAcls: Boolean;
    /**
     *  Specifies whether Amazon S3 should restrict public bucket policies for this bucket. 
     */
    restrictPublicBuckets: Boolean;
  }
  export interface SecretsManagerSecretConfiguration {
    /**
     * The proposed ARN, key ID, or alias of the KMS key.
     */
    kmsKeyId?: SecretsManagerSecretKmsId;
    /**
     * The proposed resource policy defining who can access or manage the secret.
     */
    secretPolicy?: SecretsManagerSecretPolicy;
  }
  export type SecretsManagerSecretKmsId = string;
  export type SecretsManagerSecretPolicy = string;
  export type SharedViaList = String[];
  export interface SnsTopicConfiguration {
    /**
     * The JSON policy text that defines who can access an Amazon SNS topic. For more information, see Example cases for Amazon SNS access control in the Amazon SNS Developer Guide.
     */
    topicPolicy?: SnsTopicPolicy;
  }
  export type SnsTopicPolicy = string;
  export interface SortCriteria {
    /**
     * The name of the attribute to sort on.
     */
    attributeName?: String;
    /**
     * The sort order, ascending or descending.
     */
    orderBy?: OrderBy;
  }
  export interface Span {
    /**
     * The start position of the span (inclusive).
     */
    start: Position;
    /**
     * The end position of the span (exclusive).
     */
    end: Position;
  }
  export interface SqsQueueConfiguration {
    /**
     *  The proposed resource policy for the Amazon SQS queue. 
     */
    queuePolicy?: SqsQueuePolicy;
  }
  export type SqsQueuePolicy = string;
  export interface StartPolicyGenerationRequest {
    /**
     * Contains the ARN of the IAM entity (user or role) for which you are generating a policy.
     */
    policyGenerationDetails: PolicyGenerationDetails;
    /**
     * A CloudTrailDetails object that contains details about a Trail that you want to analyze to generate policies.
     */
    cloudTrailDetails?: CloudTrailDetails;
    /**
     * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, the subsequent retries with the same client token return the result from the original successful request and they have no additional effect. If you do not specify a client token, one is automatically generated by the Amazon Web Services SDK.
     */
    clientToken?: String;
  }
  export interface StartPolicyGenerationResponse {
    /**
     * The JobId that is returned by the StartPolicyGeneration operation. The JobId can be used with GetGeneratedPolicy to retrieve the generated policies or used with CancelPolicyGeneration to cancel the policy generation request.
     */
    jobId: JobId;
  }
  export interface StartResourceScanRequest {
    /**
     * The ARN of the analyzer to use to scan the policies applied to the specified resource.
     */
    analyzerArn: AnalyzerArn;
    /**
     * The ARN of the resource to scan.
     */
    resourceArn: ResourceArn;
    /**
     * The Amazon Web Services account ID that owns the resource. For most Amazon Web Services resources, the owning account is the account in which the resource was created.
     */
    resourceOwnerAccount?: String;
  }
  export interface StatusReason {
    /**
     * The reason code for the current status of the analyzer.
     */
    code: ReasonCode;
  }
  export type String = string;
  export interface Substring {
    /**
     * The start index of the substring, starting from 0.
     */
    start: Integer;
    /**
     * The length of the substring.
     */
    length: Integer;
  }
  export type TagKeys = String[];
  export interface TagResourceRequest {
    /**
     * The ARN of the resource to add the tag to.
     */
    resourceArn: String;
    /**
     * The tags to add to the resource.
     */
    tags: TagsMap;
  }
  export interface TagResourceResponse {
  }
  export type TagsMap = {[key: string]: String};
  export type Timestamp = Date;
  export type Token = string;
  export interface Trail {
    /**
     * Specifies the ARN of the trail. The format of a trail ARN is arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail.
     */
    cloudTrailArn: CloudTrailArn;
    /**
     * A list of regions to get CloudTrail data from and analyze to generate a policy.
     */
    regions?: RegionList;
    /**
     * Possible values are true or false. If set to true, IAM Access Analyzer retrieves CloudTrail data from all regions to analyze and generate a policy.
     */
    allRegions?: Boolean;
  }
  export type TrailList = Trail[];
  export interface TrailProperties {
    /**
     * Specifies the ARN of the trail. The format of a trail ARN is arn:aws:cloudtrail:us-east-2:123456789012:trail/MyTrail.
     */
    cloudTrailArn: CloudTrailArn;
    /**
     * A list of regions to get CloudTrail data from and analyze to generate a policy.
     */
    regions?: RegionList;
    /**
     * Possible values are true or false. If set to true, IAM Access Analyzer retrieves CloudTrail data from all regions to analyze and generate a policy.
     */
    allRegions?: Boolean;
  }
  export type TrailPropertiesList = TrailProperties[];
  export type Type = "ACCOUNT"|"ORGANIZATION"|"ACCOUNT_UNUSED_ACCESS"|"ORGANIZATION_UNUSED_ACCESS"|string;
  export interface UntagResourceRequest {
    /**
     * The ARN of the resource to remove the tag from.
     */
    resourceArn: String;
    /**
     * The key for the tag to add.
     */
    tagKeys: TagKeys;
  }
  export interface UntagResourceResponse {
  }
  export interface UnusedAccessConfiguration {
    /**
     * The specified access age in days for which to generate findings for unused access. For example, if you specify 90 days, the analyzer will generate findings for IAM entities within the accounts of the selected organization for any access that hasn't been used in 90 or more days since the analyzer's last scan. You can choose a value between 1 and 180 days.
     */
    unusedAccessAge?: Integer;
  }
  export interface UnusedAction {
    /**
     * The action for which the unused access finding was generated.
     */
    action: String;
    /**
     * The time at which the action was last accessed.
     */
    lastAccessed?: Timestamp;
  }
  export type UnusedActionList = UnusedAction[];
  export interface UnusedIamRoleDetails {
    /**
     * The time at which the role was last accessed.
     */
    lastAccessed?: Timestamp;
  }
  export interface UnusedIamUserAccessKeyDetails {
    /**
     * The ID of the access key for which the unused access finding was generated.
     */
    accessKeyId: String;
    /**
     * The time at which the access key was last accessed.
     */
    lastAccessed?: Timestamp;
  }
  export interface UnusedIamUserPasswordDetails {
    /**
     * The time at which the password was last accessed.
     */
    lastAccessed?: Timestamp;
  }
  export interface UnusedPermissionDetails {
    /**
     * A list of unused actions for which the unused access finding was generated.
     */
    actions?: UnusedActionList;
    /**
     * The namespace of the Amazon Web Services service that contains the unused actions.
     */
    serviceNamespace: String;
    /**
     * The time at which the permission last accessed.
     */
    lastAccessed?: Timestamp;
  }
  export interface UpdateArchiveRuleRequest {
    /**
     * The name of the analyzer to update the archive rules for.
     */
    analyzerName: Name;
    /**
     * The name of the rule to update.
     */
    ruleName: Name;
    /**
     * A filter to match for the rules to update. Only rules that match the filter are updated.
     */
    filter: FilterCriteriaMap;
    /**
     * A client token.
     */
    clientToken?: String;
  }
  export interface UpdateFindingsRequest {
    /**
     * The ARN of the analyzer that generated the findings to update.
     */
    analyzerArn: AnalyzerArn;
    /**
     * The state represents the action to take to update the finding Status. Use ARCHIVE to change an Active finding to an Archived finding. Use ACTIVE to change an Archived finding to an Active finding.
     */
    status: FindingStatusUpdate;
    /**
     * The IDs of the findings to update.
     */
    ids?: FindingIdList;
    /**
     * The ARN of the resource identified in the finding.
     */
    resourceArn?: ResourceArn;
    /**
     * A client token.
     */
    clientToken?: String;
  }
  export interface ValidatePolicyFinding {
    /**
     * A localized message that explains the finding and provides guidance on how to address it.
     */
    findingDetails: String;
    /**
     * The impact of the finding. Security warnings report when the policy allows access that we consider overly permissive. Errors report when a part of the policy is not functional. Warnings report non-security issues when a policy does not conform to policy writing best practices. Suggestions recommend stylistic improvements in the policy that do not impact access.
     */
    findingType: ValidatePolicyFindingType;
    /**
     * The issue code provides an identifier of the issue associated with this finding.
     */
    issueCode: IssueCode;
    /**
     * A link to additional documentation about the type of finding.
     */
    learnMoreLink: LearnMoreLink;
    /**
     * The list of locations in the policy document that are related to the finding. The issue code provides a summary of an issue identified by the finding.
     */
    locations: LocationList;
  }
  export type ValidatePolicyFindingList = ValidatePolicyFinding[];
  export type ValidatePolicyFindingType = "ERROR"|"SECURITY_WARNING"|"SUGGESTION"|"WARNING"|string;
  export interface ValidatePolicyRequest {
    /**
     * The locale to use for localizing the findings.
     */
    locale?: Locale;
    /**
     * The maximum number of results to return in the response.
     */
    maxResults?: Integer;
    /**
     * A token used for pagination of results returned.
     */
    nextToken?: Token;
    /**
     * The JSON policy document to use as the content for the policy.
     */
    policyDocument: PolicyDocument;
    /**
     * The type of policy to validate. Identity policies grant permissions to IAM principals. Identity policies include managed and inline policies for IAM roles, users, and groups. Resource policies grant permissions on Amazon Web Services resources. Resource policies include trust policies for IAM roles and bucket policies for Amazon S3 buckets. You can provide a generic input such as identity policy or resource policy or a specific input such as managed policy or Amazon S3 bucket policy.  Service control policies (SCPs) are a type of organization policy attached to an Amazon Web Services organization, organizational unit (OU), or an account.
     */
    policyType: PolicyType;
    /**
     * The type of resource to attach to your resource policy. Specify a value for the policy validation resource type only if the policy type is RESOURCE_POLICY. For example, to validate a resource policy to attach to an Amazon S3 bucket, you can choose AWS::S3::Bucket for the policy validation resource type. For resource types not supported as valid values, IAM Access Analyzer runs policy checks that apply to all resource policies. For example, to validate a resource policy to attach to a KMS key, do not specify a value for the policy validation resource type and IAM Access Analyzer will run policy checks that apply to all resource policies.
     */
    validatePolicyResourceType?: ValidatePolicyResourceType;
  }
  export type ValidatePolicyResourceType = "AWS::S3::Bucket"|"AWS::S3::AccessPoint"|"AWS::S3::MultiRegionAccessPoint"|"AWS::S3ObjectLambda::AccessPoint"|"AWS::IAM::AssumeRolePolicyDocument"|string;
  export interface ValidatePolicyResponse {
    /**
     * The list of findings in a policy returned by IAM Access Analyzer based on its suite of policy checks.
     */
    findings: ValidatePolicyFindingList;
    /**
     * A token used for pagination of results returned.
     */
    nextToken?: Token;
  }
  export type ValueList = String[];
  export interface VpcConfiguration {
    /**
     *  If this field is specified, this access point will only allow connections from the specified VPC ID. 
     */
    vpcId: VpcId;
  }
  export type VpcId = string;
  /**
   * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
   */
  export type apiVersion = "2019-11-01"|"latest"|string;
  export interface ClientApiVersions {
    /**
     * A string in YYYY-MM-DD format that represents the latest possible API version that can be used in this service. Specify 'latest' to use the latest possible version.
     */
    apiVersion?: apiVersion;
  }
  export type ClientConfiguration = ServiceConfigurationOptions & ClientApiVersions;
  /**
   * Contains interfaces for use with the AccessAnalyzer client.
   */
  export import Types = AccessAnalyzer;
}
export = AccessAnalyzer;
