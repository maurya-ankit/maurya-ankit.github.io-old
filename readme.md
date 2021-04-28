# Steps to create one for yourself

- clone this repo to your local machine
- open packange.json file and change value of name and homepage url (home page url should be like -> `https://[githubUsername].github.io` )
- now open `public/data/` and change the file contents
  - aboutme.json -> this contains profile picture, title and subtitle to be shown on `Homepage`
  - cards.json -> This contains array of dictionaries, in which each object contains title,desc,id,image `Each object in array will appear as a card on homepage, which on click will take us to detail page respect to that card`
  - for each object in cards.json we need to create a markdown file in `data/cards/`, filename of the file should be same as `id` in cards.json in lowercase, and rest we can do is writing markdownfile
    `markdown file will support HTML elements as well with inline css, so feel free to customize as you want`

## create a repository named [githubUsername].github.io and push the above all codes to there
