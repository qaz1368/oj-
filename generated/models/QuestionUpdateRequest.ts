/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { JudgeCase } from './JudgeCase';
import type { JudgeConfig } from './JudgeConfig';

export type QuestionUpdateRequest = {
    acceptedNum?: number;
    answer?: string;
    content?: string;
    id?: number;
    judgeCase?: Array<JudgeCase>;
    judgeConfig?: JudgeConfig;
    questionDegree?: number;
    submitNum?: number;
    tags?: Array<string>;
    title?: string;
};
