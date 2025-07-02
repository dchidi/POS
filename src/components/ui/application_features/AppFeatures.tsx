import { MainMenuList } from "../../layouts/header/constant";
import styles from "./AppFeatures.module.css";

const AppFeatures = () => {
  return (
    <div className={styles.menuContainer}>
      <h1>Features</h1>
      {MainMenuList.map((mainMenu) => (
        <div key={mainMenu.id} className={styles.mainMenu}>
          <h2>
            {mainMenu.id} {mainMenu.label}
          </h2>
          <div className={styles.submenu}>
            {mainMenu.subMenu.map((subMenu) => (
              <div key={subMenu.id} className="submenuItem">
                <h3>{subMenu.label}</h3>
                {subMenu.features && (
                  <ul className="features">
                    {subMenu.features.map((feature) => (
                      <li key={feature.name}>
                        <strong>{feature.name}</strong>: {feature.description}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
export default AppFeatures;
