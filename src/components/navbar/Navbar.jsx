import Link from "next/link";
import {
  House,
  PanelsTopLeft,
  Settings,
  UserRound,
  UserRoundPlus,
} from "lucide-react";
import styles from "./Navbar.module.css";

const icons = {
  home: House,
  dashboard: PanelsTopLeft,
  segments: UserRoundPlus,
  account: UserRound,
  settings: Settings,
};

const Navbar = ({ data }) => {
  return (
    <nav className={styles.header}>
      <div className={styles.navbarContainer}>
        <div className={styles.navbarMenu}>
          {data.map((item) => {
            const Icon = icons[item.icon];

            return (
              <div
                className={`${styles.navbarItem} ${item.active ? styles.active : ""}`}
                key={item.id}
              >
                <Link
                  href={item.url}
                  aria-current={item.active ? "page" : undefined}
                >
                  <Icon aria-hidden="true" size={30} strokeWidth={1.9} />
                  <span>{item.name}</span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
