# AnimeReminder


## Description
AnimeReminder is a web system that informs you about any new episodes of an anime that have come out. You can add any ongoing anime to a watch-list. It's targeted towards people that forget to check on weekly releases.

## Entity definition
Entity:
- Anime (mal_id(number), url(string), image_url(string), airing(boolean), title(min 3 characters, string, UTF8), synopsis(string), episodes(number), type(string, loc: tv ova movie special ona music manga novel oneshot doujin manhwa manhua), score(float, 0.0-10.0), satrt_date(ISO8601), end_date(ISO8601), weekday(string, loc: monday, tuesday, wednesday, thursday, friday, saturday, sunday));


## API definition
Jikan API methods:
- GET /api.jikan.moe/v3/anime/{mal_id}/ - returns an entity by ID
- GET /api.jikan.moe/v3/search/anime/?q={title}&page=1 - returns an entity by title
- GET /api.jikan.moe/v3/schedule/ - returns days of the week with multiple entities
- GET /api.jikan.moe/v3/anime/{id}/episodes - returns a list of episodes by entity's ID

AnimeReminder methods:
- POST /ar/anime/{mal_id} - adds anime to watchlist;
- GET /ar/anime/{mal_id}/ - returns anime in watchlist by id/ returns all anime in the watchlist;
- DELETE /ar/anime/{mal_id} - removes an anime from the watchlist by id;



## UI definition
https://wireframe.cc/3uUuri
