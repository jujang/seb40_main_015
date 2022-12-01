import styled from 'styled-components';
import LinkToSign from '../components/common/LinkToSign';
import LoginForm from '../components/Login/LoginForm';
import Logo from '../components/Login/Logo';
import Oauth from '../components/common/Oauth';
import { useAppSelector } from '../redux/hooks';
import { useNavigate } from 'react-router';
import { useEffect } from 'react';

const LoginPage = () => {
	const { isLogin } = useAppSelector(state => state.loginInfo);
	const navigate = useNavigate();

	useEffect(() => {
		isLogin && navigate(-1);
	}, []);

	return (
		<>
			{isLogin || (
				<StyledLoginPage>
					<Logo />
					<LoginForm />
					<StyledOauth />
					<LinkToSign
						message="회원이 아니신가요?"
						link="/signup"
						linkText="회원가입"
					/>
				</StyledLoginPage>
			)}
		</>
	);
};

const StyledLoginPage = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const StyledOauth = styled(Oauth)`
	width: 100%;
	max-width: 270px;
	margin: 1rem 0;
	padding: 0 1rem;
`;

export default LoginPage;
