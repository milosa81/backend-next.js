import { Model, Document } from 'mongoose';
import { ServerResponse } from 'http';

export class QueryHelpers {
    private static handleSorting = function (query, params) {
        var sortingFieldParam = params.sorting ? params.sorting.field : null;
        var sortingCriteriaParam = params.sorting ? params.sorting.order : null;
        if (sortingFieldParam !== null && sortingCriteriaParam !== null) {
            query = query.sort(sortingCriteriaParam === 'asc' ? sortingFieldParam : `-${sortingFieldParam}`);
        }
        return query;
    }

    private static handlePaging = function (query, params) {
        var currentPageParam = params.pagination ? params.pagination.currentPage : null;
        var itemsPerPageParam = params.pagination ? params.pagination.itemsPerPage : null;
        if (currentPageParam !== null && itemsPerPageParam !== null) {
            var currentPage = parseInt(currentPageParam) - 1;
            var itemsPerPage = parseInt(itemsPerPageParam);
            query = query.skip(currentPage * itemsPerPage).limit(itemsPerPage)
        }
        return query;
    }

    static async find<T extends Document, T1, T2>(model: Model<T>, searchParams: T1, originalParams: T2, res: ServerResponse): Promise<T[]> {
        try {
            let countQuery = model.count(searchParams);
            var count = await countQuery.exec();
            res.setHeader('x-total-count', count.toString());

            let query = model.find(searchParams);
            query = this.handleSorting(query, originalParams);
            query = this.handlePaging(query, originalParams);
            return await query.exec();
        } catch(err ){
            var x = err;
        }
        
    }
}