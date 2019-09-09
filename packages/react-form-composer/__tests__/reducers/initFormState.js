import { actionTypes } from '../../src/actions'
import reducer from '../../src/reducers'

const describeInitFormState = () => {

  it('should initialize form state when action has a form', () => {
    const state = reducer(undefined, {
      type: actionTypes.INIT_FORM_STATE,
      form: 'myForm'
    })
    expect(state).toEqual({
      formStatus: {
        errorCount: 0,
        isSubmitting: false,
        isValid: true
      },
      fieldStatus: {},
      fieldValues: {},
      formErrors: {}          
    })
  })

  it('should include any action formStatus, fieldStatus, fieldValues and fieldErrors in the new state', () => {
    const state = reducer(undefined, {
      type: actionTypes.INIT_FORM_STATE,
      formStatus: {one: '1st'},
      fieldStatus: {two: '2nd'},
      fieldValues: {three: '3rd'},
      formErrors: {four: '4th'}
    })
    expect(state).toEqual({
      formStatus: {
        errorCount: 0,
        isSubmitting: false,
        isValid: true,
        one: '1st'
      },
      fieldStatus: {two: '2nd'},
      fieldValues: {three: '3rd'},
      formErrors: {four: '4th'}
    })
  })

  it('should have formStatus.isValid if errorCount is zero', () => {
    const state = reducer(undefined, {
      type: actionTypes.INIT_FORM_STATE,
      formStatus: {errorCount: 0}
    })
    expect(state).toEqual({
      formStatus: {
        errorCount: 0,
        isSubmitting: false,
        isValid: true,
      },
      fieldStatus: {},
      fieldValues: {},
      formErrors: {}
    })
  })  

  it('should not have formStatus.isValid if errorCount is not zero', () => {
    const state = reducer(undefined, {
      type: actionTypes.INIT_FORM_STATE,
      formStatus: {errorCount: 1}
    })
    expect(state).toEqual({
      formStatus: {
        errorCount: 1,
        isSubmitting: false,
        isValid: false,
      },
      fieldStatus: {},
      fieldValues: {},
      formErrors: {}
    })
  })  

}

export default describeInitFormState
