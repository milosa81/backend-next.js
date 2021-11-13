import { Sku } from "../../sku/interfaces/sku.interface";

export interface InvoiceLine {
    readonly sku: Sku;
    readonly vat: number;
    readonly price: number;
    readonly amount: number;
    readonly total: number;
    readonly totalInc: number;
}