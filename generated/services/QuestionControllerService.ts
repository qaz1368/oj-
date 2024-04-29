/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnswerAddRequest } from '../models/AnswerAddRequest';
import type { AnswerQueryRequest } from '../models/AnswerQueryRequest';
import type { AnswerUpdateRequest } from '../models/AnswerUpdateRequest';
import type { BaseResponse_AnswerVO_ } from '../models/BaseResponse_AnswerVO_';
import type { BaseResponse_Array_string_ } from '../models/BaseResponse_Array_string_';
import type { BaseResponse_boolean_ } from '../models/BaseResponse_boolean_';
import type { BaseResponse_long_ } from '../models/BaseResponse_long_';
import type { BaseResponse_Page_Answer_ } from '../models/BaseResponse_Page_Answer_';
import type { BaseResponse_Page_AnswerVO_ } from '../models/BaseResponse_Page_AnswerVO_';
import type { BaseResponse_Page_Question_ } from '../models/BaseResponse_Page_Question_';
import type { BaseResponse_Page_QuestionSubmitVO_ } from '../models/BaseResponse_Page_QuestionSubmitVO_';
import type { BaseResponse_Page_QuestionVO_ } from '../models/BaseResponse_Page_QuestionVO_';
import type { BaseResponse_Question_ } from '../models/BaseResponse_Question_';
import type { BaseResponse_QuestionVO_ } from '../models/BaseResponse_QuestionVO_';
import type { BaseResponse_ScheduleVO_ } from '../models/BaseResponse_ScheduleVO_';
import type { BaseResponse_string_ } from '../models/BaseResponse_string_';
import type { DeleteRequest } from '../models/DeleteRequest';
import type { QuestionAddRequest } from '../models/QuestionAddRequest';
import type { QuestionQueryRequest } from '../models/QuestionQueryRequest';
import type { QuestionRunAddRequest } from '../models/QuestionRunAddRequest';
import type { QuestionSubmitAddRequest } from '../models/QuestionSubmitAddRequest';
import type { QuestionSubmitQueryRequest } from '../models/QuestionSubmitQueryRequest';
import type { QuestionUpdateRequest } from '../models/QuestionUpdateRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
// @ts-ignore
import {BaseResponse_QuestionSubmit_} from "../../generated";
export class QuestionControllerService {
    /**
     * addQuestion
     * @param questionAddRequest questionAddRequest
     * @returns BaseResponse_long_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static addQuestionUsingPost(
        questionAddRequest: QuestionAddRequest,
    ): CancelablePromise<BaseResponse_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/question/add',
            body: questionAddRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getSubmitResult
     * @param questionSubmitId questionSubmitId
     * @returns BaseResponse_QuestionSubmit_ OK
     * @throws ApiError
     */
    public static getSubmitResultUsingGet(
        questionSubmitId?: number,
    ): CancelablePromise<BaseResponse_QuestionSubmit_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/question/question_submit/getSubmitResult',
            query: {
                'questionSubmitId': questionSubmitId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * deleteAnswer
     * @param deleteRequest deleteRequest
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static deleteAnswerUsingPost(
        deleteRequest: DeleteRequest,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/question/answer/delete',
            body: deleteRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getAnswerById
     * @param id id
     * @returns BaseResponse_AnswerVO_ OK
     * @throws ApiError
     */
    public static getAnswerByIdUsingGet(
        id?: number,
    ): CancelablePromise<BaseResponse_AnswerVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/question/answer/get',
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
     * listAnswerByPage
     * @param answerQueryRequest answerQueryRequest
     * @returns BaseResponse_Page_AnswerVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static listAnswerByPageUsingPost(
        answerQueryRequest: AnswerQueryRequest,
    ): CancelablePromise<BaseResponse_Page_AnswerVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/question/answer/list/page',
            body: answerQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * listMyAnswerByPage
     * @param answerQueryRequest answerQueryRequest
     * @returns BaseResponse_Page_Answer_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static listMyAnswerByPageUsingPost(
        answerQueryRequest: AnswerQueryRequest,
    ): CancelablePromise<BaseResponse_Page_Answer_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/question/answer/my/list/page',
            body: answerQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * updateAnswer
     * @param answerUpdateRequest answerUpdateRequest
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateAnswerUsingPost(
        answerUpdateRequest: AnswerUpdateRequest,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/question/answer/update',
            body: answerUpdateRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * deleteQuestion
     * @param deleteRequest deleteRequest
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static deleteQuestionUsingPost(
        deleteRequest: DeleteRequest,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/question/delete',
            body: deleteRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getQuestionById
     * @param id id
     * @returns BaseResponse_Question_ OK
     * @throws ApiError
     */
    public static getQuestionByIdUsingGet(
        id?: number,
    ): CancelablePromise<BaseResponse_Question_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/question/get',
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
     * getQuestionVOById
     * @param id id
     * @returns BaseResponse_QuestionVO_ OK
     * @throws ApiError
     */
    public static getQuestionVoByIdUsingGet(
        id?: number,
    ): CancelablePromise<BaseResponse_QuestionVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/question/get/vo',
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
     * getQuestionCount
     * @returns BaseResponse_long_ OK
     * @throws ApiError
     */
    public static getQuestionCountUsingGet(): CancelablePromise<BaseResponse_long_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/question/getCount',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getDegreeNum
     * @returns BaseResponse_ScheduleVO_ OK
     * @throws ApiError
     */
    public static getDegreeNumUsingGet(): CancelablePromise<BaseResponse_ScheduleVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/question/getDegreeNum',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getQuestionRandom
     * @returns BaseResponse_QuestionVO_ OK
     * @throws ApiError
     */
    public static getQuestionRandomUsingGet(): CancelablePromise<BaseResponse_QuestionVO_> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/api/question/getRandom',
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * listQuestionByPage
     * @param questionQueryRequest questionQueryRequest
     * @returns BaseResponse_Page_Question_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static listQuestionByPageUsingPost(
        questionQueryRequest: QuestionQueryRequest,
    ): CancelablePromise<BaseResponse_Page_Question_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/question/list/page',
            body: questionQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * listQuestionVOByPage
     * @param questionQueryRequest questionQueryRequest
     * @returns BaseResponse_Page_QuestionVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static listQuestionVoByPageUsingPost(
        questionQueryRequest: QuestionQueryRequest,
    ): CancelablePromise<BaseResponse_Page_QuestionVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/question/list/page/vo',
            body: questionQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * doQuestionSubmit
     * @param questionSubmitAddRequest questionSubmitAddRequest
     * @returns BaseResponse_long_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static doQuestionSubmitUsingPost(
        questionSubmitAddRequest: QuestionSubmitAddRequest,
    ): CancelablePromise<BaseResponse_long_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/question/question_submit',
            body: questionSubmitAddRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * getRunResult
     * @param redisId redisId
     * @returns BaseResponse_Array_string_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static getRunResultUsingPost(
        redisId?: string,
    ): CancelablePromise<BaseResponse_Array_string_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/question/question_submit/getRunResult',
            query: {
                'redisId': redisId,
            },
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * listQuestionSubmitByPage
     * @param questionSubmitQueryRequest questionSubmitQueryRequest
     * @returns BaseResponse_Page_QuestionSubmitVO_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static listQuestionSubmitByPageUsingPost(
        questionSubmitQueryRequest: QuestionSubmitQueryRequest,
    ): CancelablePromise<BaseResponse_Page_QuestionSubmitVO_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/question/question_submit/list/page',
            body: questionSubmitQueryRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * runQuestion
     * @param questionRunAddRequest questionRunAddRequest
     * @returns BaseResponse_string_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static runQuestionUsingPost(
        questionRunAddRequest: QuestionRunAddRequest,
    ): CancelablePromise<BaseResponse_string_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/question/question_submit/run',
            body: questionRunAddRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
    /**
     * updateQuestion
     * @param questionUpdateRequest questionUpdateRequest
     * @returns BaseResponse_boolean_ OK
     * @returns any Created
     * @throws ApiError
     */
    public static updateQuestionUsingPost(
        questionUpdateRequest: QuestionUpdateRequest,
    ): CancelablePromise<BaseResponse_boolean_ | any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/api/question/update',
            body: questionUpdateRequest,
            errors: {
                401: `Unauthorized`,
                403: `Forbidden`,
                404: `Not Found`,
            },
        });
    }
}
