import { Model, Document } from 'mongoose';
import { ServerResponse } from 'http';

export class QueryHelpers {
    private static handleSorting = function (query, params) {
        var sortingFieldParam = params['sorting.field'];
        var sortingCriteriaParam = params['sorting.order'];
        if (sortingFieldParam !== undefined && sortingCriteriaParam !== undefined) {
            query = query.sort(sortingCriteriaParam === 'asc' ? sortingFieldParam : `-${sortingFieldParam}`);
        }
        return query;
    }

    private static handlePaging = function (query, params) {
        var currentPageParam = params['pagination.currentPage'];
        var itemsPerPageParam = params['pagination.itemsPerPage'];
        if (currentPageParam !== undefined && itemsPerPageParam !== undefined) {
            var currentPage = parseInt(currentPageParam) - 1;
            var itemsPerPage = parseInt(itemsPerPageParam);
            query = query.skip(currentPage * itemsPerPage).limit(itemsPerPage)
        }
        return query;
    }

    static async find<T extends Document, T1, T2>(model: Model<T>, searchParams: T1, originalParams: T2, res: ServerResponse): Promise<T[]> {
        let countQuery = model.count(searchParams);
        var count = await countQuery.exec();
        res.setHeader('x-total-count', count.toString());

        let query = model.find(searchParams);
        query = this.handleSorting(query, originalParams);
        query = this.handlePaging(query, originalParams);
        var items = await query.exec();
        return items;
    }
}