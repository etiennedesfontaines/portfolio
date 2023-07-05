import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const IconList = ({ icons, columns, fillParent }) => {
	return (
		<StyledIconList columns={columns} fillParent={fillParent}>
			{icons.map((icon) => {
				return (
					<li>
						<img src={icon.iconImage} />
						{icon.name && <p>{icon.name}</p>}
					</li>
				);
			})}
		</StyledIconList>
	);
};

IconList.propTypes = {
	icons: PropTypes.arrayOf(
		PropTypes.objectOf({
			iconImage: PropTypes.string.isRequired,
			name: PropTypes.string,
		})
	),
	columns: PropTypes.string.isRequired,
};

const StyledIconList = styled.ul`
	width: ${(props) => props.fillParent && "100%"};
	padding: ${(props) => props.fillParent && "0.8rem"};
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	gap: 1.6rem;

	li {
		flex-basis: calc((100% / ${(props) => props.columns}) - 1.6rem);
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0.4rem;

		p {
			font-size: 0.8rem;
			word-break: break-word; /* Allow word breaks */
		}
	}
`;

export default IconList;
