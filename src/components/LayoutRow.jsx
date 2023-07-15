import React from "react";
import styled from "styled-components";

const LayoutRow = ({
	children,
	align = "stretch",
	justify = "flex-start",
	wrap,
	gap = "normal",
	width,
	minWidth,
	maxWidth,
	height,
	minHeight,
	maxHeight,
}) => {
	return (
		<Row
			align={align}
			justify={justify}
			wrap={wrap}
			gap={gap}
			width={width}
			minWidth={minWidth}
			maxWidth={maxWidth}
			height={height}
			minHeight={minHeight}
			maxHeight={maxHeight}
		>
			{children}
		</Row>
	);
};

const Row = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	justify-content: ${(props) => props.justify};
	align-items: ${(props) => props.align};
	flex-wrap: ${(props) => props.wrap};
	gap: ${(props) => props.gap};
	width: ${(props) => props.width};
	min-width: ${(props) => props.minWidth};
	max-width: ${(props) => props.maxWidth};
	height: ${(props) => props.height};
	min-height: ${(props) => props.minHeight};
	max-height: ${(props) => props.maxHeight};
`;

export default LayoutRow;
