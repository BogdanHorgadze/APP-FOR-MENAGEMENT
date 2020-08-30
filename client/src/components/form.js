import React from 'react'
import {Field} from 'redux-form'
import { useTranslation } from 'react-i18next'


function Form (props){

    const {t} = useTranslation()

    return(
        <div className="container">
            <form onSubmit={props.handleSubmit}>
                <div className="row">
                    <div className="input-field">
                    <Field placeholder={t('description.part1')} autoFocus class="inp" name="value" component="input" type="text"/>
                <button id="but" className="btn waves-effect waves-light" type="submit" name="action" style={{marginRight:"40px"}}>
                    {t('description.part2')}
                </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Form