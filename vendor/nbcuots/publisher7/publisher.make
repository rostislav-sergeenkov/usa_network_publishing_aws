; Publisher 7 Makefile
;
; Run from top-level git directory.
; drush make --no-patch-txt --no-core --contrib-destination=docroot/profiles/publisher publisher.make
; -----------------
core = 7.x
api = 2

; Projects
; --------
defaults[projects][subdir] = "contrib"

; File Entity Module
projects[file_entity][version] = 2.x-dev

; Media Module
;   Media browser view library exposed form submit problem
;   http://drupal.org/node/1319528#comment-6587696
projects[media][version] = 2.x-dev
projects[media][patch][] = "http://drupal.org/files/media-browser-enter-submit-frontpage-1319528-11.patch"

; Date Module
;  Date views filter by specified timezone
;  https://drupal.org/node/1820304#comment-7875519
projects[date][version] = 2.x-dev
projects[date][patch][] = "https://drupal.org/files/date-1820304-views_filter_timezone-3.patch"
