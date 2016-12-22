TVE Redirects
=============

There is a special permanent (301) redirect service provided by the TVE Redirects module.
It provides API (Drupal hook system) for creating custom redirects. Shipped with implementation for TVE specific "ThePlatform MPX" redirects.

The pattern for redirects is:

    [base url]/[general path prefix]/[redirect type]/[identifier]

Where:

* *base url* - is a base part of URL for a given brand’s site (ie. http://http://www.bravotv.com/now/)
* *general path prefix* - (first path part) for all redirects
* *redirect type* - type of a redirect - is specific (second) path part for redirect type.
* *identifier* - unique identification number (string) for a data item
