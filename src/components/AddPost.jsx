import React, { Component } from 'react';

class AddPost extends Component {
  state = { title: '', content: '' };
 

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault(); //The event. preventDefault() method stops the default action of an element from happening.
    // For example: Prevent a submit button from submitting a form. Prevent a link from following the URL.
    const { onCreate, caption, aevent } = this.props;
    const { title, content } = this.state;
  
  
    const post = {
     // id: Date.now().toString(), ... no need of ID because firestore will generate one
      title,
      content,
      caption,
      aevent,
      user: {
        uid: '1111',
        displayName: 'Henok',
        email: 'Fish',
        photoURL: 'http://placekitten.com/g/200/200',
      },
      favorites: 0,
      comments: 0,
      createdAt: new Date(),
    }

    onCreate(post);

    this.setState({ title: '', content: ''});
  };

  render() {
    const { title, content } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className="AddPost">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={this.handleChange}
        />
        <input
          type="text"
          name="content"
          placeholder="Body"
          value={content}
          onChange={this.handleChange}
        />
        <input className="create" type="submit" value="Take Note" onClick={this.props.aaevent}/>
      </form>
    );
  }
}

export default AddPost;
