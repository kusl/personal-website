import { ApiModelBase } from './api-model-base';

export class ApiObjectModel<T> extends ApiModelBase {
    data: T;
    constructor(object?: any) {
      super(object);
      if (object) {
        const param: Object = object as Object;
        if (param.hasOwnProperty("data")) {
          this.data = param["data"];
        }
      }
    }
  }