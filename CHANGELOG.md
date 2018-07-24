# Change Log

The **feature-redux-logic** project adheres to [Semantic
Versioning](http://semver.org/).

Each release is documented on this page *(in addition to the [Github
Release Notes](https://github.com/KevinAst/feature-redux-logic/releases))*,
and **contains migration instructions**.

## Summary:

Release  | What                                            | *When*
---------|-------------------------------------------------|------------------
[v1.0.0] | feature-u V1 Integration                        | *July ??, 2018*
[v0.1.3] | Establish Polyfill Strategy                     | *July 2, 2018*
[v0.1.0] | Initial Release                                 | *March 6, 2018*


[v1.0.0]: #v100---feature-u-v1-integration-july--2018
[v0.1.3]: #v013---establish-polyfill-strategy-july-2-2018
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

## v1.0.0 - feature-u V1 Integration *(July ??, 2018)*

[GitHub Content](https://github.com/KevinAst/feature-redux-logic/tree/v1.0.0)
&bull;
[GitHub Release](https://github.com/KevinAst/feature-redux-logic/releases/tag/v1.0.0)
&bull;
[Diff](https://github.com/KevinAst/feature-redux-logic/compare/v0.1.3...v1.0.0)

**NOTE**: This release contains **breaking changes** from prior
releases _(i.e. a retrofit of client code is necessary)_.

- **Review**: Provide integration to 
  [**feature-u V1**](https://feature-u.js.org/cur/history.html#v1_0_0)
  which has replaced the `app` object with a `fassets` object.  

  In general, this is not a change that would normally break a plugin,
  because app/fassets is a positional parameter that is merely passed
  through the plugin.

  However, because **feature-redux-logic** auto injects the [`Fassets
  object`] as a dependency in your logic modules (promoting full
  [Cross Feature Communication]), the logic modules in your
  application code must reflect this change by renaming this named
  parameter from `app` to `fassets`, and utilize the new fassets API
  accordingly.  Please refer to the [Usage] section for examples.

  As a result, this plugin has now updated it's **feature-u**
  peerDependency to ">=1.0.0".


<!-- *** RELEASE *************************************************************** -->

## v0.1.3 - Establish Polyfill Strategy *(July 2, 2018)*

[GitHub Content](https://github.com/KevinAst/feature-redux-logic/tree/v0.1.3)
&bull;
[GitHub Release](https://github.com/KevinAst/feature-redux-logic/releases/tag/v0.1.3)
&bull;
[Diff](https://github.com/KevinAst/feature-redux-logic/compare/v0.1.0...v0.1.3)

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




<!--- *** REFERENCE LINKS *** ---> 

[`Fassets object`]:            https://feature-u.js.org/cur/api.html#Fassets
[Cross Feature Communication]: https://feature-u.js.org/cur/crossCommunication.html
[Usage]:                       README.md#usage
