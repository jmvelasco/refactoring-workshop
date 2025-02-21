/*
Refactoring to pipelines by Martin Fowler:

https://martinfowler.com/articles/refactoring-pipelines.html
 */

/**
 * refactorizar a un estilo declarativo sin romper los tests
 */

export class Author {
	constructor(
		readonly company: string,
		readonly twitterHandle: string
	) {}
}

export function collectTwitterHandlesBy(authors: Author[], company: string): string[] {
	const result = [];
	for (let i = 0; i < authors.length; i++) {
		if (authors[i].company == company) {
			const handle = authors[i].twitterHandle;
			if (handle != null) {
				result.push(handle);
			}
		}
	}
	return result;
}
