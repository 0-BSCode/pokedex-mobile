import { NamedUrl } from "./NamedUrl";

export interface PaginationResponse {
    count: number;
    url: string;
    previous: string;
    results: NamedUrl[];
}
