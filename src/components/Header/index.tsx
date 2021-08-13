import notification from '../../assets/notification.svg';
import arrowIcon from '../../assets/arrow-down.svg';

import styles from './styles.module.scss';
import { Link } from 'react-router-dom';

type HeaderProps = {
	bankName: string;
	title: string;
	image?: object;
}

export function Header(props: HeaderProps) {
	return (
		<div className={styles.header}>
			<div className={styles.nameBank}>
				<Link to="/banks">
					{props.image}
				</Link>
				<h1>{props.bankName}</h1>
			</div>
			<div className={styles.options}>
				<button>{props.title}</button>
				<img src={notification} alt="Notificações" />
				<span>Olá, <strong>Beleza Rara</strong> <img src={arrowIcon} alt="Mais opções" /></span>
			</div>
		</div>
	);
}