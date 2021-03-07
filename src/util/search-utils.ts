import { RouteComponentProps } from "react-router-dom";
import * as QueryString from "query-string"

export const getPageQueryParam = (props: RouteComponentProps) => {
    const { location: { search } } = props;
    const queryParams = QueryString.parse(search);
    const searchTxt = queryParams.page as string;
    return searchTxt;
  }