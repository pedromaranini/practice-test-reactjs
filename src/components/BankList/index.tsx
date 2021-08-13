import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import arrowRight from '../../assets/arrow-right.svg';
import usersIcon from '../../assets/users-gray.svg';
import moreIcon from '../../assets/more.svg';
import mainicon from '../../assets/main-icons.svg';

import styles from './styles.module.scss';

export function BankList() {
	const [bankList, setBankList] = useState([{
		name: '',
		code: '',
		ispb: '',
	}]);

	useEffect(() => {
		fetch('https://brasilapi.com.br/api/banks/v1')
			.then((response) => {
				return response.json();
			})
			.then((responseConvert) => {
				console.log(responseConvert);
				setBankList(responseConvert);
			})
	}, [])

	return (
		<>
			<section className={styles.content}>
				<p>Bancos <span>{bankList.length} bancos</span></p>
				<input type="text" name="bank" placeholder="Digite o nome do banco" />
			</section>
			<main className={styles.generalList}>
				{bankList.map((itemAtual) => {
					return (
						<section className={styles.bankList} key={itemAtual.ispb}>
							<div className={styles.bank}>
								<div className={styles.bankStatus}>
									<p>Disparando agora...</p>
									<img src={arrowRight} alt="Disparando agora" />
									<img src={usersIcon} alt="Usuários" />
									<span>23</span>
									<img src={moreIcon} alt="Mais" />
								</div>

								<Link 
									to={`bankdetails/${itemAtual.name}/${itemAtual.code}/${itemAtual.ispb}`} 
									className={styles.link}
								>
									<div className={styles.bankName}>
										<img src={mainicon} alt="Banco" />
										<p>{itemAtual.name} - {itemAtual.code} ISPB: {itemAtual.ispb}</p>
									</div>
								</Link>

							</div>
						</section>
					)
				})}
			</main>
		</>
	);
}