import React from "react";
import {ContactListContainer, UserHeaderContainer, UserSearchContainer, ItemsContainer} from "./contactsList.styles";
import ContactItem from "../contactItem/ContactItem.component";
import CustomInput from "../customInput/CustomInput.component";

import SearchIcon from '../../img/search_icon.svg';

const ContactsList = ({chatList, updateContactSearchTxt, currentSearchTxt, contactSearchStart, setActiveChat}) => {

    const handleChange = (event) => {
        updateContactSearchTxt(event.target.value)
    }

    return (
        <ContactListContainer>
            <UserHeaderContainer>
                <span className='accImgContainer'>
                    <img src={require('../../img/user.png')} alt=""/>
                </span>
                <span className='accNumber'></span>
            </UserHeaderContainer>

            <UserSearchContainer>
                <CustomInput type='number' placeholder='Поиск по номеру телефона' handleChange={handleChange}
                             value={currentSearchTxt}/>
                <div className='searchContactBtn' onClick={() => contactSearchStart(currentSearchTxt)}>
                    <img src={SearchIcon} alt="lupe icon"/>
                </div>
            </UserSearchContainer>

            <ItemsContainer>
                {chatList.map(chatItem => <ContactItem key={chatItem.chatId}
                                                       contactTel={chatItem.chatId}
                                                       onClick={setActiveChat}
                                                       lastMessageTxt={chatItem.chatMessagesList.length > 0 ? chatItem.chatMessagesList.at(-1).messageTxt : null}
                                                       lastMessageTime={chatItem.chatMessagesList.length > 0 ? chatItem.chatMessagesList.at(-1).messageTime : null}

                />)}
            </ItemsContainer>
        </ContactListContainer>
    )
}

export default ContactsList;
