import React from 'react';
import styled from 'styled-components';

const StyledHeading = styled.div`
	h1 {
		color: blue;
	}
`;

const Heading = () => {
	return (
		<StyledHeading>
			<h1>Heading 1</h1>
		</StyledHeading>
	);
};

export default Heading;
