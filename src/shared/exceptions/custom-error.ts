import { HttpStatus } from '@nestjs/common';

export class CustomError extends Error {
    private _code: HttpStatus;
    private _message: string;

    constructor(message: string, code: HttpStatus) {
        super(code.toFixed());
        this._message = message;
        this._code = code;
    }

    get code(): HttpStatus {
        return this._code;
    }

    get extraInfo(): string {
        return this._message;
    }
}