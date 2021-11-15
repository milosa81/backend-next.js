import { ApiUseTags } from '@nestjs/swagger';
import { Controller, Get, HttpException } from '@nestjs/common';
import { InvoiceState } from './interfaces/invoice-state.interface';
import { InvoiceStateService } from './invoice-state.service';

@ApiUseTags('InvoiceStates')
@Controller('invoiceState')
export class InvoiceStateController {
    constructor(private readonly invoiceStateService: InvoiceStateService) { }

    @Get()
    async find(): Promise<InvoiceState[]> {
        try {
            return await this.invoiceStateService.find();
        } catch (err) {
            throw new HttpException(err.extraInfo, err.code);
        }
    }
}