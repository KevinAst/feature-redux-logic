# Change Log

The **feature-redux-logic** project adheres to [Semantic
Versioning](http://semver.org/).

Each release is documented on this page *(in addition to the [Github
Release Notes](https://github.com/KevinAst/feature-redux-logic/releases))*,
and **contains migration instructions**.

## Summary:

Release  | What                                            | *When*
---------|-------------------------------------------------|------------------
[v0.1.3] | Establish Polyfill Strategy                     | *July ??, 2018*
[v0.1.0] | Initial Release                                 | *March 6, 2018*


<!-- ?? change next line WHEN date is known -->
[v0.1.3]: #v013---establish-polyfill-strategy-july--2018
[v0.1.0]: #v010---initial-release-march-6-2018



<!-- UNRELEASED **************************************************************************

TEMPLATE: 
## vn.n.n - DESC *(DATE ?, 2018)*

[GitHub Content](https://github.com/KevinAst/feature-redux-logic/tree/vn.n.n)
&bull;
[GitHub Release](https://github.com/KevinAst/feature-redux-logic/releases/tag/vn.n.n)
&bull;
[Diff](see below)

RUNNING CONTENT (pop out as needed) ... 

- adorn bullets with following bolded prefix
  **Added**:      ... for new features
  **Changed**:    ... for changes in existing functionality
  **Deprecated**: ... for soon-to-be removed features
  **Removed**:    ... for now removed features
  **Fixed**:      ... for any bug fixes
  **Enhanced**:   ... for enhancements
  **Security**:   ... in case of vulnerabilities
  **Docs**:       ... changes in documentation
  **Review**:     ... requires review
  **Internal**:   ... internal change NOT affecting user/client

UNRELEASED ******************************************************************************** -->



<!-- *** RELEASE *************************************************************** -->

## v0.1.3 - Establish Polyfill Strategy *(July ??, 2018)*

[GitHub Content](https://github.com/KevinAst/feature-redux-logic/tree/v0.1.3)
&bull;
[GitHub Release](https://github.com/KevinAst/feature-redux-logic/releases/tag/v0.1.3)
&bull;
[Diff](https://github.com/KevinAst/feature-redux-logic/compare/v0.1.2...v0.1.3)

**NOTE**: This release is a **non-breaking change** _(i.e. no API was affected)_.

- **Review**: A new policy is in affect where **polyfills are the
  responsibility of the client app**, when the target JavaScript
  engine is inadequate _(such as the IE browser)_.  Please refer to
  [Potential Need for
  Polyfills](./README.md#potential-need-for-polyfills) for more
  information.

  As a result, all previous code patches related to es2015+ polyfill
  issues were removed, in favor of **polyfilling at the app-level**.

- **Internal**: The most current babel version/configuration is now
  used to transpile the library's es5 distribution.


<!-- *** RELEASE *************************************************************** -->

## v0.1.0 - Initial Release *(March 6, 2018)*
[GitHub Content](https://github.com/KevinAst/feature-redux-logic/tree/v0.1.0)
&bull;
[GitHub Release](https://github.com/KevinAst/feature-redux-logic/releases/tag/v0.1.0)

**This is where it all began ...**
