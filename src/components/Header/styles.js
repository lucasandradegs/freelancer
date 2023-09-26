import styled from "styled-components";

export const Container = styled.div`
    grid-area: header;

    height: 80x;
    width: 100%;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({theme}) => theme.COLORS.HEADER};

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0 123px;

`;

export const Logo = styled.div`
    > img {
        width: 56px;
        height: 56px;
        border-radius: 50%;
        border: 1px solid ${({theme}) => theme.COLORS.BACKGROUND_BLUE};
    }
`;

export const Nav = styled.div`
    > ul {
        display: flex;
        gap: 20px;
        color: ${({theme}) => theme.COLORS.BACKGROUND_PAGE};

        li {
            list-style-type: none;
            color: ${({theme}) => theme.COLORS.BACKGROUND_PAGE};
        }
    }

    .nav-list li a {
        text-decoration: none;
        color: ${({theme}) => theme.COLORS.BACKGROUND_PAGE};
    }
`;