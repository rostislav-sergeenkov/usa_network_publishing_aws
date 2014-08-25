# Environment & settings management


Publisher7 uses a settings.php strategy that, while verbose, allows very
granular control over the behavior of sites by multiple groups of developers.

## Settings Files

In addition to settings.php itself, a fully-configured Publisher7 site uses five
separate settings sub-files. Together, these five files collectively comprise
all of the settings for use by a functioning site. These files are (in the order in which they
are included):

* settings.p7core.php
* settings.site.php
* settings.p7core-$env.php
* settings.site-$env.php
* settings.local.php

Each of these files serves a specific purpose and comes from a specific
source. Understanding this composition of settings files is *essential* if
you need to make settings changes, or if you simply want to understand how
the infrastructure works for Publisher7-based projects.


### settings.p7core.php

This file is managed by the core Publisher7 team, and contains the most basic
of all settings, primarily those that ship in Drupal 7's default.settings.php
file. Settings in this file are applicable to all Publisher7 sites, in all
environments.

This file may, on occasion, be updated by the core Publisher7 team. If it is,
your site will receive those changes as part of the normal process of updating
to the latest release of Publisher7.

As this file is owned by the core Publisher7 repository, it lives directly in
this directory.

If you need to manage settings that are similarly applicable to all of your
site's environments, then do so directly in settings.php itself; any changes you
make directly to settings.p7core.php will be overwritten when you update to a
new version of Publisher7. More on this below in the settings.php section.

Qualifying criteria:
* The setting has general applicability
* The setting is applicable to some logic defined by Publisher7 core itself
* The setting controls some logic that should always be the same, regardless of
  where the stage in the deployment pipeline

### settings.site.php

The analogue to settings.p7core.php, this is the site's place to define logic
that is applicable to all of their environments. It is most like a settings.php
used on a typical Drupal site.

However, it is important to avoid the "kitchen sink" approach that many sites
take with settings.php: before putting a setting in here, ensure that it is a
setting which is truly global, and not one that could or should behave
differently in different environments. If you find yourself writing "if"
statements around any setting, it may fall into this category.

Qualifying criteria:
* The setting has general applicability
* The setting controls some logic that should always be the same, regardless of
  where the stage in the deployment pipeline

### settings.p7core-$env.php

This "file" is actually (at least) five files - $env can be "dev", "qa",
"acceptance", "stage", or "prod". Each of these corresponds to a type of
environment in the overall build process:

* "dev" is a developer's local environment - usually.
* "qa" is an automated QA environment, exclusively for Simpletest and BDD.
* "acceptance" is a human-facing QA environment.
* "stage" is the final stepping stone, where code awaits deployment to prod.
* "prod" is production.

The purpose of these files is to control behaviors that are specific to each
type of environment - for example, a toggle to ensure that emails sent by any
non-production sites are blackholed, or static configuration that points
external identity services to a set of testing URLs.

As with settings.p7core.php, this entire set of files is owned by the core
Publisher7 repository. Do not modify them, as your changes will be overwritten
on update - and because that's what the next set of files is for.

If the system fails to reliably determine the environment it is operating in, it
should fall back to dev.

Qualifying criteria:
* The setting has some general applicability
* The setting is applicable to some logic defined by Publisher7 core itself
* The setting controls some logic that should function differently at different
  stages in the deployment pipeline

### settings.site-$env.php

These files serve the exact same purpose as the settings.p7core-$env.php files:
defining environment-specific behaviors for a site. The difference is that they
are specific to your Publisher7 site, and thus are yours to modify. They are
also included after corresponding p7core environment setting file, so you can
easily override settings from there if needed.

Whereas the Publisher7 core team can do fairly little with these files, it is
important for teams building real sites on Publisher7 to actively consider these
files when designing any new feature. Cache segmentation and bin backends are
also a good candidate for these files. One might also use these files as a way
of representing [feature toggles](http://martinfowler.com/bliki/FeatureToggle.html).

The build system automatically creates symlinks out of
(reporoot)/settings/ into (reporoot)/docroot/sites/default/ for each
file found there. The build system will also initialize these files during the
project "init" process (albeit with empty PHP files). Those files (and not the
symlinks) are what you should commit into version control.

Qualifying criteria:
* The setting has some general applicability
* The setting controls some logic that should function differently at different
  stages in the pipeline

### settings.local.php

This file is for server connection information: memcache, database, etc. It
should NEVER be committed to version control. The only other appropriate use
for this file is temporary tinkering with settings during development and
experimentation on your local instance.

You will manually create one of these at (reporoot)/settings/settings.local.php
when setting up a local development environment. p7core provides a default
(default.settings.local.php) that will automatically be copied into place, but
you still have to fill in the values.

Qualifying criteria:
* The setting is specific to this instance, being in no way generalizable to
  other environments of the same type.
* The setting contains credentials or other private information that should not
  be committed to a repository.

### settings.php

The outermost settings.php file: this is what Drupal includes directly. Like
settings.local.php and settings.site-$env.php, this will actually live under
(reporoot)/settings/ and be symlinked into place. This file is essential as it
contains all of the environment detection, as well as the specific settings file
inclusion logic detailed above. Publisher7 core ships with a
default.settings.php that does all this; the build process copies it into place,
and most sites should never need to modify it.

There are, however, some cases that could necessitate modification by a site,
which is why this file is not controlled directly in the Publisher7 repository.
If, for example, a setting is globally applicable (and so normally declared in
settings.site.php), but is dependent on another setting declared by either the
environment or local settings file, then it can only be dealt with here.

A site may also have a more meta use case for modifying this file: adding an
additional type or layer of settings files, for example. Not that that is
encouraged - if a different layer of settings file seems necessary, you might
be trying to do something that's better accomplished elsewhere.
