import React from 'react';

export class NavBar extends React.Component {
  render() {
    const pages = ['item1', 'item2', 'item3'];
    const navLinks = pages.map(page => {
      return (
        <a href={'/' + page}>
          {page}
        </a>
      )
    });

    return <nav>{navLinks}</nav>;
  }
}