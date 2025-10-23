import styled from 'styled-components'
import { themeVar } from '../theming'

type Props = {
  checked: boolean
  onChange: () => void
  disabled?: boolean
}

export const Switch = (
  { checked, onChange, disabled }: Props
) => (
  <Container>
    <Label className="switch">
      <Input type="checkbox" checked={checked} onChange={onChange} disabled={disabled} />
      <span className="slider round"></span>
    </Label>
  </Container>
)

const Label = styled.label`
    position: relative;
    display: block;
    width: 40px;
    height: 18px;
    margin-left: 0;
`

const Input = styled.input`
    opacity: 0;
    width: 0;
    height: 0;
`

const Container = styled.div`
& {
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${themeVar('default500')};
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 12px;
    width: 12px;
    left: 4px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  
  input:checked + .slider {
    background-color: ${themeVar('accent500')};
  }
  
  input:focus + .slider {
    box-shadow: 0 0 1px ${themeVar('accent500')};
  }
  input:disabled + .slider { 
    background-color: ${themeVar('default600')};
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
  }

  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
}
`