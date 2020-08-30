import React from 'react'
import {reduxForm} from 'redux-form'
import Form from '../components/form'
import {connect} from 'react-redux'
import {editNotesThunk} from '../store/actions/action'
import {useHistory} from 'react-router-dom'


const FormRedux = reduxForm({form:'editInput'})(Form)


function EditPage(props) {
    const history = useHistory() 

    

    const submitHandler = (formData) => {
        props.editData(props.match.params.id,formData.value)
        history.push('/notes')
    }

    return (
        <div className="container">
            <FormRedux onSubmit={submitHandler}/>
        </div>
    )
}

function mapDispatchToProps(dispatch){
    return{
        editData: (id,formData) => dispatch(editNotesThunk(id,formData))
    }
}

export default connect(null,mapDispatchToProps)(EditPage)