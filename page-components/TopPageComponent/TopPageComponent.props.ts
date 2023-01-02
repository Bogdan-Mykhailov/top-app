import { ITopPageModel, TopLevelCategory } from "../../interfaces/page.interface";
import { IProductModel } from "../../interfaces/product.interface";

export interface ITopPageComponentProps extends Record<string, unknown> {
  firstCategory: TopLevelCategory;
  page: ITopPageModel;
  products: IProductModel[];
}
