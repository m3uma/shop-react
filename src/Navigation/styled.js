import styled from "styled-components";

export const List = styled.ul`
    background: ${({ theme }) => theme.color.beige};
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    list-style: none;
    width: 96%;
    margin-left: 2%;
`;

export const Item = styled.li`
    margin: 20px;
    color: ${({ theme }) => theme.color.white}
`;