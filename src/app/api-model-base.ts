import { HTTP_STATUS_CODE } from './http-status-code.enum';

export class ApiModelBase {
    errors: Map<string, string>;
    status: HTTP_STATUS_CODE;
    constructor(object?: any) {
      if (object) {
        const param: Object = object as Object;
        if (param.hasOwnProperty("errors")) {
          this.errors = param["errors"];
        }
        if (param.hasOwnProperty("status")) {
          this.errors = param["status"];
        }
      }
    }
  }