/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseResponse_boolean_ } from '../models/BaseResponse_boolean_';
import type { BaseResponse_List_QuestionGroupVO_ } from '../models/BaseResponse_List_QuestionGroupVO_';
import type { BaseResponse_List_UserGroup_ } from '../models/BaseResponse_List_UserGroup_';
import type { BaseResponse_long_ } from '../models/BaseResponse_long_';
import type { BaseResponse_Page_QuestionGroup_ } from '../models/BaseResponse_Page_QuestionGroup_';
import type { BaseResponse_Page_UserGroup_ } from '../models/BaseResponse_Page_UserGroup_';
import type { BaseResponse_QuestionGroupVO_ } from '../models/BaseResponse_QuestionGroupVO_';
import type { BaseResponse_UserGroupVO_ } from '../models/BaseResponse_UserGroupVO_';
import type { DeleteRequest } from '../models/DeleteRequest';
import type { QuestionGroupAddRequest } from '../models/QuestionGroupAddRequest';
import type { QuestionGroupQueryRequest } from '../models/QuestionGroupQueryRequest';
import type { QuestionGroupUpdateRequest } from '../models/QuestionGroupUpdateRequest';
import type { UserGroupAddRequest } from '../models/UserGroupAddRequest';
import type { UserGroupQueryRequest } from '../models/UserGroupQueryRequest';
import type { UserGroupUpdateRequest } from '../models/UserGroupUpdateRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class QuestionGroupControllerService {
    /**
     * addQuestionGroup
     * @param questionGroupAddRequest questionGroupAddRequest
     * @returns BaseResponse_long_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addQuestionGroupUsingPost(
        questionGroupAddRequest: QuestionGroupAddRequest,
    ): CancelablePromise<BaseResponse_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/questiongroup/add',
            body: questionGroupAddRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * addExpAndAnn
     * @param announcement
     * @param explanation
     * @param id
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addExpAndAnnUsingPost(
        announcement?: string,
        explanation?: string,
        id?: number,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/questiongroup/addExpAndAnn',
            query: {
                'announcement': announcement,
                'explanation': explanation,
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * addQuestion
     * @param questionGroupId
     * @param questionIdList
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addQuestionUsingPost1(
        questionGroupId?: number,
        questionIdList?: Array<number>,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/questiongroup/add_question',
            query: {
                'questionGroupId': questionGroupId,
                'questionIdList': questionIdList,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * addUserGroup
     * @param questionGroupId
     * @param userGroupIdList
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addUserGroupUsingPost(
        questionGroupId?: number,
        userGroupIdList?: Array<number>,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/questiongroup/add_usergroup',
            query: {
                'questionGroupId': questionGroupId,
                'userGroupIdList': userGroupIdList,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * deleteQuestionGroup
     * @param deleteRequest deleteRequest
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static deleteQuestionGroupUsingPost(
        deleteRequest: DeleteRequest,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/questiongroup/deleteQuestionGroup',
            body: deleteRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * deleteQuestion
     * @param questionGroupId
     * @param questionIdList
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static deleteQuestionUsingPost1(
        questionGroupId?: number,
        questionIdList?: Array<number>,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/questiongroup/delete_question',
            query: {
                'questionGroupId': questionGroupId,
                'questionIdList': questionIdList,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * deleteUserGroup
     * @param questionGroupId
     * @param userGroupIdList
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static deleteUserGroupUsingPost1(
        questionGroupId?: number,
        userGroupIdList?: Array<number>,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/questiongroup/delete_userGroup',
            query: {
                'questionGroupId': questionGroupId,
                'userGroupIdList': userGroupIdList,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getQuestionGroupById
     * @param id id
     * @returns BaseResponse_QuestionGroupVO_ OK
     * @throws ApiError
     */
    public static getQuestionGroupByIdUsingGet(
        id?: number,
    ): CancelablePromise<BaseResponse_QuestionGroupVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/questiongroup/get',
            query: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getAuthorizationQuestionGroup
     * @param userGroupId userGroupId
     * @returns BaseResponse_List_QuestionGroupVO_ OK
     * @throws ApiError
     */
    public static getAuthorizationQuestionGroupUsingGet(
        userGroupId?: number,
    ): CancelablePromise<BaseResponse_List_QuestionGroupVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/questiongroup/getAuthorizationQG',
            query: {
                'userGroupId': userGroupId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getQuestionGroupCount
     * @returns BaseResponse_long_ OK
     * @throws ApiError
     */
    public static getQuestionGroupCountUsingGet(): CancelablePromise<BaseResponse_long_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/questiongroup/getCount',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * listQuestionGroupByPage
     * @param questionGroupQueryRequest questionGroupQueryRequest
     * @returns BaseResponse_Page_QuestionGroup_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static listQuestionGroupByPageUsingPost(
        questionGroupQueryRequest: QuestionGroupQueryRequest,
    ): CancelablePromise<BaseResponse_Page_QuestionGroup_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/questiongroup/list/page',
            body: questionGroupQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * updateQuestionGroup
     * @param questionGroupUpdateRequest questionGroupUpdateRequest
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateQuestionGroupUsingPost(
        questionGroupUpdateRequest: QuestionGroupUpdateRequest,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/questiongroup/update',
            body: questionGroupUpdateRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * updateQuestionGroupTime
     * @param actionTime
     * @param endTime
     * @param id
     * @param limitTime
     * @returns BaseResponse_boolean_ OK
     * @throws ApiError
     */
    public static updateQuestionGroupTimeUsingGet(
        actionTime?: string,
        endTime?: string,
        id?: number,
        limitTime?: number,
    ): CancelablePromise<BaseResponse_boolean_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/questiongroup/updateTime',
            query: {
                'actionTime': actionTime,
                'endTime': endTime,
                'id': id,
                'limitTime': limitTime,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * addUserGroup
     * @param userGroupAddRequest userGroupAddRequest
     * @returns BaseResponse_long_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addUserGroupUsingPost1(
        userGroupAddRequest: UserGroupAddRequest,
    ): CancelablePromise<BaseResponse_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/questiongroup/user_group/add',
            body: userGroupAddRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * addUser
     * @param userGroupId
     * @param userIdList
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addUserUsingPost(
        userGroupId?: number,
        userIdList?: Array<number>,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/questiongroup/user_group/add_user',
            query: {
                'userGroupId': userGroupId,
                'userIdList': userIdList,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * deleteUserGroup
     * @param deleteRequest deleteRequest
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static deleteUserGroupUsingPost(
        deleteRequest: DeleteRequest,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/questiongroup/user_group/delete',
            body: deleteRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * deleteUser
     * @param userGroupId
     * @param userIdList
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static deleteUserUsingPost(
        userGroupId?: number,
        userIdList?: Array<number>,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/questiongroup/user_group/delete_user',
            query: {
                'userGroupId': userGroupId,
                'userIdList': userIdList,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getUserGroupById
     * @param id id
     * @returns BaseResponse_UserGroupVO_ OK
     * @throws ApiError
     */
    public static getUserGroupByIdUsingGet(
        id?: number,
    ): CancelablePromise<BaseResponse_UserGroupVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/questiongroup/user_group/get',
            query: {
                'id': id,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getUserGroupCount
     * @returns BaseResponse_long_ OK
     * @throws ApiError
     */
    public static getUserGroupCountUsingGet(): CancelablePromise<BaseResponse_long_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/questiongroup/user_group/getCount',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * listUserGroupByPage
     * @param userGroupQueryRequest userGroupQueryRequest
     * @returns BaseResponse_Page_UserGroup_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static listUserGroupByPageUsingPost(
        userGroupQueryRequest: UserGroupQueryRequest,
    ): CancelablePromise<BaseResponse_Page_UserGroup_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/questiongroup/user_group/list/page',
            body: userGroupQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * listUserGroupByUserId
     * @returns BaseResponse_List_UserGroup_ OK
     * @throws ApiError
     */
    public static listUserGroupByUserIdUsingGet(): CancelablePromise<BaseResponse_List_UserGroup_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/questiongroup/user_group/listUserGroupByUserId',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * updateUserGroup
     * @param userGroupUpdateRequest userGroupUpdateRequest
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateUserGroupUsingPost(
        userGroupUpdateRequest: UserGroupUpdateRequest,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/questiongroup/user_group/update',
            body: userGroupUpdateRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
}
