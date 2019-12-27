import { ApiModelBase } from './api-model-base';
import { ApiObjectModel } from './api-object-model';

export class ListApiModel<T> extends ApiModelBase {
    data: Array<ApiObjectModel<T>>;
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