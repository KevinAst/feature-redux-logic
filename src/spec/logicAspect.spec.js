import {createFeature}     from 'feature-u';
import {createLogicAspect} from '..'; // modules under test

const logicAspect = createLogicAspect();

// temporarly turn on logging (just for fun)
// ... must include launchApp on this
// launchApp.diag.logf.enable();

describe('logicAspect() tests', () => {

  describe('validate logicAspect.name', () => {

    test('name', () => {
      expect( logicAspect.name)
        .toBe('logic');
    });

  });


  describe('validate createLogicAspect() parameter violation', () => {

    expect( () => createLogicAspect(null) )
      .toThrow(/name is required/);
    // THROW: createLogicAspect() parameter violation: name is required

    expect( () => createLogicAspect(123) )
      .toThrow(/name must be a string/);
    // THROW: createLogicAspect() parameter violation: name must be a string

  });


  describe('validateFeatureContent()', () => {

    test('must be an array', () => {

      const feature = createFeature({
        name:  'feature1',
        logic: "I'm NOT an array",
      });

      expect(logicAspect.validateFeatureContent(feature))
        .toMatch(/must be an array/);
    });

    test('success', () => {

      const feature = createFeature({
        name:  'feature1',
        logic: ['mock', 'logic', 'modules'],
      });

      expect(logicAspect.validateFeatureContent(feature))
        .toBe(null);
    });

  });


  describe('assembleFeatureContent()', () => {

    test('no logic modules (DEFAULT)', () => {
      expect(()=>logicAspect.assembleFeatureContent('simulated fassets', []))
        .toThrow(/found NO logic modules within your features/);
    });

    describe('no logic modules (OVERRIDE true)', () => {
      beforeEach(() => {
        logicAspect.config.allowNoLogic$ = true;
      });      
      afterEach(() => {
        logicAspect.config.allowNoLogic$ = false;
      });
      test('expecting getReduxMiddleware() to be null', () => {
        logicAspect.assembleFeatureContent('simulated fassets', []);
        expect(logicAspect.getReduxMiddleware())
          .toBe(null);
      });
    });

    describe('no logic modules (OVERRIDE array)', () => {
      beforeEach(() => {
        logicAspect.config.allowNoLogic$ = ['simulated', 'logic'];
      });      
      afterEach(() => {
        logicAspect.config.allowNoLogic$ = false;
      });
      test('expecting getReduxMiddleware() to be non-null', () => {
        logicAspect.assembleFeatureContent('simulated fassets', []);
        expect(logicAspect.getReduxMiddleware())
          .not.toBe(null);
      });
    });

    describe('features have logic modules', () => {
      test('expecting getReduxMiddleware() to be non-null', () => {
        logicAspect.assembleFeatureContent('simulated fassets', [
          createFeature({
            name:  'feature1',
            logic: ['simulated', 'logic']
          }),
          createFeature({
            name:  'featureWithNoLogic',
          })
        ]);
        expect(logicAspect.getReduxMiddleware())
          .not.toBe(null);
      });
    });

  });

});
