import styled from 'styled-components';
import { RiKakaoTalkFill } from 'react-icons/ri';
import { SiNaver } from 'react-icons/si';
import { FcGoogle } from 'react-icons/fc';
import ThirdPartyIcon from './ThirdPartyIcon';

const Oauth = () => {
	return (
		<StyledOauth>
			<StyledDiv>SNS 간편 로그인</StyledDiv>
			<ThirdPartyContainer>
				{companies.map(el => (
					<div key={el.name}>
						<ThirdPartyIcon company={el} />
					</div>
				))}
			</ThirdPartyContainer>
		</StyledOauth>
	);
};

const companies = [
	{ name: 'google', icon: <FcGoogle />, background: 'white' },
	{
		name: 'kakaoTalk',
		icon: <RiKakaoTalkFill />,
		iconColor: '#392A29',
		background: '#FCEC4F',
	},
	{
		name: 'naver',
		icon: <SiNaver />,
		iconColor: '#59C350',
		background: 'white',
	},
];

const StyledOauth = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	align-items: center;
`;

const StyledDiv = styled.div`
	margin: 0.5rem;
`;

const ThirdPartyContainer = styled.div`
	width: 70%;
	height: 40px;
	padding: 10px;
	display: flex;
	justify-content: space-between;
`;

export default Oauth;
