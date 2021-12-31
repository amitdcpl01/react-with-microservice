import React, { useState } from 'react';
import axios from 'axios';

export default ({ postId }) => {
  const [contentA, setContentA] = useState('');

  const onSubmit = async event => {
    event.preventDefault();
    await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
      content: contentA
    });

    setContentA('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>New Comment</label>
          <input
            value={contentA}
            onChange={e => setContentA(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
