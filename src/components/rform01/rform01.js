import React from 'react' ;

import Styles from './styles';
import { Form, Field } from 'react-final-form' ;

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
  await sleep(300)
  window.alert(JSON.stringify(values, 0, 2))
}

const RForm01 = () => (
  <Styles>
    <h3>React Final Form: Pizza Hat </h3>
    
    <Form //wrapper actual form creation happens @line21
      onSubmit={onSubmit}
      initialValues={{ loc: 'mg', member: false }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>First Name</label>
            <Field
              name="firstName"
              component="input"
              type="text"
              placeholder="First Name"
            />
          </div>
          <div>
            <label>Last Name</label>
            <Field
              name="lastName"
              component="input"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div>
            <label>Member</label>
            <Field name="member" component="input" type="checkbox" />
          </div>
          <div>
            <label>Favorite Colour</label>
            <Field name="favoriteColour" component="select">
              <option />
              <option value="#ff0000">❤️ Red</option>
              <option value="#00ff00">💚 Green</option>
              <option value="#0000ff">💙 Blue</option>
            </Field>
          </div>
          <div>
            <label>Toppings</label>
            <Field name="toppings" component="select" multiple>
              <option value="tomato"> Tomato</option>
               <option value="mushrooms"> Mushrooms</option>
              <option value="cheese"> Cheese</option>
              <option value="corn">Corn</option>
              <option value="pineapple"> Pineapple</option>
            </Field>
          </div>

          <div>
            <label>Sauces</label>
            <div>
              <label>
                <Field
                  name="sauces"
                  component="input"
                  type="checkbox"
                  value="ketchup"
                />{' '}
                Ketchup
              </label>
              <label>
                <Field
                  name="sauces"
                  component="input"
                  type="checkbox"
                  value="mustard"
                />{' '}
                Mustard
              </label>
              <label>
                <Field
                  name="sauces"
                  component="input"
                  type="checkbox"
                  value="mayonnaise"
                />{' '}
                Mayonnaise
              </label>
              <label>
                <Field
                  name="sauces"
                  component="input"
                  type="checkbox"
                  value="honeymustard"
                />{' '}
                Honey Mustard 
              </label>
            </div>
          </div>
          <div>
            <label>Location</label>
            <div>
              <label>
                <Field
                  name="loc"
                  component="input"
                  type="radio"
                  value="mg"
                />{' '}
                MG Road
              </label>
              <label>
                <Field
                  name="loc"
                  component="input"
                  type="radio"
                  value="jayanagar"
                />{' '}
                Jayanagar
              </label>
              <label>
                <Field
                  name="loc"
                  component="input"
                  type="radio"
                  value="indiranagar"
                />{' '}
                Indiranagar
              </label>
            </div>
          </div>
          <div>
            <label>Notes</label>
            <Field name="notes" component="textarea" placeholder="Notes" />
          </div>
          <div className="buttons">
            <button type="submit" disabled={submitting || pristine}> 
              Submit
            </button>
            <button
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
            </button>
          </div>
          <pre>{JSON.stringify(values, 0, 2)}</pre>
        </form>
      )}
    />
  </Styles>
)

export default RForm01
// pristine - not touched at all
// <pre> gets all data  from  form and displays it .. 
