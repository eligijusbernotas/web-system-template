# AnimeReminder


## Description
AnimeReminder is a web system that informs you about any new episodes of an anime that have come out. You can add any ongoing anime to a watch-list. It's targeted towards people that forget to check on weekly releases.

## Entity definition
Entity - anime(mal_id(number),broadcast(string), url(string), image_url(string), airing(boolean) title(min 3 characters, string, UTF8), synopsis(string), episodes(number 0-not specified), type(string, loc: tv ova movie special ona music manga novel oneshot doujin manhwa manhua), score(float, 0.0-10.0), satrt_date(ISO8601), end_date(ISO8601)


## API definition
GET /api.jikan.moe/v3/anime/{id}/ - returns an entity by ID
GET /api.jikan.moe/v3/search/anime/?q={title}&page=1 - returns an entity by title
GET /api.jikan.moe/v3/schedule/ - returns days of the week with multiple entities
GET /api.jikan.moe/v3/anime/{id}/episodes - returns a list of episodes by entity's ID

## UI definition
- [ ] Define the structure of how visually the WEB system is going to look like
- [ ] Should have at least one view defined with https://wireframe.cc (or other wireframe tool):
- [ ] The view should have a title
- [ ] The view should have a description of a service provided by web system
- [ ] The view should include at least 2 UI components:
    - [ ] A component to display multiple entities with all their attribute values visible. It should be posible to remove and edit selected entity.
        - [ ] Depending on chosen header of API method that returns multiple entities, it should be posible to select specific 10 entities starting index, sort entities by attribute, filter entities by attribute pattern, or other (should be approved by Product Owner (PO))
    - [ ] A component to create a new entity/edit existing entity. It should be posbile to create new entity and edit selected entity
        - [ ] Each attribute should have a dedicated editor field: text box for string or number, checkbox or radio buttons for boolean, date picker for date, etc.
