import styled from "styled-components";

export const List = styled.ul`
    background: ${({ theme }) => theme.color.beige};
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    list-style: none;
`;

export const Item = styled.li`
    margin: 20px;
`;