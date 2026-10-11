# The Void

*works from the void*

A black-and-gold home for every book by Jamie Shaffer, built with Jekyll and hosted free on GitHub Pages. No coding needed to add a book or a chapter.

## Add a chapter

1. Open `_chapters/<book folder>/`.
2. Copy `00-example.md`, rename it `01-chapter-name.md`.
3. Delete the line `published: false`.
4. Set `title:` and `order:` (1, 2, 3...), then paste the chapter text under the second `---`.

## Add a new book

1. Copy a file in `_books/`, change `title`, `book_id`, `author`, and `order`.
2. Make a folder in `_chapters/` and set each chapter's `book:` to that `book_id`.

## Publish

Settings > Pages > Deploy from a branch > `main` / root. Every commit updates the site in about a minute.
