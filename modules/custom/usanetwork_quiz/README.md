USA Network Quiz
=============

This module supports "themes" for quizzes.
Quiz themes are defined in drupal theme folder. See usanetwork_quiz.api.php for details.

Each peace of content has it's own template, that can be overridden. See templates folder for a list of available templates.
There are following patterns for overriding templates:

    [template_name].tpl.php
    [template_name]--[quiz_type].tpl.php
    [template_name]--[quiz_theme_name].tpl.php
    [template_name]--[quiz_type]--[quiz_theme_name].tpl.php

That templates can be kept with drupal theme templates or in quiz template folder.
