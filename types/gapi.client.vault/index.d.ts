// Type definitions for Google Google Vault API v1 1.0
// Project: https://developers.google.com/vault
// Definitions by: Bolisov Alexey <https://github.com/Bolisov>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

// IMPORTANT
// This file was generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
// In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
// Generated from: https://vault.googleapis.com/$discovery/rest?version=v1

/// <reference types="gapi.client" />

declare namespace gapi.client {
    /** Load Google Vault API v1 */
    function load(name: "vault", version: "v1"): PromiseLike<void>;
    function load(name: "vault", version: "v1", callback: () => any): void;

    const matters: vault.MattersResource;

    namespace vault {
        interface AddMatterPermissionsRequest {
            /**
             * Only relevant if send_emails is true.
             * True to CC requestor in the email message.
             * False to not CC requestor.
             */
            ccMe?: boolean;
            /** The MatterPermission to add. */
            matterPermission?: MatterPermission;
            /**
             * True to send notification email to the added account.
             * False to not send notification email.
             */
            sendEmails?: boolean;
        }
        interface CloseMatterResponse {
            /** The updated matter, with state CLOSED. */
            matter?: Matter;
        }
        interface CorpusQuery {
            /** Details pertaining to Drive holds. If set, corpus must be Drive. */
            driveQuery?: HeldDriveQuery;
            /** Details pertaining to Groups holds. If set, corpus must be Groups. */
            groupsQuery?: HeldGroupsQuery;
            /** Details pertaining to mail holds. If set, corpus must be mail. */
            mailQuery?: HeldMailQuery;
        }
        interface HeldAccount {
            /**
             * The account's ID as provided by the
             * <a href="https://developers.google.com/admin-sdk/">Admin SDK</a>.
             */
            accountId?: string;
            /** When the account was put on hold. */
            holdTime?: string;
        }
        interface HeldDriveQuery {
            /** If true, include files in Team Drives in the hold. */
            includeTeamDriveFiles?: boolean;
        }
        interface HeldGroupsQuery {
            /**
             * The end date range for the search query. These timestamps are in GMT and
             * rounded down to the start of the given date.
             */
            endTime?: string;
            /**
             * The start date range for the search query. These timestamps are in GMT and
             * rounded down to the start of the given date.
             */
            startTime?: string;
            /** The search terms for the hold. */
            terms?: string;
        }
        interface HeldMailQuery {
            /**
             * The end date range for the search query. These timestamps are in GMT and
             * rounded down to the start of the given date.
             */
            endTime?: string;
            /**
             * The start date range for the search query. These timestamps are in GMT and
             * rounded down to the start of the given date.
             */
            startTime?: string;
            /** The search terms for the hold. */
            terms?: string;
        }
        interface HeldOrgUnit {
            /** When the org unit was put on hold. This property is immutable. */
            holdTime?: string;
            /** The org unit's immutable ID as provided by the admin SDK. */
            orgUnitId?: string;
        }
        interface Hold {
            /**
             * If set, the hold applies to the enumerated accounts and org_unit must be
             * empty.
             */
            accounts?: HeldAccount[];
            /** The corpus to be searched. */
            corpus?: string;
            /** The unique immutable ID of the hold. Assigned during creation. */
            holdId?: string;
            /** The name of the hold. */
            name?: string;
            /**
             * If set, the hold applies to all members of the organizational unit and
             * accounts must be empty. This property is mutable. For groups holds,
             * set the accounts field.
             */
            orgUnit?: HeldOrgUnit;
            /**
             * The corpus-specific query. If set, the corpusQuery must match corpus
             * type.
             */
            query?: CorpusQuery;
            /** The last time this hold was modified. */
            updateTime?: string;
        }
        interface ListHeldAccountsResponse {
            /** The held accounts on a hold. */
            accounts?: HeldAccount[];
        }
        interface ListHoldsResponse {
            /** The list of holds. */
            holds?: Hold[];
            /**
             * Page token to retrieve the next page of results in the list.
             * If this is empty, then there are no more holds to list.
             */
            nextPageToken?: string;
        }
        interface ListMattersResponse {
            /** List of matters. */
            matters?: Matter[];
            /** Page token to retrieve the next page of results in the list. */
            nextPageToken?: string;
        }
        interface Matter {
            /** The description of the matter. */
            description?: string;
            /**
             * The matter ID which is generated by the server.
             * Should be blank when creating a new matter.
             */
            matterId?: string;
            /**
             * List of users and access to the matter. Currently there is no programmer
             * defined limit on the number of permissions a matter can have.
             */
            matterPermissions?: MatterPermission[];
            /** The name of the matter. */
            name?: string;
            /** The state of the matter. */
            state?: string;
        }
        interface MatterPermission {
            /** The account id, as provided by <a href="https://developers.google.com/admin-sdk/">Admin SDK</a>. */
            accountId?: string;
            /** The user's role in this matter. */
            role?: string;
        }
        interface RemoveMatterPermissionsRequest {
            /** The account ID. */
            accountId?: string;
        }
        interface ReopenMatterResponse {
            /** The updated matter, with state OPEN. */
            matter?: Matter;
        }
        interface AccountsResource {
            /**
             * Adds a HeldAccount to a hold. Accounts can only be added to a hold that
             * has no held_org_unit set. Attempting to add an account to an OU-based
             * hold will result in an error.
             */
            create(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** The hold ID. */
                holdId: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** The matter ID. */
                matterId: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
            }): Request<HeldAccount>;
            /**
             * Removes a HeldAccount from a hold. If this request leaves the hold with
             * no held accounts, the hold will not apply to any accounts.
             */
            delete(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** The ID of the account to remove from the hold. */
                accountId: string;
                /** Data format for response. */
                alt?: string;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** The hold ID. */
                holdId: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** The matter ID. */
                matterId: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
            }): Request<{}>;
            /**
             * Lists HeldAccounts for a hold. This will only list individually specified
             * held accounts. If the hold is on an OU, then use
             * <a href="https://developers.google.com/admin-sdk/">Admin SDK</a>
             * to enumerate its members.
             */
            list(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** The hold ID. */
                holdId: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** The matter ID. */
                matterId: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
            }): Request<ListHeldAccountsResponse>;
        }
        interface HoldsResource {
            /** Creates a hold in the given matter. */
            create(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** The matter ID. */
                matterId: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
            }): Request<Hold>;
            /** Removes a hold by ID. This will release any HeldAccounts on this Hold. */
            delete(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** The hold ID. */
                holdId: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** The matter ID. */
                matterId: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
            }): Request<{}>;
            /** Gets a hold by ID. */
            get(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** The hold ID. */
                holdId: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** The matter ID. */
                matterId: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
            }): Request<Hold>;
            /**
             * Lists holds within a matter. An empty page token in ListHoldsResponse
             * denotes no more holds to list.
             */
            list(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** The matter ID. */
                matterId: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /**
                 * The number of holds to return in the response, between 0 and 100 inclusive.
                 * Leaving this empty, or as 0, is the same as page_size = 100.
                 */
                pageSize?: number;
                /**
                 * The pagination token as returned in the response.
                 * An empty token means start from the beginning.
                 */
                pageToken?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
            }): Request<ListHoldsResponse>;
            /**
             * Updates the OU and/or query parameters of a hold. You cannot add accounts
             * to a hold that covers an OU, nor can you add OUs to a hold that covers
             * individual accounts. Accounts listed in the hold will be ignored.
             */
            update(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** The ID of the hold. */
                holdId: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** The matter ID. */
                matterId: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
            }): Request<Hold>;
            accounts: AccountsResource;
        }
        interface MattersResource {
            /** Adds an account as a matter collaborator. */
            addPermissions(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** The matter ID. */
                matterId: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
            }): Request<MatterPermission>;
            /** Closes the specified matter. Returns matter with updated state. */
            close(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** The matter ID. */
                matterId: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
            }): Request<CloseMatterResponse>;
            /**
             * Creates a new matter with the given name and description. The initial state
             * is open, and the owner is the method caller. Returns the created matter
             * with default view.
             */
            create(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
            }): Request<Matter>;
            /** Deletes the specified matter. Returns matter with updated state. */
            delete(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** The matter ID */
                matterId: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
            }): Request<Matter>;
            /** Gets the specified matter. */
            get(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** The matter ID. */
                matterId: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Specifies which parts of the Matter to return in the response. */
                view?: string;
            }): Request<Matter>;
            /** Lists matters the user has access to. */
            list(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /**
                 * The number of matters to return in the response.
                 * Default and maximum are 100.
                 */
                pageSize?: number;
                /** The pagination token as returned in the response. */
                pageToken?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /**
                 * If set, list only matters with that specific state. The default is listing
                 * matters of all states.
                 */
                state?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
                /** Specifies which parts of the matter to return in response. */
                view?: string;
            }): Request<ListMattersResponse>;
            /** Removes an account as a matter collaborator. */
            removePermissions(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** The matter ID. */
                matterId: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
            }): Request<{}>;
            /** Reopens the specified matter. Returns matter with updated state. */
            reopen(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** The matter ID. */
                matterId: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
            }): Request<ReopenMatterResponse>;
            /** Undeletes the specified matter. Returns matter with updated state. */
            undelete(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** The matter ID. */
                matterId: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
            }): Request<Matter>;
            /**
             * Updates the specified matter.
             * This updates only the name and description of the matter, identified by
             * matter id. Changes to any other fields are ignored.
             * Returns the default view of the matter.
             */
            update(request: {
                /** V1 error format. */
                "$.xgafv"?: string;
                /** OAuth access token. */
                access_token?: string;
                /** Data format for response. */
                alt?: string;
                /** OAuth bearer token. */
                bearer_token?: string;
                /** JSONP */
                callback?: string;
                /** Selector specifying which fields to include in a partial response. */
                fields?: string;
                /** API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token. */
                key?: string;
                /** The matter ID. */
                matterId: string;
                /** OAuth 2.0 token for the current user. */
                oauth_token?: string;
                /** Pretty-print response. */
                pp?: boolean;
                /** Returns response with indentations and line breaks. */
                prettyPrint?: boolean;
                /** Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters. */
                quotaUser?: string;
                /** Legacy upload protocol for media (e.g. "media", "multipart"). */
                uploadType?: string;
                /** Upload protocol for media (e.g. "raw", "multipart"). */
                upload_protocol?: string;
            }): Request<Matter>;
            holds: HoldsResource;
        }
    }
}
