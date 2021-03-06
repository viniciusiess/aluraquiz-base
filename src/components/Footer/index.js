import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 20px;
  display: flex;
  align-items: center;
  border: 1px solid  ${({ theme }) => theme.colors.primary};
  border-radius: 4px;

  img {
    width: 58px;
    margin-right: 23px;
  }

  p {
    color: ${({ theme }) => theme.colors.primary};
  }

  a {
    color: white;
    text-decoration: none;
    transition: .3s;
    &:hover,
    &focus {
      opacity: .5;
    }

    span {
      text-decoration: underline
    }
  }
`;

export default function Footer(props) {
  return (
    <FooterWrapper {...props}>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado durante
        {' '}
        a
        {' '}
        <a href="https://www.alura.com.br/">
          <span>Imersão React da Alura</span>
        </a>
      </p>
    </FooterWrapper>
  );
}
