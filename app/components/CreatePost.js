import React, {useState, useContext} from 'react'
import Page from './page'
import Axios from 'axios'
import {withRouter} from 'react-router-dom'
import RootContext from '../context/Context'

const CreatePost = (props) => {

    const [title, setTitle] = useState()
    const [body, setBody] = useState()

    const {addFlashMessage} = useContext(RootContext)





  const handleSubmit = async e => {
    e.preventDefault()

    try {
      const response =    await  Axios.post('/create-post', {
      title,
      body,
      token: localStorage.getItem('complexappToken')
      })
     

      if (response.data) {
         /// redirect to new post url
      console.log(response.data)
      addFlashMessage('Congrats, You have succesfully created a post')
      props.history.push(`/post/${response.data}`)
      }

    } catch (error) {
      console.log('Something went wrong')
    }

  }
  return (
    <Page title='Create New Post'>
    <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="post-title" className="text-muted mb-1">
            <small>Title</small>
          </label>
          <input onChange ={(e) => setTitle(e.target.value)} autoFocus name="title" id="post-title" className="form-control form-control-lg form-control-title" type="text" placeholder="" autoComplete="off" />
        </div>

        <div className="form-group">
          <label htmlFor="post-body" className="text-muted mb-1 d-block">
            <small>Body Content</small>
          </label>
          <textarea onChange ={(e) => setBody(e.target.value)}  name="body" id="post-body" className="body-content tall-textarea form-control" type="text"></textarea>
        </div>

        <button className="btn btn-primary">Save New Post</button>
      </form>    
      </Page>
  )
}

export default withRouter(CreatePost)
