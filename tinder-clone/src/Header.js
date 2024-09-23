import React from 'react'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'
import PersonIcon from '@mui/icons-material/Person'

function Header() {
  return (
    <div>
        {<PeopleAltIcon />}
        {<PersonIcon />}
        <h2>I am a header</h2>
    </div>
  );
}

export default Header;
