import { Link } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';
import homeImg from '../../assets/home.png';

import styles from './styles.module.scss';

export function Home() {
	return (
		<main className={styles.container}>
			<section className={styles.login}>
				<img src={logoImg} alt="Logo" />
				<h2>Dispare mensagens quando e para quem você quiser.</h2>

				<label>
					E-mail:
					<input 
						type="e-mail" 
						name="email" 
						placeholder="Digite seu e-mail" 
						required
					/>
				</label>

				<label>
					Senha:
					<input 
						type="senha" 
						name="senha" 
						placeholder="Digite sua senha" 
						required
					/>
				</label>

				<Link to="/banks">
					<button>Entrar</button>
				</Link>
				<span>Não tem uma conta? <strong>Cadastre-se</strong></span>
				
				<p>Copyright © 2010-2021 - Informem-se Company S.L. All rights reserved.</p>
			</section>

			<aside>
        <img src={homeImg} alt="" />
      </aside>
		</main>
	);
}