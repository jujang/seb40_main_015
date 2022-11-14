import { useState } from 'react';
import styled from 'styled-components';
import dummyImage from '../../assets/image/dummy.png';
import Button from './Button';

const BookList = () => {
	const [test, setTest] = useState<number[]>([1, 2, 3, 4, 5, 6, 7, 8]);
	return (
		<>
			{test
				? test.map(item => {
						return (
							<Container key={item}>
								<FlexBox>
									<img src={dummyImage} alt="" width={50} height={70} />
									<InfoWrapped>
										<p>모던 자바스크립트</p>
										{/* <p>상인 이름</p>
										<p>저자 / 출판사</p> */}
									</InfoWrapped>
								</FlexBox>
								<Button fontSize="small">대여 가능</Button>
							</Container>
						);
				  })
				: null}
		</>
	);
};

export default BookList;

const Container = styled.div`
	width: 90%;
	display: flex;
	justify-content: space-between;
	border: 1px solid #eaeaea;
	border-radius: 5px;
	padding: 1rem;
	margin-bottom: 0.5rem;
`;

const FlexBox = styled.div`
	display: flex;
`;

const InfoWrapped = styled.div`
	display: flex;
	margin-left: 0.3rem;
	flex-direction: column;
	justify-content: center;
	justify-items: stretch;
	p {
		font-size: 1.2rem;
		margin-left: 1rem;
	}
`;

// const Button = styled.button`
// 	background-color: ${props => props.theme.colors.main};
// 	width: 4rem;
// 	height: 2rem;
// 	font-size: 0.8rem;
// 	border: none;
// 	border-radius: 3px;
// 	color: white;
// 	margin: auto 0;
// 	:hover {
// 		background-color: #009539;
// 	}
// `;
