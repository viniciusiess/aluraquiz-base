import styled from 'styled-components'

const AlternativesForm = styled.form`
  label {
    &[data-selector="true"] {
      background-color: ${({ theme }) => theme.colors.primary};
      &[data-status="SUCCESS"] {
        background-color: ${({ theme }) => theme.colors.sucess}
      }
      &[data-status="ERROR"] {
        background-color: ${({ theme }) => theme.colors.wrong}
      }  
    }
    &:focus {
      opacity: 1
    }
  }

  button {
    margin-top: 24px
  }
`

export default AlternativesForm