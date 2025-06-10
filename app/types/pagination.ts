import { Books } from "./books";

export type Pagination = {
	booksFromServer: Books[];
	totalPages: number;
};
