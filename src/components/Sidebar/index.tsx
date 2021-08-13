import logo from '../../assets/logo-white.svg';
import iconsImg from '../../assets/icons.svg';
import usersImg from '../../assets/users.svg';
import houseImg from '../../assets/house.svg';
import logout from '../../assets/logout.svg';

import styles from './styles.module.scss';

export function Sidebar() {
	return (
		<section className={styles.sidebar}>
			<img src={logo} alt="Logo" className={styles.logo} />
			<div className={styles.icons}>
				<img src={iconsImg} alt="Icones" />
				<img src={usersImg} alt="Users" />
				<img src={houseImg} alt="House" />
			</div>
			<img src={logout} alt="House" className={styles.logout} />
		</section>
	);
}