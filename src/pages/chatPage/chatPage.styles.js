import styled from "styled-components";
import '../../constant.styles.css';
import {ContactListContainer} from "../../components/contactsList/contactsList.styles";
import {ChatSpaceContainer} from "../../components/chatSpace/chatSpace.styles";

export const ChatPageContainer = styled.div`
  display: flex;
  height: 100%;
  > *:first-child {
    border-right: var(--dark-border);
  }
  ${ContactListContainer} {
    width: 30%;
    height: 100%;
    min-width: 30%;
  }
  ${ChatSpaceContainer} {
    height: 100%;
    flex: 1;
  }
`
