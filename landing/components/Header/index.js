import React from 'react';
import Link from 'next/link';

function Header(props) {
  return (
    <div>
      <h2>TMDB</h2>
      <div>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/movies">
          <a>Movies</a>
        </Link>
        <Link href="/actors">
          <a>Actors</a>
        </Link>
      </div>
    </div>
  );
}

Header.propTypes = {};

export default Header;
