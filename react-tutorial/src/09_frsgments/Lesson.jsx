import React, {Fragment} from 'react';

const Colums = () => {
  return (
    <Fragment>
      <td>Hello</td>
      <td>world</td>
    </Fragment>
  )
}

const Table = () => {
  return (
    <table>
      <tbody>
      <tr>
        <Colums/>
      </tr>
      </tbody>
    </table>
  );
};

export default Table;
