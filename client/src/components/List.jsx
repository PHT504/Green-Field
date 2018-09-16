import React from 'react';
import ListItem from './ListItem.jsx';

const List = (props) => {

return (
  <div>
    <h4>User Sign in </h4>
  <form>
    <label>
        Username
      <input type="text" name="name" />
      </label>
      <label>
        Password
      <input type="text" name="name" />
      </label>
    <input type="submit" value="Submit" />
    </form>
  </div>
)
}
export default List;