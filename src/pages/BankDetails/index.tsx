import { Sidebar } from '../../components/Sidebar/index';
import { Header } from '../../components/Header/index';
import { Line } from '../../components/Line';

import { useParams } from 'react-router-dom';

import arrowLeft from '../../assets/arrow-left.svg';

import styles from './styles.module.scss';

type ParamsProps = {
	name: string;
	code: string;
	ispb: string;
}

export function BankDetails(props: ParamsProps) {
	let { name, code, ispb } = useParams<ParamsProps>();

	return (
		<>
			<Sidebar />
			<main className={styles.bank}>
				<Header
					bankName={`${name}`}
					title="Editar banco"
					image={<img src={arrowLeft} alt="Voltar" />}
				/>
				<Line />
				<section className={styles.cardDetails}>
					<h1>Detalhes do banco</h1>

					<div className={styles.bankInformation}>
						<p>{name}</p>
						<div className={styles.bankCode}>
							<p>{code}</p>
							<p>{ispb}</p>
						</div>
					</div>

					<div className={styles.horizontalLine} />

					<div className={styles.textDetails}>
						<h1>Mensagem 1</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
							Placerat pellentesque eleifend donec urna. Morbi at vulputate dictumst nullam at sit. 
							orci, pretium, dolor volutpat mattis accumsan, ornare. Ut diam sem magna ultricies. Nibh 
							pulvinar eget risus risus, sed faucibus in in ac. Enim suspendisse id lobortis euismod fringilla odio. Non in facilisis tortor tellus fringilla in interdum. Magna volutpat justo, pharetra adipiscing mauris sagittis, pellentesque diam. 
							Vestibulum, aenean eu consectetur rhoncus scelerisque at nisl, purus. Sapien tellus consequat ac ornare. 
							Amet, tortor odio velit libero, commodo sagittis cras.
						</p>

						<h1>Mensagem 2</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
							Placerat pellentesque eleifend donec urna. Morbi at vulputate dictumst nullam at sit. 
							orci, pretium, dolor volutpat mattis accumsan, ornare. Ut diam sem magna ultricies. Nibh 
							pulvinar eget risus risus, sed faucibus in in ac. Enim suspendisse id lobortis euismod fringilla odio. Non in facilisis tortor tellus fringilla in interdum. Magna volutpat justo, pharetra adipiscing mauris sagittis, pellentesque diam. 
							Vestibulum, aenean eu consectetur rhoncus scelerisque at nisl, purus. Sapien tellus consequat ac ornare. 
							Amet, tortor odio velit libero, commodo sagittis cras.
						</p>

						<h1>Mensagem 3</h1>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
							Placerat pellentesque eleifend donec urna. Morbi at vulputate dictumst nullam at sit. 
							orci, pretium, dolor volutpat mattis accumsan, ornare. Ut diam sem magna ultricies. Nibh 
							pulvinar eget risus risus, sed faucibus in in ac. Enim suspendisse id lobortis euismod fringilla odio. Non in facilisis tortor tellus fringilla in interdum. Magna volutpat justo, pharetra adipiscing mauris sagittis, pellentesque diam. 
							Vestibulum, aenean eu consectetur rhoncus scelerisque at nisl, purus. Sapien tellus consequat ac ornare. 
							Amet, tortor odio velit libero, commodo sagittis cras.
						</p>
					</div>
				</section>
			</main>

		</>
	);
}