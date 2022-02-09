import React from "react";
import Card from "../components/Card";
import contacts from "../assets/data/contacts";

function createCard(contact) {
    return (
        <Card
            key={contact.id}
            name={contact.name}
            img={contact.imgURL}
            tel={contact.phone}
            email={contact.email}
        />
    );
}

function MappingData() {
    return (
        <div className="mapping">
            <h1 className="heading">My Contacts</h1>
            {contacts.map(createCard)}


        </div>
    );
}

export default MappingData;
