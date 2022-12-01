import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import LinkToSign from '../components/common/LinkToSign';
import Oauth from '../components/common/Oauth';
import Title from '../components/common/Title';
import Animation from '../components/Loading/Animation';
import SignUpForm from '../components/SignUp/SignUpForm';
import { useAppSelector } from '../redux/hooks';

function SignupPage() {
	const { isLogin } = useAppSelector(state => state.loginInfo);
	const navigate = useNavigate();

	useEffect(() => {
		isLogin && navigate(-1);
	}, []);

	return (
		<>
			{isLogin || (
				<StyledSignupPage>
					<Title text="회원가입" />
					<Main>
						<SignUpForm />
						<StyledOauth />
						<LinkToSign
							message="이미 회원이신가요?"
							link="/login"
							linkText="로그인"
						/>
					</Main>
				</StyledSignupPage>
			)}
		</>
	);
}

const StyledSignupPage = styled.div`
	width: 100%;
	min-width: 250px;
	padding: 0 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const StyledOauth = styled(Oauth)`
	width: 70%;
	max-width: 270px;
	margin: 1rem 0;
	padding: 0 1rem;
`;

const Main = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export default SignupPage;
