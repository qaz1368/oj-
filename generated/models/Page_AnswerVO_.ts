/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AnswerVO } from './AnswerVO';
import type { OrderItem } from './OrderItem';

export type Page_AnswerVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: Array<OrderItem>;
    pages?: number;
    records?: Array<AnswerVO>;
    searchCount?: boolean;
    size?: number;
    total?: number;
};
