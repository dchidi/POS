// import { Row } from "../row_column";
import MenuItem from "../../ui/menu_item/MenuItem";
import { Row } from "../row_column";
import { MainMenuList } from "./constant";
import styles from "./MainMenu.module.css";

const MainMenu = () => {
  return (
    <Row className={styles.menuContainer} gap={20} wrap="wrap">
      {MainMenuList.map((mainMenu) => (
        <MenuItem
          callback={() => {}}
          category_id="1"
          isActive={false}
          label={mainMenu.label}
          sub_category_id="1"
          name={mainMenu.name}
          icon
        />
        // <div key={mainMenu.id} className="mainMenu">
        //   <h2>{mainMenu.label}</h2>
        //   <div className="submenu">
        //     {mainMenu.subMenu.map((subMenu) => (
        //       <div key={subMenu.id} className="submenuItem">
        //         <h3>{subMenu.label}</h3>
        //         {subMenu.features && (
        //           <ul className="features">
        //             {subMenu.features.map((feature) => (
        //               <li key={feature.name}>
        //                 <strong>{feature.name}</strong>: {feature.description}
        //               </li>
        //             ))}
        //           </ul>
        //         )}
        //       </div>
        //     ))}
        //   </div>
        // </div>
      ))}
    </Row>
  );
};
export default MainMenu;
