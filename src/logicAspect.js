import {createLogicMiddleware} from 'redux-logic';  // peerDependency
import {createAspect}          from 'feature-u';    // peerDependency:


// NOTE: See README for complete description
export default createAspect({
  name: 'logic',
  validateFeatureContent,
  assembleFeatureContent,
  getReduxMiddleware,
});


/**
 * Validate self's aspect content on supplied feature.
 *
 * NOTE: To better understand the context in which any returned
 *       validation messages are used, **feature-u** will prefix them
 *       with: 'createFeature() parameter violation: '
 *
 * @param {Feature} feature - the feature to validate, which is known
 * to contain this aspect.
 *
 * @return {string} an error message when the supplied feature
 * contains invalid content for this aspect (null when valid).
 *
 * @private
 */
function validateFeatureContent(feature) {
  const content = feature[this.name];
  return Array.isArray(content)
          ? null
          : `${this.name} (when supplied) must be an array of redux-logic modules`;
}


/**
 * Interpret the supplied features, defining our redux middleware 
 * in support of reduc-logic.
 *
 * @param {App} app the App object used in feature cross-communication.
 * 
 * @param {Feature[]} activeFeatures - The set of active (enabled)
 * features that comprise this application.
 *
 * @private
 */
function assembleFeatureContent(app, activeFeatures) {

  // accumulate logic modules across all features
  const appLogic = activeFeatures.reduce( (accum, feature) => {
    if (feature[this.name]) {
      accum = [...accum, ...feature[this.name]];
    }
    return accum;
  }, []);

  // ?? how should NO logic be handled: silenty ignore, with NO redux-logic OR throw error?

  // define our redux middleware of redux-logic
  this.logicMiddleware = createLogicMiddleware(appLogic,
                                               { // inject our app as a redux-logic dependancy
                                                 app,
                                               });
}


/**
 * Expose our redux middleware that activates redux-logic.  
 *
 * This method is consumed by the feature-redux Aspect using an
 * "aspect cross-communication".
 *
 * @private
 */
function getReduxMiddleware() {
  return this.logicMiddleware;
}