import React, { useEffect } from 'react'
import {connect} from 'react-redux'
import {reduxForm} from 'redux-form'
import {thunkNotesCreator,addNotesThunk,deleteNotesThunk} from '../store/actions/action'
import Form from '../components/form'
import {Link} from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const FormRedux = reduxForm({form:'input'})(Form)

function NotesPage(props) {

    const {t,i18n} = useTranslation()

    const changeLanguage = (language) => {
        i18n.changeLanguage(language)
    }

    const onSubmit = (formData) => {
            props.addData(formData)
    }

    const deleteHandler = (id) => {
        props.delData(id)
    }
    useEffect(()=>{
        props.getData()
        // eslint-disable-next-line
    },[])
    
    const renderData = () => {
        if(props.data.length >= 1){
            return props.data.map((item,i) => {
                return (
                    <div key={i}>
                        <li className="collection-item">
                            <div>{item.title}
                                <Link to={`notes/${item.id}`} className="secondary-content">
                                    <i className="material-icons">{t('description.part4')}</i>
                                </Link>
                                <div onClick={() => deleteHandler(item.id)} className="waves-teal btn-flat" style={{color:'red'}}>{t('description.part3')}</div>
                            </div>
                         </li>
                    </div>
                )
            })
        }
    }

    return (
        <div className="NotesPage">
            <div className="container">
                <div class="row" style={{marginRight:'90px',paddingTop:'10px'}}>
                    <button onClick={() => changeLanguage('en')} className="waves-teal btn-flat">en</button>
                    <button onClick={() => changeLanguage('de')} className="waves-teal btn-flat">de</button>
                </div>
                 <h1 style={{marginRight:'80px'}}>{t('title')}</h1>
                <FormRedux onSubmit={onSubmit}/>
                <div style={{marginRight : '60px'}}>{props.message ? t('description.part5') : ''}</div>
                <ul className="collection with-header">
                {renderData()}
                </ul>
            </div>
        </div>
    )
}

function mapStateToProps(state){
    console.log(state)
    return{
        data:state.notes.data,
        message:state.notes.message
    }
}

function mapDispatchToProps(dispatch){
    return{
        getData: () => dispatch(thunkNotesCreator()),
        addData: formData => dispatch(addNotesThunk(formData)),
        delData: (id) => dispatch(deleteNotesThunk(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NotesPage)