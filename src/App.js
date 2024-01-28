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
                href="https://pythontutor.com/render.html#code=def%20list_numbers%28formula%29%20-%3E%20list%3A%0A%20%20%20%20numbers%20%3D%20%5B%5D%0A%20%20%20%20current_num%20%3D%20%22%22%0A%20%20%20%20for%20each%20in%20formula%3A%0A%20%20%20%20%20%20%20%20if%20each.isalpha%28%29%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20current_num%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20numbers.append%28current_num%29%0A%20%20%20%20%20%20%20%20%20%20%20%20numbers.append%28each%29%0A%20%20%20%20%20%20%20%20%20%20%20%20current_num%20%3D%20%22%22%0A%20%20%20%20%20%20%20%20elif%20each.isdigit%28%29%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20current_num%20%2B%3D%20each%0A%20%20%20%20if%20current_num%3A%0A%20%20%20%20%20%20%20%20numbers.append%28current_num%29%0A%20%20%20%20return%20numbers%0Adef%20list_elements%28formula%29%20-%3E%20list%3A%0A%20%20%20%20together_num%20%3D%20list_numbers%28formula%29%0A%20%20%20%20elements%20%3D%20%5B%5D%0A%20%20%20%20current_element%20%3D%20%22%22%0A%20%20%20%20for%20each%20in%20together_num%3A%0A%20%20%20%20%20%20%20%20if%20each.isalpha%28%29%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20each.isupper%28%29%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20current_element%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20elements.append%28current_element%29%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20current_element%20%3D%20%22%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20current_element%20%2B%3D%20each%0A%20%20%20%20%20%20%20%20%20%20%20%20elif%20each.islower%28%29%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20current_element%20%2B%3D%20each%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20elif%20each.isdigit%28%29%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20current_element%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20elements.append%28current_element%29%0A%20%20%20%20%20%20%20%20%20%20%20%20current_element%20%3D%20%22%22%0A%20%20%20%20%20%20%20%20%20%20%20%20elements.append%28each%29%0A%20%20%20%20%20%20%20%20%0A%20%20%20%20if%20current_element%3A%0A%20%20%20%20%20%20%20%20elements.append%28current_element%29%0A%20%20%20%20return%20elements%0Adef%20element_counts%28formula%29%20-%3E%20dict%3A%0A%20%20%20%20element_list%20%3D%20list_elements%28formula%29%0A%20%20%20%20counts%20%3D%20%5B%5D%0A%20%20%20%20counts_dict%20%3D%20%7B%7D%0A%20%20%20%20for%20i%20in%20range%28len%28element_list%29%29%3A%0A%20%20%20%20%20%20%20%20if%20element_list%5Bi%5D.isalpha%28%29%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20counts.append%28element_list%5Bi%5D%29%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20i%20%3C%20len%28element_list%29%20-%201%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20if%20element_list%5Bi%20%2B%201%5D.isalpha%28%29%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20counts.append%28%221%22%29%0A%20%20%20%20%20%20%20%20%20%20%20%20elif%20i%20%3D%3D%20len%28element_list%29%20-%201%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20counts.append%28%221%22%29%0A%20%20%20%20%20%20%20%20elif%20element_list%5Bi%5D.isdigit%28%29%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20counts.append%28element_list%5Bi%5D%29%20%20%20%0A%20%20%20%20for%20i%20in%20range%28len%28counts%29%29%3A%0A%20%20%20%20%20%20%20%20if%20counts%5Bi%5D.isalpha%28%29%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20counts%5Bi%5D%20in%20counts_dict%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20counts_dict%5Bcounts%5Bi%5D%5D%20%2B%3D%20int%28counts%5Bi%20%2B%201%5D%29%0A%20%20%20%20%20%20%20%20%20%20%20%20else%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20counts_dict%5Bcounts%5Bi%5D%5D%20%3D%20int%28counts%5Bi%20%2B%201%5D%29%0A%20%20%20%20%0A%20%20%20%20return%20counts_dict%0Auser_input%20%3D%20input%28%22Input%20formula%20/%20q%20to%20quit%3A%20%22%29%0Aelements%20%3D%20%7B%0A%20%20%20%20%20%20%20%20'C'%3A%2012.01,%0A%20%20%20%20%20%20%20%20'H'%3A%201.01,%0A%20%20%20%20%20%20%20%20'O'%3A%2016.00,%0A%20%20%20%20%20%20%20%20'Cl'%3A%2035.45,%0A%20%20%20%20%20%20%20%20'Br'%3A%2079.90,%0A%20%20%20%20%20%20%20%20'Na'%3A%2022.99,%0A%20%20%20%20%20%20%20%20'F'%3A%2019.00,%0A%20%20%20%20%20%20%20%20'I'%3A%20129.90,%0A%20%20%20%20%20%20%20%20'K'%3A39.10,%0A%20%20%20%20%20%20%20%20'S'%3A%2032.07,%0A%20%20%20%20%20%20%20%20'N'%3A%2014.01%0A%20%20%20%20%20%20%20%20%7D%0Awhile%20%28user_input%20!%3D%20'q'%29%3A%0A%20%20%20%20try%3A%0A%20%20%20%20%20%20%20%20counts%20%3D%20element_counts%28user_input%29%0A%20%20%20%20%20%20%20%20maths%20%3D%20%5B%5D%0A%20%20%20%20%20%20%20%20total%20%3D%200%0A%20%20%20%20%20%20%20%20for%20key,%20value%20in%20counts.items%28%29%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20total%20%2B%3D%20elements%5Bkey%5D%20*%20value%0A%20%20%20%20%20%20%20%20%20%20%20%20maths.append%28f'%28%7Belements%5Bkey%5D%3A.2f%7Dg*%7Bvalue%7D%29'%29%0A%20%20%20%20%20%20%20%20show_work%20%3D%20%22%2B%22.join%28maths%29%0A%20%20%20%20%20%20%20%20print%28f'%28%7Buser_input%7D%29',%20end%3D%22%20-%20%22%29%0A%20%20%20%20%20%20%20%20print%28show_work,%20end%3D%22%22%29%0A%20%20%20%20%20%20%20%20print%28f'%20%3D%20%7Btotal%3A.2f%7Dg/mol'%29%0A%20%20%20%20%20%20%20%20strung%20%3D%20f'%28%7Buser_input%7D%29%20%22%20-%20%22%20%7Bshow_work%7D%20%3D%20%7Btotal%3A.2f%7Dg/mol'%0A%20%20%20%20except%3A%0A%20%20%20%20%20%20%20%20print%28%22Invalid%20formula%22%29%0A%20%20%20%20user_input%20%3D%20input%28%22Input%20formula%20/%20q%20to%20quit%3A%20%22%29&cumulative=false&curInstr=0&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=311&rawInputLstJSON=%5B%5D&textReferences=false"
                target="_blank">
              
                <MenuItem onClick={handleClose}>
                    My Account
                </MenuItem>
            </a>
            <a
              href="https://pythontutor.com/render.html#code=equip%20%3D%20%5B%22balance%22,%20%22flasks%22,%20%22icebath%22,%20%22balancebrush%22,%20%22b%C3%BCchnerfunnel%22%20%22beaker%22,%20%22beakers%22,%20%22bentadaptor%22,%20%22meltingrange%22,%20%22vial%22,%20%22boilingchips%22,%20%22boilingsticks%22,%20%22buchnerfunnel%22,%20%22columnforchromatography%22,%20%22condenser%22,%20%22conicalcentrifugetube%22,%20%22cotton%22,%20%22disposablepipette%22,%20%22digimelt%22,%20%22distillationhead%22,%20%22distillationsetup%22,%20%22erlenmeyerflask%22,%20%22filterflask%22,%20%22filterflaskadapter%22,%20%22filterfunnel%22,%20%22filterpaperforbuchnerfunnel%22,%20%22filterpaperforhirschfunnel%22,%20%22forcep%22,%20%22ftir%22,%20%22fritforhirschfunnel%22,%20%22gcvial%22,%20%22glassthermometer%22,%20%22glassfunnel%22,%20%22glasspipette%22,%20%22glasswastecontainer%22,%20%22graduatedcylinder%22,%20%22grease%22,%20%22hirschfunnel%22,%20%22heatingblock%22,%20%22hotplate%22,%20%22icebucket%22,%20%22keckclip%22,%20%22kimwipe%22,%20%22labelingtape%22,%20%22labjack%22,%20%22liquid/solidwastecontainer%22,%20%22magneticwand%22,%20%22meltingpointcapillarytubes%22,%20%22mct%28microcentrifugetube%29%22,%20%22mctrack%22,%20%22micropipette%22,%20%22micropipettetips%22,%20%22microscaleaircondenser%22,%20%22microscalereactiontube%22,%20%22mortar%22,%20%22nmrtube%22,%20%22parafilm%22,%20%22pestle%22,%20%22phpaper%22,%20%22plasticfunnel%22,%20%22plasticpipette%22,%20%22potassiumiodide-starchpaper%22,%20%22ringclamp%22,%20%22roundbottomflask%22,%20%22roundbottomedflask%22,%20%22rubberpipettebulb%22,%20%22scintillationvial%22,%20%22separatoryfunnel%22,%20%22secondarycontainer%22,%20%22septa%22,%20%22scoop%22,%20%22stirbar%22,%20%22stirringrod%22,%20%22tubing%22,%20%22testtube%22,%20%22testtubeclamp%22,%20%22testtuberack%22,%20%22thermocouple%22,%20%22thermometeradaptor%22,%20%22tlcjar%22,%20%22tlcplate%22,%20%22tlcspotter%22,%20%22tlcvisualizingchamber%22,%20%22uvlamp%22,%20%22uv%22,%20%22washbottle%22,%20%22wastelabel%22,%20%22waterlesscondenser%22,%20%22watchglass%22,%20%22weighpaper%22%5D%0Ainventory%20%3D%20%5B%5D%0Afilename%20%3D%20input%28%22enter%20file%20name%3A%20%22%29%0Awith%20open%28str%28%7Bfilename%7D%29%29%20as%20f%3A%0A%20%20%20%20x%20%3D%20f.readlines%28%29%0A%20%20%20%20for%20line%20in%20x%3A%0A%20%20%20%20%20%20%20%20processed%20%3D%20''.join%28line.split%28%29%29%0A%20%20%20%20%20%20%20%20processed%20%3D%20processed.lower%28%29%0A%20%20%20%20%20%20%20%20clean_string%20%3D%20%5Bs%20for%20s%20in%20processed%20if%20s.isalnum%28%29%20or%20s.isspace%28%29%5D%0A%20%20%20%20%20%20%20%20processed%20%3D%20%22%22.join%28clean_string%29%0A%20%20%20%20%20%20%20%20for%20each%20in%20equip%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20each%20in%20processed%3A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20inventory.append%28each%29%0A%20%20%20%20%20%20%20%20print%28processed%29%0A%0Aprint%28%29%0Aprint%28%29%0A%0Ano_dupes%20%3D%20set%28inventory%29%0Afor%20i%20in%20no_dupes%3A%0A%20%20%20%20print%28i%29&cumulative=false&curInstr=0&heapPrimitives=nevernest&mode=display&origin=opt-frontend.js&py=311&rawInputLstJSON=%5B%5D&textReferences=false"
              target="_blank">
              <MenuItem onClick={handleClose}>
                  Settings
              </MenuItem>
            </a>
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
