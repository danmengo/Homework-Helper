import './App.css';
import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
 
function App() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  return (
    <div className="App">
      <header className="App-header">

        <Button
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}
                style={{ position: 'absolute', top: 0, left: 0, margin: 16 }}>
                &#9776; {/* Menu icon */} Open Menu List
        </Button>
        <Menu
            keepMounted
            anchorEl={anchorEl}
            onClose={handleClose}
            open={Boolean(anchorEl)}>
            <a
                href="https://pythontutor.com/render.html#code=def%20list_numbers%28formula%29%20-%3E%20list%3A%0A%20%20%20%20numbers%20%3D%20%5B%5D%0A%20%20%20%20current_num%20%3D%20%22%22%0A%20%20%20%20for%20each%20in%20formula%3A%0A%20%20%20%20%20%20%20%20if%20each.isalpha%28%29%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20current_num%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20numbers.append%28current_num%29%0A%20%20%20%20%20%20%20%20%20%20%20%20numbers.append%28each%29%0A%20%20%20%20%20%20%20%20%20%20%20%20current_num%20%3D%20%22%22%0A%20%20%20%20%20%20%20%20elif%20each.isdigit%28%29%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20current_num%20%2B%3D%20each%0A%0A%20%20%20%20if%20current_num%3A%0A%20%20%20%20%20%20%20%20numbers.append%28current_num%29%0A%20%20%20%20return%20numbers%0A%0A%0Adef%20list_elements%28formula%29%20-%3E%20list%3A%0A%20%20%20%20together_num%20%3D%20list_numbers%28formula%29%0A%20%20%20%20elements%20%3D%20%5B%5D%0A%20%20%20%20current_element%20%3D%20%22%22%0A%20%20%20%20for%20each%20in%20together_num%3A%0A%20%20%20%20%20%20%20%20if%20each.isalpha%28%29%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20each.isupper%28%29%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20current_element%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20elements.append%28current_element%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20current_element%20%3D%20%22%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20current_element%20%2B%3D%20each%0A%20%20%20%20%20%20%20%20%20%20%20%20elif%20each.islower%28%29%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20current_element%20%2B%3D%20each%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20elif%20each.isdigit%28%29%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20current_element%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20elements.append%28current_element%29%0A%20%20%20%20%20%20%20%20%20%20%20%20current_element%20%3D%20%22%22%0A%20%20%20%20%20%20%20%20%20%20%20%20elements.append%28each%29%0A%20%20%20%20if%20current_element%3A%0A%20%20%20%20%20%20%20%20elements.append%28current_element%29%0A%20%20%20%20return%20elements%0A%0A%0Adef%20element_counts%28formula%29%20-%3E%20dict%3A%0A%20%20%20%20element_list%20%3D%20list_elements%28formula%29%0A%20%20%20%20counts%20%3D%20%5B%5D%0A%20%20%20%20counts_dict%20%3D%20%7B%7D%0A%0A%20%20%20%20for%20i%20in%20range%28len%28element_list%29%29%3A%0A%20%20%20%20%20%20%20%20if%20element_list%5Bi%5D.isalpha%28%29%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20counts.append%28element_list%5Bi%5D%29%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20i%20%3C%20len%28element_list%29%20-%201%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20element_list%5Bi%20%2B%201%5D.isalpha%28%29%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20counts.append%28%221%22%29%0A%20%20%20%20%20%20%20%20%20%20%20%20elif%20i%20%3D%3D%20len%28element_list%29%20-%201%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20counts.append%28%221%22%29%0A%0A%20%20%20%20%20%20%20%20elif%20element_list%5Bi%5D.isdigit%28%29%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20counts.append%28element_list%5Bi%5D%29%0A%20%20%20%20%0A%20%20%20%20for%20i%20in%20range%28len%28counts%29%29%3A%0A%20%20%20%20%20%20%20%20if%20counts%5Bi%5D.isalpha%28%29%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20counts%5Bi%5D%20in%20counts_dict%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20counts_dict%5Bcounts%5Bi%5D%5D%20%2B%3D%20int%28counts%5Bi%20%2B%201%5D%29%0A%20%20%20%20%20%20%20%20%20%20%20%20else%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20counts_dict%5Bcounts%5Bi%5D%5D%20%3D%20int%28counts%5Bi%20%2B%201%5D%29%0A%20%20%20%20%0A%20%20%20%20return%20counts_dict%0A%0A%0Adef%20calculate_total%28formula%29%3A%0A%20%20%20%20counts%20%3D%20element_counts%28formula%29%0A%20%20%20%20elements%20%3D%20%7B'C'%3A%2012.01,%0A%20%20%20%20%20%20%20%20%20%20%20'H'%3A%201.01,%0A%20%20%20%20%20%20%20%20%20%20%20'O'%3A%2016.00,%0A%20%20%20%20%20%20%20%20%20%20%20'Cl'%3A%2035.45,%0A%20%20%20%20%20%20%20%20%20%20%20'Vr'%3A%2079.90,%0A%20%20%20%20%20%20%20%20%20%20%20'Na'%3A%2022.99,%0A%20%20%20%20%20%20%20%20%20%20%20'I'%3A%2019.00,%0A%20%20%20%20%20%20%20%20%20%20%20'S'%3A%20129.90,%0A%20%20%20%20%20%20%20%20%20%20%20'K'%3A39.10,%0A%20%20%20%20%20%20%20%20%20%20%20'S'%3A%2032.07,%0A%20%20%20%20%20%20%20%20%20%20%20'N'%3A%2014.01%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0Auser_input%20%3D%20input%28%22Enter%20a%20compound%3A%20%22%29%0A%0Awhile%20%28user_input%20!%3D%20'q'%29%3A%0A%20%20%20%20try%3A%0A%20%20%20%20%20%20%20%20print%28element_counts%28user_input%29%29%0A%20%20%20%20except%3A%0A%20%20%20%20%20%20%20%20print%28%22Invalid%20compound%22%29%0A%20%20%20%20user_input%20%3D%20input%28%22Enter%20a%20compound%20or%20q%20to%20quit%3A%20%22%29%0A&cumulative=false&curInstr=0&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false"
                target="_blank">
              
                <MenuItem onClick={handleClose}>
                    My Account
                </MenuItem>
            </a>
            <MenuItem onClick={handleClose}>
                Settings
            </MenuItem>
            <MenuItem onClick={handleClose}>
                Profile
            </MenuItem>
            <MenuItem onClick={handleClose}>
                Logout
            </MenuItem>
        </Menu>
        <a
          href="https://matias.me/nsfw/"
          target="_blank">
          <button>
            button ! press it !
          </button>
        </a>
      </header>
    </div>
  );
}

export default App;
