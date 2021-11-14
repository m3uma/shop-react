import { List, Logo } from "./styled";
import logoSrc from './../imgs/logo.png';

const MainPanel = () => {
    return (
        <nav>
            <List>
                <Logo src={logoSrc}></Logo>
            </List>
        </nav>
    );
};

export default MainPanel;