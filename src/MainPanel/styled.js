import styled from "styled-components";

export const List = styled.ul`
    background: ${({ theme }) => theme.color.lightBeige};
    margin: 0px;
    padding: 0;
    display: flex;
    justify-content: center;
    list-style: none;
`;

export const Item = styled.li`
    margin: 20px;
`;

export const Logo = styled.img`
    width: 200px;
    padding: 20px;
`;