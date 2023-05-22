import styled, {css} from "styled-components";
import '../../constant.styles.css';

const outcomingMessage = css`
  margin-left: auto;
  margin-right: 20px;
  -webkit-box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 4px 4px 8px 0px rgba(0, 0, 0, 0.2);

  .messageTime {
    position: absolute;
    right: 4px;
    bottom: 4px;
    font-size: 10px;
    color: #bdbdbd;
  }

  &:after {
    content: '';
    position: absolute;
    right: -16px;
    top: 0;
    border: 10px solid transparent;
    border-left: 14px solid var(--accent-color);
  }
`

const incomingMessage = css`
  margin-left: 20px;
  margin-right: auto;
  -webkit-box-shadow: -4px 4px 8px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: -4px 4px 8px 0px rgba(0, 0, 0, 0.2);
  box-shadow: -4px 4px 8px 0px rgba(0, 0, 0, 0.2);

  .messageTime {
    position: absolute;
    right: 4px;
    bottom: 4px;
    font-size: 10px;
    color: #bdbdbd;
  }

  &:after {
    content: '';
    position: absolute;
    left: -16px;
    top: 0;
    border: 10px solid transparent;
    border-right: 14px solid var(--accent-color);;
  }
`

const getSourceType = props => {
    if (props.source === 'outgoing') {
        return outcomingMessage
    } else {
        return incomingMessage
    }
}
export const MessageItemContainer = styled.div`
  margin-top: 20px;
  border-radius: 10px;
  max-width: 40%;
  min-width: 50px;
  padding: 10px;
  padding-bottom: 20px;
  color: var(--white-color);
  background-color: var(--accent-color);
  position: relative;
  width: fit-content;
  ${getSourceType};
`
