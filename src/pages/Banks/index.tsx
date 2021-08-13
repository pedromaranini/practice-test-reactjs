import { BankList } from '../../components/BankList/index';
import { Header } from '../../components/Header/index';
import { Sidebar } from '../../components/Sidebar/index';
import { Line } from '../../components/Line/index';

import styles from './styles.module.scss';

export function Banks() {
	return (
		<>
			<main className={styles.container}>
				<Sidebar />

				<section className={styles.content}>
					<Header
						bankName="Bancos"
						title="+ Criar Banco"
					/>
					<Line />
					<BankList />
				</section>
			</main>
		</>
	);
}